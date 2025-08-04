import React, { useState } from 'react';
import Button from './Button';
import { FaTwitter } from 'react-icons/fa';

export default function UsernameInput({
  onSubmit,
  isLoading = false,
}) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username.trim());
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="card-glass w-full max-w-xl"
        style={{
          padding: '1.5rem',
          borderRadius: '1.25rem',
          boxShadow: '0 15px 50px rgba(0,0,0,0.45)',
        }}
      >
        <div className="text-center mb-6">
          <h2
            className="text-2xl md:text-3xl font-semibold"
            style={{
              textShadow:
                '0 0 18px rgba(255,255,255,0.25), 0 0 40px rgba(112,99,131,0.25)',
            }}
          >
            Enter Your Username
          </h2>
          <p className="subtle mt-1">
            X username will be used to track your progress.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm mb-2">
              Twitter/X Username
            </label>

            <div
              className="flex items-center gap-2"
              style={{ borderRadius: '0.875rem' }}
            >
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-black/30 border border-white/10">
                <FaTwitter className="text-pui-30" />
              </div>

              <input
                id="username"
                type="text"
                placeholder="username or @username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 rounded-xl2 bg-black/30 border border-white/10 outline-none"
                required
                minLength={3}
                maxLength={20}
              />
            </div>

            <p className="subtle text-xs mt-2">
              Enter with or without the @ symbol
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading || !username.trim()}
            className="w-full rounded-full !py-3 !px-6 !text-black"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #f43f5e 100%)',
              boxShadow:
                '0 12px 36px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            {isLoading ? 'Loading...' : 'Start Quiz'}
          </Button>
        </form>

        <div className="text-center subtle text-xs mt-5">
          Follow Aztec on X
        </div>
      </div>
    </div>
  );
}
