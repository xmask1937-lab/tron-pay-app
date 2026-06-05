const express = require('express');
const app = express();
app.use(express.json());

const hotWallets = {};

// Simple hot wallet simulation
app.post('/send', (req, res) => {
  const { from, to, amount, coin } = req.body;
  console.log(`[丝滑转账] ${coin} ${amount} from ${from} to ${to}`);
  res.json({ success: true, txId: 'backend_tx_' + Date.now() });
});

app.get('/balance/:address', (req, res) => {
  res.json({ trx: 999, usdt: 500, sol: 50 });
});

app.listen(3000, () => {
  console.log('Tron Pay Backend running on http://localhost:3000 (热钱包)');
});