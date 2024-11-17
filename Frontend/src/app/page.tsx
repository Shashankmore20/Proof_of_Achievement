import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleMint = async () => {
    if (!file || !recipient) {
      setStatus("Please provide all required inputs.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      const { ipfsHash } = await uploadRes.json();

      const mintRes = await fetch("http://localhost:4000/mint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient, ipfsHash }),
      });
      const mintData = await mintRes.json();

      setStatus(`NFT minted! Transaction Hash: ${mintData.transactionHash}`);
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Proof of Achievement Platform</h1>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <button onClick={handleMint}>Mint Achievement</button>
      <p>{status}</p>
    </div>
  );
}
