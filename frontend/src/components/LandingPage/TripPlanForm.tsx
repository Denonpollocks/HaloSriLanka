"use client";

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { sendTripPlanEnquiry } from '@/services/trip-plan.service';

interface TripPlanFormProps {
  price: number;
  currency: string;
  destination: string;
  onClose: () => void;
}

export default function TripPlanForm({ price, currency, destination, onClose }: TripPlanFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travellers: '1',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: ''
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendTripPlanEnquiry({
        destination,
        price,
        currency,
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
        travellers: '1',
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

  const modalContent = (
    <div className="fixed inset-0 isolate" style={{ zIndex: 999999 }}>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 mt-16 sm:mt-0">
        <div style={{ zIndex: 1000000 }} className="bg-white rounded-lg w-full max-w-md mx-auto p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
          
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Plan Your Trip to {destination}</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">From {currency}{price.toLocaleString()} per person</p>
          
          {status.message && (
            <div className={`p-3 sm:p-4 rounded-md mb-4 text-sm sm:text-base ${
              status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
            }`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travellers</label>
              <select
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                value={formData.travellers}
                onChange={(e) => setFormData({...formData, travellers: e.target.value})}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us more about your travel plans..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white py-2 sm:py-3 rounded-lg hover:bg-pink-700 transition-colors disabled:bg-pink-300 text-sm sm:text-base"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
} 