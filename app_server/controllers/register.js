const API_BASE = 'http://localhost:3000/api';

const registerView = (req, res) => {
  res.render('register', { title: 'Travlr Getaways | Register' });
};

const registerPost = async (req, res) => {
  try {
    const { name, email, password, confirm } = req.body;

    // simple validation
    const errors = [];
    if (!name || !email || !password || !confirm) errors.push('All fields are required.');
    if (password !== confirm) errors.push('Passwords do not match.');
    if (errors.length) return res.status(400).render('register', { title: 'Travlr Getaways | Register', errors, name, email });

    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const msg = `Registration failed (${response.status})`;
      return res.status(400).render('register', { title: 'Travlr Getaways | Register', errors: [msg], name, email });
    }

    const data = await response.json();
    // save minimal session
    req.session.user  = { name, email };
    req.session.token = data.token;

    return res.redirect('/index');
  } catch (err) {
    return res.status(500).render('register', {
      title: 'Travlr Getaways | Register',
      errors: ['Registration service unavailable. Please try again.']
    });
  }
};

module.exports = { registerView, registerPost };
