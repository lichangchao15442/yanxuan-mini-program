'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DECIMAL, TINYINT } = app.Sequelize;

  const Topic = app.model.define('topic',{
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    content: TEXT,
    avatar: STRING(255),
    itemPicUrl: {
      type: STRING(255),
      field: "item_pic_url"
    },
    subtitle: STRING(255),
    topicCategoryId: {
      type: INTEGER,
      field: "topic_category_id"
    },
    priceInfo: {
      type: DECIMAL,
      field: "price_info"
    },
    readCount: {
      type: STRING(255),
      field: "read_count"
    },
    scenePicUrl: {
      type: STRING(255),
      field: "scene_pic_url"
    },
    topicTemplateId: {
      type: INTEGER,
      field: "topic_template_id"
    },
    topicTagId: {
      type: INTEGER,
      field: "topic_tag_id"
    },
    sortOrder: {
      type: INTEGER,
      field: "sort_order"
    },
    isShow: {
      type: TINYINT,
      field: "is_show"
    }
  },
  {
    timestamps: false, //去除createAt updateAt
    freezeTableName: true, //使用自定义表名
    // 实例对应的表名
    tableName: "topic",
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

  return Topic;
};