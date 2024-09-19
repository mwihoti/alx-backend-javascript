const  express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', (req, res) => {
    const payments = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      res.json(payments);
});
app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
  });
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
})

module.exports = app;