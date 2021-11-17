
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recommendation').del()
    .then(function () {
      // Inserts seed entries
      return knex('recommendation').insert([
        {description: 'Use máscara '},
        {description: 'Higienize bem as mãos'},
        {description: 'Fique em casa'}
      ]);
    });
};
