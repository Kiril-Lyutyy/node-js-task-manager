import fs from 'fs/promises';

export const readFile = async (path, encoding = 'utf-8') => {
    try {
        const fileData = await fs.readFile(path, { encoding });

        return JSON.parse(fileData);
    } catch (err) {
        //console.log(err.message ?? 'Unknown error occured');
        throw new Error('Failed to read file');
    }
}

export const writeFile = async (path, fileData) => {
    try {
        await fs.writeFile(path, JSON.stringify(fileData));
    } catch (err) {
        //console.log(err.message ?? 'Unknown error occured');
        throw new Error('Failed to write file');
    }
}