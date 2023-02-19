import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex } from "ethereum-cryptography/utils";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    let address;
    try {
      const publicKey = toHex(secp.getPublicKey(privateKey));
      address = publicKey;
      setAddress(address);
    } catch (error) {
      address = 0;
      setAddress(0);
    }
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        {/* Wallet Address */}
        Private Key {address ? `(Address: 0x${address.slice(0, 10)}...)` : ""}
        <input
          // placeholder="Type an address, for example: 0x1"
          placeholder="Type a private key, for example: e144cf632285..."
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
