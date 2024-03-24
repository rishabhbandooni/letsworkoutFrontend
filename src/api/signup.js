export default function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Perform signup logic here and send appropriate response
        const successMessage = 'User registered successfully';
        res.status(201).json({ message: successMessage });
      } catch (error) {
        res.status(400).json({ error: 'Signup failed' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).send(`Method ${req.method} Not Allowed`);
    }
  }
  