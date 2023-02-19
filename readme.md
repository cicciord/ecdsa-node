## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions

For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

## Sample Wallets

1.  private key: e144cf63228542da7cae20767ba541cf57fcecff909c0e785c55f0431ac71ac5

    public key: 0450635a5f93054825ffbab61a3ee57e717195d19aef859b5e2e85ae906d7d541a08cf278460ccef1c4fd9bda6c1f6719499210e566d523961a133ff2fb77cb05d

    address: a5614ecb438dcc72eb056fd1156075aa3a04e1d0

2.  private key: 1956a17b6569a8e983f12f5e3afba0bb6a666dcca8dbf6d67c0d3ab4ed872cb0

    public key: 04f6c1fd1553d6a044187c87dfa6e3b47260eca173502e6440747ad1c66f252d1568b35432547d3d5913b146cd6b5123b9d0395e7115a3debdf5f718d431425ffd

    address: 1e5230aa7125d03a83989ba4dbb71296a2da32fa

3.  private key: ac48c4e02fd1c54dfdcfe53fcf350e1a76b160dc97ca64c9e93997ded99eb975

    public key: 0410f8979d8888ba20cab42b9ed92b70ee762ca62d81820b537ba84623c5c8f6309d696054f207c840d9cceb3dfd89e6191e4e69cf7082de7f44ff4d73154626d3

    address: 93d0a534366d416e4efe0d57d738e5f2a60086f6
