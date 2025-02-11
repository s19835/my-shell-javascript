import { createInterface } from 'readline';
import chalk from 'chalk';
import { executeCommand } from './utils/helpers.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.green('$ ')
})

export function startShell() {
    rl.prompt();

    rl.on('line', async (input) => {
        const [command, ...args] = input.trim().split(" ");

        if (command === 'exit') {
            rl.close();
        };

        try {
            await executeCommand(command, args);
        } catch (error) {
            console.log(chalk.red(error));
        }

        rl.prompt();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}