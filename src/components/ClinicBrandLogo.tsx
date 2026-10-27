import React from 'react';
import { CLINIC_INFO } from '../data/clinicalData';

interface ClinicBrandLogoProps {
  variant?: 'header' | 'footer' | 'badge';
  className?: string;
}

export const ClinicBrandLogo: React.FC<ClinicBrandLogoProps> = ({ variant = 'header', className = '' }) => {
  // Footer / Dark background badge variant:
  // Displays the enhanced high-definition white card badge (matching the user's uploaded badge)
  // with prominent proportions, crisp borders, and ultra-readable typography.
  if (variant === 'footer' || variant === 'badge') {
    return (
      <div className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}>
        <picture>
          <source srcSet={CLINIC_INFO.assets.logoBadgeWebp} type="image/webp" />
          <img
            src={CLINIC_INFO.assets.logoBadgePng}
            alt="Logotipo Andréia Francisca do Nascimento - Psicóloga Clínica CRP 21/8775"
            className="h-16 sm:h-20 md:h-22 w-auto max-w-[320px] sm:max-w-[420px] object-contain drop-shadow-md rounded-2xl"
            loading="lazy"
          />
        </picture>
      </div>
    );
  }

  // Header variant:
  // Uses the ultra-crisp transparent HD format with enhanced font weight and prominent height
  // so that every letter (ANDRÉIA, FRANCISCA DO NASCIMENTO, PSICÓLOGA CLÍNICA | CRP 21/8775)
  // is instantly legible, high-contrast, and razor-sharp.
  return (
    <div className={`flex items-center select-none py-1 ${className}`}>
      <picture>
        <source srcSet={CLINIC_INFO.assets.logoWebp} type="image/webp" />
        <img
          src={CLINIC_INFO.assets.logoPng}
          alt="Logotipo Andréia Francisca do Nascimento - Psicóloga Clínica CRP 21/8775"
          className="h-14 sm:h-16 md:h-[72px] lg:h-[76px] w-auto max-w-[290px] sm:max-w-[380px] md:max-w-[460px] object-contain shrink-0 drop-shadow-2xs transition-transform hover:scale-[1.01]"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
};
