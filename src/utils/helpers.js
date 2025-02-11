import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';

// dynamically load commands from commands folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const commandsPath = path.join(__dirname, '../commands');
const commands = {};

readdirSync(commandsPath).forEach((file) => {
    const commandName = path.basename(file, '.js');
    import(path.join(commandsPath, file)).then((module) => {
        commands[commandName] = module.default;
    });
});

export async function executeCommand(command, args) {
    if (commands[command]) {
        await commands[command](args);
    } else {
        throw new Error(`command not found: ${command}`);
    }
}