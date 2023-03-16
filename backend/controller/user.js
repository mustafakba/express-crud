import {v4 as uuid} from "uuid"


let users = [
    {
        id:uuid(),
        name :'Mustafa',
        mail :'kaba.mstafa@gmail.com',
        country:'Turkey',
        contact :'555555555',
    },
    {
        id:uuid(),
        name :'KK ADAY OLMASIN',
        mail :'kaba.sasdasd@asd.com',
        country:'Turkey',
        contact :'555555555',
    },
    {
        id:uuid(),
        name :'RTE CB OLMASIN',
        mail :'asdasda.mstaasdasdafa@gmail.com',
        country:'Turkey',
        contact :'555555555',
    },

]

export const getUsers = (req,res) => {
    res.send(users);
}

// USER LISTELEME
export const getSingleUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u)=> u.id === id)
    if(!user){
        res.status(400).send("User Not found")
    }
    res.send(user)
}
//Create USER
export const createUser = (req,res) => {
    const {name,email,country,contact} = req.body
    const user = {
        id: uuid(),
        name:name,
        email:email,
        country:country,
        contact:contact,
    };
    users.push(user)
    res.send("New user created")
}
// user delete

export const deleteUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u)=> u.id === id)
    users = users.filter((u)=> u.id !== id)

    if(!user){
        res.status(400).send("User Not found")
    }
    res.send(user)
}

// USER UPDATE //
export const updateUser = (req,res) => {
    const id = req.params.id
    const user = users.find((u)=> u.id === id)
    const {name,email,country,contact} = req.body

    if(!user) {
        res.status(400).send("User not found!")
    }
    user.name = name;
    user.email = email;
    user.country = country;
    user.contact = contact ;
    res.send(user)
    res.send("User updated")
}