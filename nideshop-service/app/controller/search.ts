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
    const defaultKeyword = await ctx.model.Keywords.findAll({
      limit: 1,
      where: {
        isDefault: 1
      }
    })
    const hotKeywordList = await ctx.model.Keywords.findAll({
      limit: 10,
      attributes: ['keyword', 'isHot'],
      // attributes: [Sequelize.fn('DISTINCT', Sequelize.col('keyword')),'keyword'],
    })

    let historyKeywordList = await ctx.model.SearchHistory.findAll({
      limit:10,
      attributes: [Sequelize.fn('DISTINCT', Sequelize.col('keyword')) ,'keyword'],
      where: {
        userId: 1, //TODO: 当前登录用户的ID，暂且写死
      },
    })
    historyKeywordList = historyKeywordList.map(item => item.keyword)

    ctx.body = {
      code: '1',
      data: {
        defaultKeyword: defaultKeyword[0],
        hotKeywordList,
        historyKeywordList
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

  async helper() {
    const ctx = this.ctx;
    const { keyword } = ctx.query
    let keywords = await ctx.model.Keywords.findAll({
      limit: 10,
      where: {
        keyword: {
          [Op.like]: '%' + keyword + '%'
        }
      },
      distinct: true,
      attributes:['keyword']
    })
    keywords = keywords.map(item => item.keyword)

    ctx.body = {
      code: '1',
      data: keywords
    }
  }
}
export {}

module.exports = HomeController;