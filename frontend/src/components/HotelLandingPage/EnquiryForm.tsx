"use client";

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { sendHotelEnquiry } from '@/services/hotel-enquiry.service';

interface EnquiryFormProps {
  hotelName: string;
  onClose: () => void;
}

export default function EnquiryForm({ hotelName, onClose }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendHotelEnquiry({
        hotelName,
        ...formData
      });
      setStatus({
        message: 'Thank you for your enquiry. We will get back to you soon!',
        type: 'success'
      });
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        message: ''
      });
      // Close the form after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setStatus({
        message: 'Failed to send enquiry. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Enquiry for {hotelName}</h2>
        
        {status.message && (
          <div className={`p-4 rounded-md mb-4 ${
            status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
          }`}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.checkIn}
                onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.checkOut}
                onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors disabled:bg-pink-300"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Submit Enquiry'
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 