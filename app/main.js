const express = require("express")

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Bonjour le monde"))

app.listen(port, () => console.log(`L'app ecoute sur le port ${port}!`))
