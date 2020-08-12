'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
    return db.insert('messages', ['id', 'user_id', 'title', 'message'], [2, 1, 'New Message', 'This is a new message.']);
};

exports.down = function(db) {
    return db.runSql('DELETE From messages WHERE :id', {':id': 2});
};

exports._meta = {
  "version": 1
};
