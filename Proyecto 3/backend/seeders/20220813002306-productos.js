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
     let arreglo=[{"nombre":"Plancha Black and Decker","precio":50,"imagen":"https://www.sukasa.com/15668-medium_default/plancha-a-vapor-celeste-1200w-black-decker-450-445.jpg","cantidad":50,"categoria":1},
     {"nombre":"Lego Sonic","precio":60,"imagen":"https://i.blogs.es/71036e/lego-sonic/1366_2000.jpeg","cantidad":50,"categoria":2},
     {"nombre":"Shampoo Manzanilla 400ml","precio":5,"imagen":"https://www.farmaciasmedicity.com/9926-large_default/para-mi-bebe-shampoo-manzanilla-con-400-ml.jpg","cantidad":"50","categoria":3},
     {"nombre":"Escoba","precio":10,"imagen":"https://www.sukasa.com/149619-medium_default/escoba-120-cm-catg-4049-escoba-120cm.jpg","cantidad":"50","categoria":4},
     {"nombre":"Batidora","precio":50,"imagen":"https://s.libertaddigital.com/2020/09/18/batidora-de-vaso-russell-hobbs.jpg","cantidad":"50","categoria":1},
     {"nombre":"Peluche Mickey Mouse","precio":35,"imagen":"https://www.tventas.com/img/p/5/7/0/1/6/5/3/5701653-large_default.jpg","cantidad":"50","categoria":2},
     {"nombre":"Paquete de jabón Protex","precio":5,"imagen":"https://www.fybeca.com/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_FybecaEcuador/default/dwfe2d3c06/images/large/100082028-JABON-BARRA-PROTEX-PRO-HIDRATA-110-G-PAQUETE.jpg?sw=1000&sh=1000","cantidad":50,"categoria":3},
     {"nombre":"Trapeador","precio":30,"imagen":"https://www.tventas.com/img/p/1/1/1/6/9/3/4/0/11169340-large_default.jpg","cantidad":50,"categoria":4}
    ];
   
    for (var i = arreglo.length - 1; i >= 0; i--) {
      let producto = arreglo[i]
      await queryInterface.bulkInsert('Productos', [{  
            nombre: producto['nombre'],
            id: i, 
            precio: producto['precio'], 
            cantidad:producto['cantidad'],
            categoria: producto['categoria'],
            imagen: producto['imagen'],
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
     await queryInterface.bulkDelete('Productos', null, {});  
  }
};
