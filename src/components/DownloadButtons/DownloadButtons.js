import React from 'react';

export default function DownloadButtons() {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4`}>
      <a href="#" aria-label="Baixar na Google Play">
        <img 
          src="/img/google-download.png"
          alt="Get it on Google Play" 
          className="h-12 md:h-14 hover:opacity-80 transition-opacity"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/180x60/1a202c/FFF?text=Google+Play'; }}
        />
      </a>
      <a href="#" aria-label="Baixar na Apple Store">
        <img 
          src="/img/apple-download.png"
          alt="Download on the Apple Store" 
          className="h-12 md:h-14 hover:opacity-80 transition-opacity"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/180x60/1a202c/FFF?text=Apple+Store'; }}
        />
      </a>
    </div>
  );
}