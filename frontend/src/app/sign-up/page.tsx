'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/ui/input';
import { signup } from '@/services/auth.service';
import { useAuth } from '@/contexts/AuthContext';

export default function SignUp() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.name, formData.email, formData.password);
      setIsLoggedIn(true);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-pink-600 hover:text-pink-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}