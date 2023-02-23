import { getHotelRooms } from '../../services/hotel/getHotelRooms.js';

export default async (req, res) => {
  const data = await getHotelRooms();
  if (!data) return res.status(404).send('Not found');
  res.send({ rooms: data });
};
