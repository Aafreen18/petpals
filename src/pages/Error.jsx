import React, { useState, useEffect } from 'react';
import { Home, RefreshCw, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Error() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center p-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #821b1f 0%, #b98a32 50%, #f7f3ea 100%)' }}>
      {/* Animated background particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#821b1f40' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#b98a3240', animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Error icon with glow effect */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#821b1f40' }}></div>
          <div className="relative p-6 rounded-full mx-auto w-24 h-24 flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #821b1f, #b98a32)' }}>
            <AlertTriangle className="w-12 h-12 text-white animate-bounce" />
          </div>
        </div>

        {/* Error code */}
        <h1 className="text-8xl md:text-9xl font-black mb-4 select-none" style={{ background: 'linear-gradient(135deg, #f7f3ea, #b98a32, #821b1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          404
        </h1>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#f7f3ea' }}>
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#f7f3ea' }}>
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="group relative px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #821b1f, #b98a32)' }}
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Go Home
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>
          
          <button
            onClick={handleRefresh}
            className="group relative px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg, #b98a32, #821b1f)' }}
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Refresh
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>
          
          <button
            onClick={handleGoBack}
            className="group relative px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            style={{ background: '#f7f3ea', color: '#821b1f' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>
        </div>

        {/* Additional help text */}
        <div className="mt-12 p-6 backdrop-blur-sm rounded-2xl border max-w-md mx-auto" style={{ backgroundColor: '#f7f3ea20', borderColor: '#b98a3240' }}>
          <p className="text-sm" style={{ color: '#f7f3ea' }}>
            Still having trouble? Try checking the URL or contact our support team.
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#f7f3ea60' }}></div>
      <div className="absolute top-20 right-20 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#b98a3280' }}></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#821b1f60' }}></div>
      <div className="absolute bottom-16 right-32 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#b98a3280', animationDelay: '0.5s' }}></div>
    </div>
  );
}