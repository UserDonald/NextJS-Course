function handler(req, res) {
  if (req.method === 'Post') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // STORE IN DATABASE
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}

export default handler;
