const homePage = (req, res) => {
  res.render('home', {
    title: 'Home page',
  });
};
module.exports = {
  homePage,
};
