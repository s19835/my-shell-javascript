import { createInterface } from 'readline';
import chalk from 'chalk';
import { exit } from 'process';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.green('$ ')
})

export function startShell() {
    rl.prompt();

    rl.on('line', async (input) => {
        const [command, ...args] = input.trim().split(" ");

        switch (command) {
            case 'exit':
                exit();
        
            default:
                break;
        }
    })
}