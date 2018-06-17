exports.up = knex => {
  return knex.schema
    .createTable('profiles', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('profileImage');
    })
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('email');
      table.text('password');
      table.dateTime('passwordResetExpirationDate');
      table.text('passwordResetToken');
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE');
    })
    .createTable('favorites', table => {
      table.increments('id').primary();
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows')
        .onDelete('RESTRICT');
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('RESTRICT');
    })
    .createTable('watchlists', table => {
      table.increments('id').primary();
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows')
        .onDelete('RESTRICT');
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('SET NULL');
      table
        .integer('seasonNumber')
        .defaultTo(1);
      table
        .integer('episodeNumber')
        .defaultTo(1);
      table
        .boolean('isActive')
        .defaultTo(false);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('watchlists')
    .dropTableIfExists('favorites')
    .dropTableIfExists('profiles')
    .dropTableIfExists('users');
};
