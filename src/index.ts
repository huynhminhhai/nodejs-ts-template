import express from 'express'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import databaseService from '~/services/database.services'

databaseService.connect()

const app = express()
const port = 3000

app.use(express.json())
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
