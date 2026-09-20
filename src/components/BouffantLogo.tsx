import React from 'react';

interface BouffantLogoProps {
  variant?: 'white' | 'emerald' | 'silver';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  withContainer?: boolean;
}

export const BouffantLogo: React.FC<BouffantLogoProps> = ({
  variant = 'white',
  className = '',
  size = 'md',
  showSubtitle = true,
  withContainer = false,
}) => {
  const primaryColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'silver'
      ? '#D9DEE2'
      : '#064E3B';

  const secondaryColor =
    variant === 'white'
      ? '#EEF1F2'
      : variant === 'silver'
      ? '#CBD5E1'
      : '#022C22';

  // Height definitions for responsive scaling
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-13 sm:h-14',
    xl: 'h-16 sm:h-20',
  }[size];

  const content = (
    <svg
      viewBox="0 0 450 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heightClass} w-auto max-w-full transition-transform duration-300 hover:scale-[1.02] drop-shadow-sm`}
      aria-label="Bouffant Salon Logo"
    >
      <defs>
        {/* Soft 3D ambient shadow matching the sculpted white letters of the uploaded logo */}
        <filter id={`bouffant3D-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity={variant === 'white' ? '0.35' : '0.15'} />
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity={variant === 'white' ? '0.2' : '0.08'} />
        </filter>
      </defs>

      <g filter={`url(#bouffant3D-${variant})`}>
        {/* Letter B */}
        <text
          x="10"
          y="72"
          fill={primaryColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="900"
          fontSize="76"
          letterSpacing="-1"
        >
          B
        </text>

        {/* Letter O with diagonal hair comb slicing through */}
        <g transform="translate(108, 40)">
          {/* Circular ring of the O */}
          <circle
            cx="0"
            cy="0"
            r="32"
            stroke={primaryColor}
            strokeWidth="13"
            fill="none"
          />

          {/* Diagonal Comb angled through the O */}
          <g transform="rotate(-30)">
            {/* Comb spine / handle extending through O */}
            <rect
              x="-5"
              y="-42"
              width="9.5"
              height="84"
              rx="4.5"
              fill={primaryColor}
            />
            {/* Precision comb teeth along upper right of spine */}
            <rect x="4.5" y="-36" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="-28" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="-20" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="-12" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="-4" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="4" width="20" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="12" width="18" height="3.8" rx="1.5" fill={primaryColor} />
            <rect x="4.5" y="20" width="16" height="3.8" rx="1.5" fill={primaryColor} />
          </g>
        </g>

        {/* Letters UFFANT */}
        <text
          x="148"
          y="72"
          fill={primaryColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="900"
          fontSize="76"
          letterSpacing="1"
        >
          UFFANT
        </text>

        {/* Centered Subtitle SALON in matching geometric caps */}
        {showSubtitle && (
          <text
            x="225"
            y="110"
            textAnchor="middle"
            fill={secondaryColor}
            fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
            fontWeight="800"
            fontSize="32"
            letterSpacing="14"
          >
            SALON
          </text>
        )}
      </g>
    </svg>
  );

  if (withContainer) {
    return (
      <div
        className={`inline-flex items-center px-4 py-2 rounded-xl bg-[#022C22]/90 border border-[#D9DEE2]/30 shadow-md backdrop-blur-sm ${className}`}
      >
        {content}
      </div>
    );
  }

  return <div className={`inline-flex items-center select-none ${className}`}>{content}</div>;
};

