var readlineSync = require('readline-sync');
var axios = require('axios');
var CodeGen = require('swagger-js-codegen').CodeGen;
var cookie = require('cookie');
var _ = require('lodash');
var fs = require('fs');

const SWAGGER_JSON = 'http://backend.plmx.xcloud-dev.x5.ru/swagger.json';

axios
  .get(SWAGGER_JSON, {
    headers: {},
  })
  .then(result => {
    // TODO this is bug patch
    console.log('!?', result);
    //  result.data.definitions.DriverDebitChargeInfo.properties.id_type.enum = [82, 84];
    const swagger = _.omit(result.data, '_paths');
    //const ts = CodeGen.getTypescriptCode({moduleName: 'Foo', swagger: swagger, beautify: true})
    var source = CodeGen.getCustomCode({
      moduleName: 'FleetAPI',
      className: 'FleetAPI',
      lint: false,
      swagger,
      template: {
        class: fs.readFileSync('template/class.mustache', 'utf-8'),
        method: fs.readFileSync('template/method.mustache', 'utf-8'),
        type: fs.readFileSync('template/type.mustache', 'utf-8'),
      },
    });
    console.log('Writing file...');
    fs.writeFileSync('./api-types.ts', source);
  });
