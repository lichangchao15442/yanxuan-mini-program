'use strict';

module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;

  const Keywords = app.model.define('keywords', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    keyword: STRING(90),
    isHot: {
      type: TINYINT,
      field: "is_hot"
    },
    isDefault: {
      type: TINYINT,
      field: "is_default"
    },
    isShow: {
      type: TINYINT,
      field: "is_show"
    },
    sortOrder: {
      type: INTEGER,
      field: "sort_order"
    },
    schemeUrl: {
      type: STRING,
      field: "scheme_url"
    },
    type: INTEGER
  },
  {
    timestamps: false, //去除createAt updateAt
    freezeTableName: true, //使用自定义表名
    // 实例对应的表名
    tableName: "keywords",
    // 如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
    // 将createdAt对应到数据库的created_at字段
    createdAt: "created_at",
    // 将updatedAt对应到数据库的updated_at字段
    updatedAt: "updated_at",
    //And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
    deletedAt: false, //'deleted_at',
    //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
    paranoid: false
  });

  return Keywords;
};