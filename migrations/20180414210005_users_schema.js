exports.up = knex => {
  return knex.schema
    .createTable('profiles', table => {
      table.increments('id').primary();
      table.string('name');
      table.dateTime('dateCreated');
      table.string('profileImage');
    })
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('email');
      table.text('password');
      table.integer('role').defaultTo(3);
      table.dateTime('passwordResetExpirationDate');
      table.text('passwordResetToken');
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
    .dropTableIfExists('profiles')
    .dropTableIfExists('users');
};
