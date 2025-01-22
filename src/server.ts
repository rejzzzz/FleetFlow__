import dotenv from 'dotenv'
import { Request, Response } from 'express'
import path from 'path'
import app from './app'

dotenv.config({
    path: '.env'
})

const PORT = process.env.PORT || 3000

app.get('/', (_req: Request, res: Response) => {
    res.render('index')
})

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello, World!')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
