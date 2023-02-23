import { getAllClients } from '../../services/clients/getAllClients.js';

export default async (req, res) => {
  const data = await getAllClients();
  if (!data) return res.status(404).send('Not found');
  res.send({ clients: data });
};
