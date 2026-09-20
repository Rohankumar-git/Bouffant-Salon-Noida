import React, { useState } from 'react';

interface SalonImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

/**
 * SalonImg renders an image with resilient fallback handling.
 * If the primary uploaded asset fails to load, it automatically swaps
 * to a high-fidelity fallback to ensure no broken image icons ever appear.
 */
export const SalonImg: React.FC<SalonImgProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...rest}
    />
  );
};
