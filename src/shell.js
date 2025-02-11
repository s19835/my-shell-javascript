import { createInterface } from 'readline';
import chalk from 'chalk';
import { echo } from './commands/echo.js';
import { ls } from './commands/ls.js';

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
                    echo(args);
                    rl.prompt();
                    break;
                
                case 'ls':
                    ls(() => {
                        rl.prompt();
                    });
                    break;
            
                default:
                    console.log(chalk.red(`command not found: ${command}`));
                    rl.prompt();
                    break;
            }
        }
    });
}