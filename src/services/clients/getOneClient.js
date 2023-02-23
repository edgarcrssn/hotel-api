import { getAllClients } from './getAllClients.js';

export const getOneClient = async (id) => {
  const allClients = await getAllClients();

  if (allClients?.length) {
    const clientById = allClients.find((client) => client.id === Number(id));
    return clientById;
  }
  return null;
};
