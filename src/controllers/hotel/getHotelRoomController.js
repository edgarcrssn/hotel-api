import { getHotelRoom } from '../../services/hotel/getHotelRoom.js';

export default async (req, res) => {
  const data = await getHotelRoom(req.params.id);
  if (!data) return res.status(404).send('Not found');
  res.send({ room: data });
};
