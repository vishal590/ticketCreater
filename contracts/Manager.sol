// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Manager {

    struct Ticket {
        uint8 status;
        string name; // name of person who created the ticket
    }
    // struct is user define data structure
    // value stores at storage level

    Ticket[] public tickets;

    function createTicket(string memory _name) external {
        tickets.push(Ticket(0, _name));
    }

}





