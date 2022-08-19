'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let arrCategoria = ["Electrodomésticos", "Juguetes", "Aseo", "Hogar"];
     for (let i = 1; i <5; i++) {  
      await queryInterface.bulkInsert('Categoria', [{  
          nombre: arrCategoria[i-1],  
          id: i, 
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
