'use strict';

module.exports = app => {
  const { INTEGER, STRING, MEDIUMINT, TEXT, TINYINT, SMALLINT, DECIMAL } = app.Sequelize;

  const Goods = app.model.define('goods',  {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: {
      type: INTEGER,
      field: "category_id"
    },
    goodsSn: {
      type: STRING(60),
      field: "goods_sn"
    },
    name: STRING(120),
    brandId: {
      type: INTEGER,
      field: "brand_id"
    },
    goodsNumber: {
      type: MEDIUMINT,
      field: "goods_number"
    },
    keywords: STRING(255),
    goodsBrief: {
      type: STRING(255),
      field: "goods_brief"
    },
    goodsDesc: {
      type: TEXT,
      field: "goods_desc"
    },
    isOnSale: {
      type: TINYINT,
      field: "is_on_sale"
    },
    addTime: {
      type: INTEGER,
      field: "add_time"
    },
    sortOrder: {
      type: SMALLINT,
      field: "sort_order"
    },
    isDelete: {
      type: TINYINT,
      field: "is_delete"
    },
    attributeCategory: {
      type: INTEGER,
      field: "attribute_category"
    },
    counterPrice: {
      // 专柜价格
      type: DECIMAL(10, 2),
      field: "counter_price"
    },
    extraPrice: {
      // 附加价格
      type: DECIMAL(10, 2),
      field: "extra_price"
    },
    isNew: {
      type: TINYINT,
      field: "is_new"
    },
    goodsUnit: {
      // 商品单位
      type: STRING(45),
      field: "goods_unit"
    },
    primaryPicUrl: {
      // 商品主图
      type: STRING(255),
      field: "primary_pic_url"
    },
    listPicUrl: {
      // 商品列表图
      type: STRING(255),
      field: "list_pic_url"
    },
    retailPrice: {
      // 零售价格
      type: DECIMAL(10, 2),
      field: "retail_price"
    },
    sellVolume: {
      // 销量
      type: INTEGER,
      field: "sell_volume"
    },
    primaryProductId: {
      type: INTEGER,
      field: "primary_product_id"
    },
    unitPrice: {
      // 单位价格，单价
      type: DECIMAL(10, 2),
      field: "unit_price"
    },
    promotionDesc: {
      type: STRING(255),
      field: "promotion_desc"
    },
    promotionTag: {
      type: STRING(45),
      field: "promotion_tag"
    },
    appExclusivePrice: {
      // APP专享价
      type: DECIMAL(10, 2),
      field: "app_exclusive_price"
    },
    isAppExclusive: {
      // 是否是APP专属
      type: TINYINT,
      field: "is_app_exclusive"
    },
    isLimited: {
      type: TINYINT,
      field: "is_limited"
    },
    isHot: {
      type: TINYINT,
      field: "is_hot"
    }
  },
  {
    timestamps: false, //去除createAt updateAt
    freezeTableName: true, //使用自定义表名
    // 实例对应的表名
    tableName: "goods",
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

  return Goods;
};