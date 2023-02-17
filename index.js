const express = require('express')
const tickets = require('./api/tickets')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 4000

app.use("/api/tickets", tickets)
app.use(cors({
  origin: "*",
}))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))