const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // console.log(`$`)
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
}
)

// const users = [
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 3, name: 'charlie', email: 'charlie@example.com' }

// ]

// app.get('/api/users', (req, res) => {
//     console.log(`GET users was called ${req.ip}`);

//     res.json(users);
// })

app.get('/api/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const user =user.find(u=>u.id==userId);
    if(user){res.json(user);}
    else{
        res.status(404).send('User not found');
    }
})