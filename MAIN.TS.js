"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.bold.green("***CURRENCY CONVERTOR***"));
var currency = {
    USD: 1, //base currency
    INR: 83.37,
    PKR: 277.69,
    RIAL: 0.38,
    SOMONI: 10.90,
    DINAR: 109.78,
    YEN: 154.62,
};
var select_currency = await inquirer_1.default.prompt([{
        name: "from",
        type: "list",
        messsage: "please select your currency",
        choices: ["USD", "INR", "PKR", "RIAL", "SOMONI", "DINAR", "YEN"]
    },
    {
        name: "To",
        message: "Please select your currency in which you want to convert",
        type: "list",
        choices: ["USD", "INR", "PKR", "RIAL", "SOMONI", "DINAR", "YEN"],
    },
    {
        name: "amount",
        type: "number",
        message: "please enter your amount to convert:",
    },
]);
var fromlist = currency[select_currency.from];
var tolist = currency[select_currency.To];
var amount = select_currency.amount;
var baseamount = amount / fromlist;
var convertedamount = baseamount * tolist;
var result = Math.round(convertedamount);
console.log(chalk_1.default.bold.bgMagentaBright(result));
