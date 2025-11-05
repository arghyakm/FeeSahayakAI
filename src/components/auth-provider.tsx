'use client';

import React, { createContext, useEffect, useState } from 'react';
import type { User } from '@/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demonstration purposes
const mockUser = {
  uid: 'mock-user-id',
  email: 'student@example.com',
  displayName: 'Mock Student',
  // Add other user properties as needed
} as User;


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth loading and set a mock user
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 500);
  }, []);

  const logout = () => {
      setUser(null);
      // In a real app, you'd also redirect or handle post-logout logic
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
