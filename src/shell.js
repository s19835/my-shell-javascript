import { createInterface } from 'readline';
import chalk from 'chalk';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

export function startShell() {
    rl.question('$ ', (answer) => {
        rl.close();
    })
}