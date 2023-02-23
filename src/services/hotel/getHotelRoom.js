import { getHotelRooms } from './getHotelRooms.js';

export const getHotelRoom = async (id) => {
  const hotelRooms = await getHotelRooms();
  const rooms = hotelRooms.find((room) => room.id === Number(id));
  return rooms;
};
