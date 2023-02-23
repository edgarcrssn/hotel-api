import { getHotelRoom } from './getHotelRoom.js';

export const bookRoomFor = async (roomId, name) => {
  const room = await getHotelRoom(roomId);
  if (!room) return null;

  const bookedRoom = { ...room, bookedBy: name };
  return bookedRoom;
};
