import express from 'express';
import { sendHotelEnquiry } from '../controllers/hotel-enquiry.controller';

const router = express.Router();

router.post('/send', sendHotelEnquiry);

export default router; 