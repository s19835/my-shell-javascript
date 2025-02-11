import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

// dynamically load commands from commands folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const commandsPath = path.join(__dirname, '../commands');
const commands = {};

async function readCommand() {
    const files = await readdir(commandsPath);
    console.log(`Files found: ${files}`); // Debug: List all files

    const imports = files.map(async (file) => {
        const commandName = path.basename(file, '.js');        
        console.log(`Loading command: ${commandName}`); // Debug: Log which command is loading

        const module = await import(path.join(commandsPath, file));        
        console.log(`Loaded module: ${commandName}`, module); // Debug: Log module after import

        commands[commandName] = module.default;
    });

    await Promise.all(imports);
    console.log("All commands loaded:", commands); // Debug: Log final commands object
}

export async function executeCommand(command, args) {
    
    if (Object.keys(commands).length === 0) {
        await readCommand();
    }

    if (commands[command]) {
        await commands[command](args);
    } else {
        throw new Error(`command not found: ${command}`);
    }
}