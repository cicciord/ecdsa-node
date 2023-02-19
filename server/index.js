const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "0450635a5f93054825ffbab61a3ee57e717195d19aef859b5e2e85ae906d7d541a08cf278460ccef1c4fd9bda6c1f6719499210e566d523961a133ff2fb77cb05d": 100,
  "04f6c1fd1553d6a044187c87dfa6e3b47260eca173502e6440747ad1c66f252d1568b35432547d3d5913b146cd6b5123b9d0395e7115a3debdf5f718d431425ffd": 50,
  "0410f8979d8888ba20cab42b9ed92b70ee762ca62d81820b537ba84623c5c8f6309d696054f207c840d9cceb3dfd89e6191e4e69cf7082de7f44ff4d73154626d3": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  sender = toHex(secp.getPublicKey(sender));
  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
