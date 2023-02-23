import { getHotel } from './getHotelService.js';

export const getHotelRooms = async () => {
  const hotel = await getHotel();
  return hotel?.rooms;
};
