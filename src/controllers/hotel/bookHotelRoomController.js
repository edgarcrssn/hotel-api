import { bookRoomFor } from '../../services/hotel/bookRoomFor.js';

export default async (req, res) => {
  const data = await bookRoomFor(req.params.id, req.body.name);
  if (!data) return res.status(404).send('Not found');
  res.send({ bookedRoom: data });
};
