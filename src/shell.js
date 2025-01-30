import { createInterface } from 'readline';
import chalk from 'chalk';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.green('$ ')
})

export function startShell() {
    rl.prompt();
}