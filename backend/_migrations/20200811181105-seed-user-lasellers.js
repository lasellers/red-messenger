'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return db.insert('users', ['id', 'name'], [1, 'Lewis Sellers']);
};

exports.down = function (db) {
    return db.runSql('DELETE From users WHERE :id', {':id': 1});
};

exports._meta = {
    "version": 1
};
