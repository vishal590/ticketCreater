const hre = require("hardhat");

async function main() {
    const [signer] = await hre.ethers.getSigners();
    console.log(await signer.getBalance());
}

// in blockchain first contract deploy, then have to wait for transaction being process. //best practice to use async await

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})