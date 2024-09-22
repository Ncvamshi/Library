'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name:'Berserk',
        author:'Kentaro Miura',
        year_published: 1997
      },
      {
        name:'One Piece',
        author:'Eiichiro Oda',
        year_published: 1997
      },
      {
        name:'Vinland Saga',
        author:'Makoto Yukimura',
        year_published: 2019
      },
      {
        name:'Vagabond',
        author:'Takehiko Inoue',
        year_published: 1998
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {})
  }
};
