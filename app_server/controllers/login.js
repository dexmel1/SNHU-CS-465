const API_BASE = 'http://localhost:3000/api';

const loginView = (req, res) => {
  res.render('login', { title: 'Travlr Getaways | Login' });
};

const loginPost = async (req, res) => {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: req.body.email, password: req.body.password })
    });

    if (!response.ok) {
      // 400/401 from API
      return res.status(401).render('login', {
        title: 'Travlr Getaways | Login',
        error: 'Invalid email or password.'
      });
    }

    const data = await response.json(); // { token: '...' }
    // Minimal user object to return from API
    req.session.user = { email: req.body.email };
    req.session.token = data.token;

    return res.redirect('/index'); // back to home
  } catch (err) {
    return res.status(500).render('login', {
      title: 'Travlr Getaways | Login',
      error: 'Login service unavailable. Please try again.'
    });
  }
};

const logout = (req, res) => {
  req.session.destroy(() => res.redirect('/index'));
};

module.exports = { loginView, loginPost, logout };
