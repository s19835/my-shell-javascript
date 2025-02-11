import chalk from "chalk";

export default function echo(params) {
    console.log(chalk.blue(params.join(' ')));
}