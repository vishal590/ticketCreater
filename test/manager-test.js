const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Manager", function() {
    let Manager, manager;

    before(async function() {
        Manager = await ethers.getContractFactory("Manager");
        manager = await Manager.deploy();
        await manager.deployed();
    });

    it("Should create new ticket", async function() {
        await manager.createTicket("test");
        let tickets = await manager.getTickets();
        expect(tickets[0].name).to.equal("test");
    });

    it("Should update the ticket name", async function() {
        await manager.updateTicketName(0, "Alex");
        let tickets = await manager.getTickets();
        expect(tickets[0].name).to.equal("Alex");
    });

    it("Should update the ticket status", async function() {
        await manager.updateTicketStatus(0, 1);
        let tickets = await manager.getTickets();
        expect(tickets[0].status).to.equal(1);
    });

    it("Should return a list tickets", async function() {
        await manager.createTicket("My new ticket 1");
        await manager.createTicket("My new ticket 2");
        await manager.createTicket("My new ticket 3");
        let tickets = await manager.getTickets();
        expect(tickets.length).to.equal(4);
    });

    // "it()" is checks

});
