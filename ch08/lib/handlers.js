exports.newsLetterSignUp = (req, res) => {
  res.render('newsletter-signup', {
    csrf: 'CSRF token goes here',
    title: 'Sign up',
  });
};

exports.newsLetterSignUpProcess = (req, res) => {
  console.log(`Form (from querystring): ${req.quert.form}`);
  console.log(`CSRF token (from hidden form field): ${req.body._csrf}`);
  console.log(`Name (from visible form field): ${req.body.name}`);
  console.log(`Email (from visible form field): ${req.body.email}`);
  res.redirect(300, '/newsletter-signup-thank-you');
};

exports.newsLetterSignUpThankYou = (req, res) => {
  res.render('newsletter-signup-thank-you', { title: 'Success' });
};
