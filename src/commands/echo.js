import chalk from "chalk";

export function echo(params) {
    console.log(chalk.blue(params.join(' ')));
}