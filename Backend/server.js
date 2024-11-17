const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { create } = require("ipfs-http-client");
const { ethers } = require("ethers");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer();
const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractABI = [];
const contractAddress = process.env.CONTRACT_ADDRESS;
const poaContract = new ethers.Contract(contractAddress, contractABI, wallet);


app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const result = await ipfs.add(req.file.buffer);
        res.json({ ipfsHash: result.path });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post("/mint", async (req, res) => {
    const { recipient, ipfsHash } = req.body;

    try {
        const tokenURI = `https://ipfs.infura.io/ipfs/${ipfsHash}`;
        const tx = await poaContract.mintAchievement(recipient, tokenURI);
        await tx.wait();
        res.json({ status: "success", transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));