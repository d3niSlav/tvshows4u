exports.up = knex => {
  return knex.schema
    .createTable('profiles_shows', table => {
      table
        .integer('profileId')
        .unsigned()
        .references('id')
        .inTable('profiles');
      table
        .integer('showId')
        .unsigned()
        .references('id')
        .inTable('shows');
      table.integer('seasonNumber').defaultsTo(1);
      table.integer('episodeNumber').defaultsTo(1);
      table.bool('isFavourite').defaultsTo(false);
      table.bool('isWatched').defaultsTo(false);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('profiles_shows');
};
