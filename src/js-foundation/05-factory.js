//const {getAge, getUUID} = require('../plugins');

const buildMakePerson = ({getUUID, getAge}) => {
   return ({name, birthdate}) => {
    return{
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}


}




//const obj = {name: 'Isai', birthdate: '10-10-1990'}
//const Isai = buildPerson(obj);
//console.log(Isai);



module.exports = {
    buildMakePerson,
}




/*

const obj = {name: 'Isai', birthdate: '1985-10-1990'};

const buildPerson = ({name, birthdate}) => {
    return{
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}

const Isai = buildPerson(obj);

console.log(Isai);

*/