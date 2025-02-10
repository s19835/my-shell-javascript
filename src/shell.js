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
        
        switch (command) {
            case 'exit':
                rl.close();
                break;
            
            case 'echo':
                echo(args.join(' '));
                break;
        
            default:
                break;
        }
    });
}