const Sequelize = require('sequelize')
const Controller = require('egg').Controller;

const Op = Sequelize.Op

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
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
}
export {}

module.exports = HomeController;