const hre = require("hardhat");

async function main(){
    const Manager = await hre.ethers.getContractFactory("Manager");
    const manager = await Manager.deploy();

    await manager.deployed();

    console.log("Manager address:", manager.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

