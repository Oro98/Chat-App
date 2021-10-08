const users = []

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if(!username || !room){
        return{
            error: 'Username and room are required!'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = { id, username, room }
    users.push(user)
    return { user }    
}

// remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

// Create getUser
const getUser = (id) => {
   return users.find((user) => user.id === id)
}

// create getUsersInRoom
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}








// // add new user
// addUser({
//     id: 22,
//     username: 'Robin ',
//     room: ' Sydney'
// })

// // add new user
// addUser({
//     id: 42,
//     username: 'Mike ',
//     room: 'South Philly'
// })

// // add new user
// addUser({
//     id: 32,
//     username: 'Robin ',
//     room: ' Center City'
// })

// const user = getUser(421)
// console.log(user)

// const userList = getUserInRoom('Sydneyaa')
// console.log(userList)

// console.log(users)

// const removedUser = removeUser(22)
// console.log(removedUser)
// console.log(users)