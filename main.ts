#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

 let todos = [];
 let condition = true;

console.log(chalk.red.bold("\n \t Wellcome in your TODO_List Application\n"));

 while (condition)
{
    let todoList= await inquirer.prompt(
    [{
    name:"firstQuestion",
    type:"input",
    message:chalk.yellowBright("What would you like to add in your todos"),
},
    {
        name:"secondQuestion",
        type:"confirm",
        message:chalk.redBright.bold("What would you like to add more in your todos"),
        default:"false"
    }
]);

todos.push(todoList.firstQuestion);
console.log(todos);
condition = todoList.secondQuestion;
}
