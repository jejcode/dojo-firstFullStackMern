const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()) // allopws JSON objects to be posted
app.use(express.urlencoded({ extended: true}))  // all JSON Objects with strings and arrays

require('./config/mongoose.config')
require('./routes/person.routes')(app)

app.listen(8000, () => console.log(`Listening on port 8000`))