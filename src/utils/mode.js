const inflection = require('inflection');

function getModel(resoure) {
    const classModelName = inflection.classify(resoure);
    return require(`../models/${classModelName}`);
};

module.exports = {
    getModel
};
