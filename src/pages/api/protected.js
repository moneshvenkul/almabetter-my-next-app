// pages/api/protected.js
import { getIronSession } from 'iron-session';

export default async function handler(req, res) {
  const session = await getIronSession(req, res, {
    password: process.env.SESSION_PASSWORD, 
    cookieName: "your_cookie_name"
  });

  if (!session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  res.send({ message: 'This is protected content.' });
}
