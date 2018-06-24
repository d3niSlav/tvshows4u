exports.up = knex => {
  return knex.schema
    .createTable('comments', table => {
      table.increments('id').primary();
      table.text('commentText');
      table.dateTime('commentDate');
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows')
        .onDelete('CASCADE');
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE');
    })
    .createTable('comments_profiles', table => {
      table
        .integer('commentId')
        .unsigned()
        .references('id')
        .inTable('comments')
        .onDelete('CASCADE');
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('comments_profiles')
    .dropTableIfExists('comments');
};
