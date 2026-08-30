import { Contact } from '../models/Contact.js'

export async function createMessage(req, res) {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    await Contact.create({ name, email, message })
    return res.status(201).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message', detail: err.message })
  }
}
