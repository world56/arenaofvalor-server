/**
 * @ItemModel
 */

const mongo = require('mongoose');


// 建立 Item Schema 模型
const Schema = new mongo.Schema({
    name: { type: String },
    icon: { type: String }
});

const ItemModel = mongo.model('Item', Schema);

module.exports = ItemModel;