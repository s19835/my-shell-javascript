import { createInterface } from 'readline';
import chalk from 'chalk';
import { echo } from './commands/echo.js';

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
        } else {
            switch (command) {
                case 'echo':
                    echo(args.join(' '));
                    break;
            
                default:
                    console.log(chalk.red(`command not found: ${command}`));
                    break;
            }
    
            rl.prompt();
        }
    });
}