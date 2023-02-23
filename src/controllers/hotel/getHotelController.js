import { getHotel } from '../../services/hotel/getHotelService.js';

export default async (req, res) => {
  const data = await getHotel();
  if (!data) return res.status(404).send('Not found');
  res.send({ hotel: data });
};
