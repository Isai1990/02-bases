const getPokemonById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json());
};

module.exports = {
    getPokemonById,
};





















//const getPokemonById = (id , callback) => {

   /* const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
   
    fetch(url).then((response) => {
            response.json().then((pokemon) => {
                //console.log(pokemon.name);

                callback(pokemon.name);
            });

    });

    //return 'Pokemon'

}*/

//const getPokemon = (id) => {
   // return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      //  .then(resp => resp.json());
//}


//module.exports = getPokemonById;

//module.exports = {
   // getPokemonById,
//};


//}