const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'ProShop E-commerce',
        version: '1.0.0',
      },
      servers: [{
        url: '/api',
      }]
    },
    apis: ['./src/swagger/index.yml','./src/routes/**/*.yml'], // files containing annotations as above
    validatorUrl : null,
  };

export default options;