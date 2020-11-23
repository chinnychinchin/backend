//import required libraries
const express = require('express');
const cors = require('cors');


//configure the environment 
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

//Initiate an instance of express 
const app = express();

//create a simple shopping cart
const cart = [
    {id: "tpe", item: "toilet paper", quantity: 10},
    {id: "det124", item: "detergent", quantity: 5},
    {id: "672jkjfdfj", item: "face wash", quantity: 3},
]

//Add cors
app.use(cors())
app.use(express.json())

//Write resources
app.get('/cart', (req,res) => {
    res.status(200);
    res.format({
        //"text/html": () => res.send(`<h1>cart</h1>`),
        "application/json": () => res.json(cart)
    })
})

app.get('/cart/:id', (req,res) => {

    console.log(req.params.id)
    const index = cart.findIndex(x => x.id == req.params.id)
    if (index == -1) {
        res.status(404);
        res.json({});
    }
    res.status(200);
    res.format({
        "application/json": () => res.json(cart[index])
    })
})

app.put('')

//Start application 
app.listen(PORT, () => { console.log(`Your application has started on port ${PORT} at ${new Date()}`)});

