/**
 * @CategoryModel
 */

const mongo = require('mongoose');


// 建立 Schema 模型
const Schema = new mongo.Schema({
    name: { type: String },
    // 关联
    parent: {
        ref: 'Category',
        type: mongo.SchemaTypes.ObjectId
    }
});;



// 创建 Schema 集合
const CategoryModel = mongo.model('Category', Schema);

module.exports = CategoryModel;