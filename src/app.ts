import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
