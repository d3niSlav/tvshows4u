exports.up = knex => {
  return knex.schema
    .createTable('actors', table => {
      table.increments('id').primary();
      table.string('name');
      table.text('bio');
      table.string('actorImage');
      table.string('thumbnail');
      table.date('birthdate');
    })
    .createTable('shows_actors', table => {
      table
        .integer('actorId')
        .unsigned()
        .references('id')
        .inTable('actors')
        .onDelete('RESTRICT');
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows')
        .onDelete('RESTRICT');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('shows_actors')
    .dropTableIfExists('actors');
};
