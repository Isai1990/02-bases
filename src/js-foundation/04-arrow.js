const users = [
    {
    id: 1,
    name: 'john Doe',
    },
    {
    id: 2,
    name: 'janen Doe',
    }

];


const getUserById = (id, callback) => {
    const user = users.find((user) =>  user.id === id);

    // uso del Ternario
    user 
    ? callback(null, user)
    : callback(`User not found with id ${id}`);

}

module.exports = {

    getUserById,

}
