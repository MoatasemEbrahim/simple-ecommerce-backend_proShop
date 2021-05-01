const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Memo',
        version: '1.0.0',
      },
    },
    apis: ['./src/controllers/**/*.ts'], // files containing annotations as above
    validatorUrl : null
  };

export default options;