const {getAge, getUUID} = require('./plugins')
const{ buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Esto es un error');































//const getPokemonById = require('./js-foundation/06-promises');
//const { getPokemonById } = require('./js-foundation/06-promises');

/*getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.error(err))
    .finally(() => console.log('Finalmente'));8?














//const {getAge, getUUID} = require('./plugins');

//const { emailTemplate} = require('./js-foundation/01-template.js');

//require('./js-foundation/02-destructuring.js')
//require('./js-foundation/03-callbacks');
//console.log(emailTemplate);
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrow');

//require('./js-foundation/05-factory');
//const { buildMakePerson } = require('./js-foundation/05-factory');


//const getPokemonById =require('./js-foundation/06-promises');


//getPokemonById(4)
    //.then( ( pokemon ) => console.log({ pokemon }) )
   // .catch( ( err ) => console.log( err ) )
  //  .finally( () => console.log('Finalmente') );


//! Referencia a la funcion factory y uso 

//const makePerson = buildMakePerson({getUUID, getAge});

//const obj = {name: 'Isai', birthdate: '10-10-1990'}

//const Isai = makePerson(obj);

//console.log({Isai});


/*
const id = 1;

// funcion Callback
getUserById(id, (error, user) => {
    if(error){
        throw new Error(error)
    }

    console.log({user})
});*/

//module.exports = getPokemonById;