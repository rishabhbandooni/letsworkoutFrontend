
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle login logic here
      res.status(200).json({ token: 'jwt_token_here' }); 
      console.log(token);// Dummy token for testing
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  