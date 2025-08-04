import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-dark">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <main className="mt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
