const homePage = (req, res) => {
  res.status(200).json({ msg: 'Pagina home' });
};
module.exports = {
  homePage,
};
