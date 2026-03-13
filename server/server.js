import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }))
app.use('/api/contact', contactRoutes)

if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '../dist')
  app.use(express.static(clientPath))
  app.get('*', (_req, res) => res.sendFile(path.join(clientPath, 'index.html')))
}

async function start() {
  try {
    await mongoose.connect(MONGO_URI)
    // eslint-disable-next-line no-console
    console.log('Mongo connected')
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
