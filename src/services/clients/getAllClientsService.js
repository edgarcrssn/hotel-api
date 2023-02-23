import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllClients = async () => {
  const clientsJson = await fs.readFile(
    path.join(__dirname, '../../data/clients.json')
  );
  const clients = JSON.parse(clientsJson);
  return clients;
};
