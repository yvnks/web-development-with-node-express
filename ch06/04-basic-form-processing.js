const express = require('express');
const PORT = process.env.port || 3000;

const app = express();

app.post('/process-contact', (req, res) => {
  console.log(`received data from ${req.body.name}
        <${req.body.email}>`);
  res.redirect('303', 'Moved permanently!');
});

app.listen(port, () => {
    console.log('server started on server.')
});
