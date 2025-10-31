// filepath: c:\Users\keert\OneDrive\Desktop\wpm\app_server\controllers\main.js
const index = (req, res) => {
  res.render('index', { title: 'Loc8r' });
};
module.exports = {
  index
};