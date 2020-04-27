/**
 * @HeroModel
 */

const mongo = require('mongoose');

const Shcema = new mongo.Schema({
    name: { type: String },
    icon: { type: String },
    title: { type: String },
    categorys: [
        { ref: 'Category', type: mongo.SchemaTypes.ObjectId }
    ],
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number },
    },
    skills: [
        {
            icon: { type: String },
            name: { type: String },
            tips: { type: String },
            description: { type: String }
        }
    ],
    tailwind: [{ ref: 'Item', type: mongo.SchemaTypes.ObjectId }],
    upwind: [{ ref: 'Item', type: mongo.SchemaTypes.ObjectId }],
    usageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    partners: [
        {
            description: { type: String },
            hero: { ref: 'Hero', type: mongo.SchemaTypes.ObjectId }
        }
    ]
});

const HeroModel = mongo.model('Hero', Shcema);

module.exports = HeroModel;