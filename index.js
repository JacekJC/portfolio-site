const express = require('express')
const app = express()
const port = 3000


const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('static'));


app.get('/', (req, res) => {
	res.render('pages/index.ejs');
});

app.listen(port, () => {
	console.log("express running on port ", port);
})

