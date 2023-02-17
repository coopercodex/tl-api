const express = require('express')
const tickets = require('./api/tickets')
const app = express()

const port = process.env.PORT || 4000

app.use("/api/tickets", tickets)

app.listen(port, () => console.log(`Server is running on ${port}`))