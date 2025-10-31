// filepath: c:\Users\keert\OneDrive\Desktop\wpm\app_server\controllers\others.js
const about = (req, res) => {
  res.render('generic-text', { title: 'About' });
};
module.exports = {
  about
};