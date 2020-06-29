const Sequelize = require('sequelize')
const Controller = require('egg').Controller;

const Op = Sequelize.Op

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

const hasValue = (value: any) => {
  if (value === '' || value === null || value === undefined) {
    return false
  }
  return true
}

class HomeController extends Controller {
  // 获取首页展示数据
  async index() {
    const ctx = this.ctx;
    // const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    const banner = await ctx.model.Ad.findAll({});
    const channel = await ctx.model.Channel.findAll({
      order: [ ['sortOrder', 'asc']]
    })
    const brandList = await ctx.model.Brand.findAll({
      limit: 4,
      where: {
        isNew: 1
      },
      order: [
        ['newSortOrder', 'asc']
      ]
    })
    const newGoods = await ctx.model.Goods.findAll({
      limit: 4,
      where: {
        isNew: 1
      },
      attributes: ['id', 'name', 'listPicUrl', 'retailPrice']
    })
    const hotGoods = await ctx.model.Goods.findAll({
      limit: 3,
      where: {
        isHot: 1
      },
      attributes: ['id', 'name', 'listPicUrl', 'retailPrice', 'goodsBrief']
    })
    const topicList = await ctx.model.Topic.findAll({
      limit: 3
    })
    const categoryList = await ctx.model.Category.findAll({
      where: { parentId: 0 }
    });

    let newCategoryList: { id: number; name: string; goodsList: any }[] = [];
    // 注意：若使用map会有异步问题（因此采用for循环）
    for (const categoryItem of categoryList) {
      let childCategoryIds = await ctx.model.Category.findAll({
        limit: 100,
        where: {
          parentId: categoryItem.id,
        },
        attributes: ['id'],
      })
      childCategoryIds = childCategoryIds.map(item => item.id)
      const categoryGoods = await ctx.model.Goods.findAll({
        limit: 7,
        where: {
          categoryId: {
            [Op.in]: childCategoryIds
          }
        },
        attributes: ['id', 'name', 'listPicUrl', 'retailPrice']
      })
      newCategoryList.push({
        id: categoryItem.id,
        name: categoryItem.name,
        goodsList: categoryGoods
      })
    }
    

    ctx.body = {
      code: '1',
      data: {
        banner,
        channel,
        categoryList: newCategoryList,
        brandList,
        newGoodsList: newGoods,
        hotGoodsList: hotGoods,
        topicList
      }
    }
  }

  /**
   * 获取商品列表
   */
  async list() {
    const ctx = this.ctx;
    const { keyword,
      page, size,
      sort, order,
      // categoryId
    } = ctx.query;
    
    // 查询条件
    const whereMap: { [key: string]: any } = {};
    if (hasValue(keyword)) {
      whereMap.name = {
        [Op.like]: '%' + keyword + '%'
      }
      // 添加到历史搜索（去重，重复的只更新时间）
      const hasKeyword = await ctx.model.SearchHistory.findOne({
        where: {
          keyword
        }
      })
      if (hasKeyword) {
        // 更新添加时间
        hasKeyword.update({
          addTime: new Date()
        })
      } else {
        // 插入新数据
        await ctx.model.SearchHistory.create({
          keyword,
          userId: 1, // TODO: 当前登录用户的ID，暂且写死
          addTime: new Date()
        })
      }
    };

    // 排序条件
    let orderMap:[string,string][] = [];
    if (sort === 'price') {
      orderMap = [['retailPrice', order]];
    } else {
      orderMap = [['id', 'desc']];
    }

    // 筛选的分类
    let filterCategory = [{
      id: 0,
      name: '全部',
    }]

    const categoryIdArr = await ctx.model.Goods.findAll({
      limit: 10000,
      where: whereMap,
      attributes: ['categoryId']
    })
    const categoryIds = categoryIdArr.map(item => item.categoryId) || []
    if (categoryIds.length) {
      // 查找二级分类的parent_id
      const parentIdArr = await ctx.model.Category.findAll({
        limit: 10000,
        where: {
          id: {
            [Op.in]: categoryIds
          }
        },
        attributes: ['parentId']
      })
      const parentIds = parentIdArr.map(item => item.parentId) || []
      // 一级分类
      const parentCategory = await ctx.model.Category.findAll({
        where: {
          id: {
            [Op.in]: parentIds
          }
        },
        order: [['sortOrder', 'asc']],
        attributes: ['id', 'name']
      })
      if (parentCategory.length) {
        filterCategory = filterCategory.concat(parentCategory)
      }
    }

    // TODO: 加入分类条件

    const goodsData = await ctx.model.Goods.findAll({
      limit: toInt(size),
      offset: toInt(page)-1,
      where: whereMap,
      order: orderMap,
      attributes:['id', 'name', 'listPicUrl', 'retailPrice']
    })
    goodsData.goodsList = goodsData

    ctx.body = {
      code: '1',
      data: {
        goodsList: goodsData,
        filterCategory
      }
    }
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }

  // 获取商品总数
  async getGoodsCount() {
    const ctx = this.ctx;
    const goodsCount = await ctx.model.Goods.findAll({
      where: {
        isDelete: 0,
        isOnSale: 1
      }
    })
    ctx.body = {
      code: '1',
      data: goodsCount.length
    }
  }
}
export {}

module.exports = HomeController;