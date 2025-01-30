import { createInterface } from 'readline';
import chalk from 'chalk';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

function startShell() {
    rl.question('$ ', (answer) => {
        rl.close();
    })
}

export default { startShell };