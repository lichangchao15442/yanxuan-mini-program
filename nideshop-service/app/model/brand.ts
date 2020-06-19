'use strict';

module.exports = app => {
  const { STRING, INTEGER, TINYINT, DECIMAL } = app.Sequelize;

  const Brand = app.model.define("brand", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(255),
    listPicUrl: {
      type: STRING(255),
      field: "list_pic_url"
    },
    simpleDesc: {
      type: STRING(255),
      field: "simple_desc"
    },
    picUrl: {
      type: STRING(255),
      field: "pic_url"
    },
    sortOrder: {
      type: TINYINT,
      field: "sort_order"
    },
    isShow: {
      type: TINYINT,
      field: "is_show"
    },
    floorPrice: {
      type: DECIMAL(10, 2),
      field: "floor_price"
    },
    appListPicUrl: {
      type: STRING(255),
      field: "app_list_pic_url"
    },
    isNew: {
      type: TINYINT,
      field: "is_new"
    },
    newPicUrl: {
      type: STRING(255),
      field: "new_pic_url"
    },
    newSortOrder: {
      type: TINYINT,
      field: "new_sort_order"
    },
  },
  {
    timestamps: false, //去除createAt updateAt
    freezeTableName: true, //使用自定义表名
    // 实例对应的表名
    tableName: "brand",
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

  return Brand;
};