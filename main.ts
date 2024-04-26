#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("***CURRENCY CONVERTOR***"))
const currency:any={
    USD: 1, //base currency
    INR: 83.37,
    PKR: 277.69,
    RIAL: 0.38,
   SOMONI: 10.90,
   DINAR: 109.78,
   YEN: 154.62,
};
let select_currency=await inquirer.prompt([{
    name:"from",
    type:"list",
    messsage:"please select your currency",
    choices: ["USD", "INR", "PKR", "RIAL", "SOMONI", "DINAR", "YEN"]},
   {
    name:"To",
    message:"Please select your currency in which you want to convert",
    type:"list",
    choices:["USD", "INR", "PKR", "RIAL", "SOMONI", "DINAR", "YEN"],
   },
   {
    name:"amount",
    type:"number",
    message:"please enter your amount to convert:",
   },


])
let fromlist = currency[select_currency.from];
let tolist = currency[select_currency.To];
let amount = select_currency.amount;

let baseamount = amount /fromlist;
let convertedamount = baseamount * tolist;
let result=Math.round(convertedamount);
console.log(chalk.bold.bgMagentaBright(result));
