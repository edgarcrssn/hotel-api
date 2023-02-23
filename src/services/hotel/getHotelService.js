import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getHotel = async () => {
  const hotelJson = await fs.readFile(
    path.join(__dirname, '../../data/hotel.json')
  );
  const hotel = JSON.parse(hotelJson);
  return hotel;
};
