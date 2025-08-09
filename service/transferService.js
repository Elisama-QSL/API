const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transfer({ from, to, amount }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return { error: 'Usuário remetente, destinatário não encontrado' };
  }
  if (sender.balance < amount) {
    return { error: 'Saldo insuficiente' };
  }
  if (!recipient.isFavored && amount >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só são permitidas para favorecidos' };
  }
  sender.balance -= amount;
  recipient.balance += amount;
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return { transfer };
}

function getTransfers() {
  return transfers;
}

module.exports = {
  transfer,
  getTransfers
};
