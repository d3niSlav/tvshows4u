exports.up = knex => {
  return knex.schema
    .createTable('shows', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('year');
      table.date('releaseDate');
      table.string('status');
      table.string('runtime');
      table.string('genre');
      table.text('plot');
      table.string('language');
      table.string('country');
      table.string('awards');
      table.string('poster');
      table.string('logo');
      table.float('imdbRating', 3, 1);
      table.string('imdbId');
      table.string('trailer');
    })
    .createTable('seasons', table => {
      table.increments('id').primary();
      table.text('description');
      table.integer('number');
      table.string('poster');
      table.integer('releaseYear');
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows')
        .onDelete('CASCADE');
    })
    .createTable('episodes', table => {
      table.increments('id').primary();
      table.date('releaseDate');
      table.string('imdbId');
      table
        .string('imdbRating')
        .defaultTo('N/A');
      table.string('runtime');
      table.string('screenshot');
      table.text('plot');
      table.string('title');
      table.integer('number');
      table
        .integer('seasonId')
        .unsigned()
        .references('id')
        .inTable('seasons')
        .onDelete('CASCADE');
    })
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('shows')
    .dropTableIfExists('seasons')
    .dropTableIfExists('episodes');
};
