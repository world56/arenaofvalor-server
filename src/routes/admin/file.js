const express = require('express');

const router = express.Router();

const multer = require('multer');
const fileUpload = multer({
    dest: `${__dirname}/../../../static`
});

module.exports = app => {

    app.use(router);

    // 上传文件
    router.post('/admin/upload', fileUpload.single('avatar'), async (req, res) => {
        const { file } = req;

        file.url = `http://localhost:4001/static/${file.filename}`;
        res.send(file);
    });

};