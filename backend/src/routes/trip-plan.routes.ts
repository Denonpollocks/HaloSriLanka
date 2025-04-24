import express from 'express';
import { sendTripPlanEnquiry } from '../controllers/trip-plan.controller';

const router = express.Router();

router.post('/send', sendTripPlanEnquiry);

export default router; 