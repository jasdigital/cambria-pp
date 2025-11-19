import React, { useState, useEffect } from 'react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check for existing session
  useEffect(() => {
    const session = sessionStorage.getItem('presentation_auth');
    if (session === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password from environment variable or default
    const correctPassword = import.meta.env.VITE_APP_PASSWORD || 'grange2025';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('presentation_auth', 'authenticated');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#fff' }}>
      <div className="w-full max-w-md p-8">
        {/* Cambria Logo */}
        <div className="text-center mb-2">
          <img 
            src="/images/webp/logos/cambria.webp" 
            alt="Cambria Automobiles" 
            className="h-30 mx-auto mb-2"
          />
        </div>

        <div className="shadow-lg rounded-lg p-8" style={{ backgroundColor: 'rgba(42,42,42,.8)' }}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Presentation Access
            </h1>
            <p className="text-white/70 text-sm">
              Enter password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black/50 hover:bg-black/70 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              Access Presentation
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-white/50">
              Protected content - Authorized access only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
