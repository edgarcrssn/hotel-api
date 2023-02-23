import express from 'express';
import getHotelController from '../controllers/hotel/getHotelController.js';
import getHotelRoomsController from '../controllers/hotel/getHotelRoomsController.js';
import getHotelRoomController from '../controllers/hotel/getHotelRoomController.js';
import bookHotelRoomController from '../controllers/hotel/bookHotelRoomController.js';

const hotelRouter = express.Router();

hotelRouter.get('/', getHotelController);
hotelRouter.get('/rooms', getHotelRoomsController);
hotelRouter.get('/rooms/:id', getHotelRoomController);
hotelRouter.put('/rooms/:id/book', bookHotelRoomController);

export default hotelRouter;
