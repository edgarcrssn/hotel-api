import { getHotelRoom } from './getHotelRoom.js';
import { getOneClient } from '../clients/getOneClient.js';

export const bookRoomFor = async (roomId, clientId) => {
  const room = await getHotelRoom(roomId);
  const client = await getOneClient(clientId);
  if (!room || !client) return null;

  const bookedRoom = { ...room, bookedBy: client };
  return bookedRoom;
};
