const { MongoClient } = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
const urlDb = 'mongodb://localhost:27017';

module.exports = class Mongo {
    static save(options) {

        return mongoOpen()
            .then((coll) => {
                options.id = Date.now();
                return coll.insertOne(options);
            }).then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return err;
            }).finally(() => {
                
            });
    };

    static async findAll() {
        return mongoOpen()
            .then((coll) => {
                return coll.find({}).toArray();
            }).then((result) => {
                return result;
            }).catch((err) => {
                console.log(err);
                return err;
            });
    };

    static delete(id) {

        return mongoOpen()
            .then((coll) => {
                return coll.deleteOne({ "id": id });
            }).then((result) => {
                return result;
            }).catch((err) => {
                console.log(err);
                return err;
            });
    };

    static update(id, options) {

        return mongoOpen()
            .then((coll) => {
                options.id = id;
                console.log(options);
                return coll.updateOne({ "id": id }, { $set: options });
            }).then((result) => {
                return result;
            }).catch((err) => {
                console.log(err);
                return err;
            });
    };
};

function mongoOpen() {
    return mongoClient.connect(urlDb)
        .then((db) => {
            return db.db("endpoints").collection("endpoint");
        });
};
