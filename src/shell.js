const readline = require('readline')
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function startShell() {
    rl.question('$ ', (answer) => {
        rl.close();
    })
}

module.exports = { startShell };