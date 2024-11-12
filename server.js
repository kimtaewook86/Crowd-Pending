const express = require('express');
const { Stripe } = require('stripe');
const cors = require('cors');

const app = express();
const stripe = new Stripe('YOUR_SECRET_STRIPE_KEY'); // Stripe 비밀 키

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'krw',
          product_data: {
            name: '투자',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json(session.id);
});

app.listen(3001, () => {
  console.log('서버가 3001번 포트에서 실행 중입니다.');
}); 