# Proof_of_Achievement
The (PoA) Platform is a decentralized application designed to issue and verify digital certificates on the Ethereum blockchain. It allows organizations, educators, or any entity to mint NFTs as proof of achievements, certifications, or awards. These NFTs are stored on the blockchain, ensuring transparency, immutability, and proof of authenticity.

# Features 
1.	NFT-Based Certificates:
   • Each certificate is represented as a unique NFT, ensuring ownership and authenticity.

2.	IPFS Integration:
   • Metadata and additional information about the achievement are stored securely on IPFS, making it accessible through a unique IPFS hash.
  	
3.	Decentralized and Trustless:
   • Leveraging blockchain technology to create certificates that cannot be forged or altered.
	
4.	User-Friendly Interface:
	•	A simple and intuitive web interface built with Next.js for users to upload files and mint NFTs.
	
5.	Customizable:
	•	Organizations can integrate the platform to create their own certificates by deploying the smart contract.

# How It Works
1.	Upload Achievement Details:
	•	The user uploads a certificate or achievement file (e.g., a diploma or badge) via the frontend.
	
2.	IPFS Storage:
	•	The uploaded file is stored on IPFS, and the resulting hash is linked to the NFT.
	
3.	Mint the NFT:
	•	The platform mints an NFT on the Ethereum blockchain with the recipient’s address and the IPFS file hash embedded as the NFT metadata.

4.	Ownership Transfer:
	•	The recipient becomes the verifiable owner of the NFT, which serves as immutable proof of their achievement.
