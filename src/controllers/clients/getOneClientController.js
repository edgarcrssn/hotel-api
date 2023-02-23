import { getOneClient } from '../../services/clients/getOneClient.js';

export default async (req, res) => {
  const data = await getOneClient(req.params.id);
  if (!data) return res.status(404).send('Not found');
  res.send({ client: data });
};
