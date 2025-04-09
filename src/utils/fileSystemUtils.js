import fs from 'fs/promises';

export const readFile = async (path, encoding = 'utf-8') => {
    try {
        const fileData = await fs.readFile(path, { encoding });

        return JSON.parse(fileData);
    } catch (err) {
        throw new Error('Failed to read file', err.message ?? 'Unknown error');
    }
}

export const writeFile = async (path, fileData) => {
    try {
        await fs.writeFile(path, JSON.stringify(fileData));
    } catch (err) {
        throw new Error('Failed to write file: ', err.message ?? 'Unknown error');
    }
}