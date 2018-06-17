exports.up = knex => {
  return knex.schema
    .createTable('contactMessages', table => {
      table.increments('id').primary();
      table.string('name');
      table.text('email');
      table.text('message');
      table.dateTime('dateCreated');
      table.bool('isRead').defaultsTo(false);
      table.bool('isAnswered').defaultsTo(false);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('contactMessages');
};
