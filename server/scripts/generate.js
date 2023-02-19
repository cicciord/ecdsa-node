const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  return keccak256(publicKey.slice(1)).slice(-20);
}

const privateKey = secp.utils.randomPrivateKey();
const publicKey = secp.getPublicKey(privateKey);
const address = getAddress(publicKey);

console.log(`private key: 0x${toHex(privateKey)}`);
console.log(`public key: 0x${toHex(publicKey)}`);
console.log(`address: 0x${toHex(address)}`);
