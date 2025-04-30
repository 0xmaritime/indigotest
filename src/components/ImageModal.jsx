import { useEffect } from 'react';

export default function ImageModal({ imageSrc, altText, onClose }) {
  // Close modal when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 modal-backdrop bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/80 via-gray-900/30 to-transparent backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ease-in-out p-2 sm:p-4">
      <div className="relative max-w-xs sm:max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-8 sm:-top-10 right-0 sm:right-0 text-white hover:text-gray-300 focus:outline-none"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={imageSrc}
          alt={altText}
          className="w-full h-auto rounded-lg border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
