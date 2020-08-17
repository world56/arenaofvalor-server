const express = require('express');
const { getModel } = require('../../utils/mode');
const router = express.Router({ mergeParams: true });

module.exports = app => {

    // 处理参数&找到模块
    app.use('/admin/rest/:resource', async(req, res, next) => {
        const Model = getModel(req.params.resource);
        req.Model = Model;
        next();
    }, router);


    // 列表
    router.get('/', async (req, res) => {
        const optionParam = {};
        if (req.Model.modelName === 'Category') {
            optionParam.populate = 'parent';
        };
        const DBres = await req.Model.find().setOptions(optionParam);
        res.send(DBres);
    });

    // 详情
    router.get('/:_id', async (req, res) => {
        const DBres = await req.Model.findById(req.params._id);
        res.send(DBres);
    });

    // 新增
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });

    // 编辑
    router.put('/', async (req, res) => {
        const { body } = req;
        const model = await req.Model.findByIdAndUpdate(body._id, body);
        res.send(model);
    });

    // 删除
    router.delete('/', async (req, res) => {
        const { query } = req;
        await req.Model.findByIdAndDelete(query._id, query);
        res.send({ msg: '删除成功' });
    });

};