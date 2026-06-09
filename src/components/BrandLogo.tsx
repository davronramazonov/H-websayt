import logoImage from '../../assets/hplus-logo.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
};

export default function BrandLogo({ size = 'md', showText = true, className = '' }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 min-w-0 ${className}`}>
      <span className={`${sizeClasses[size]} rounded-xl overflow-hidden bg-white border border-[#DBEAFE] shadow-sm shrink-0`}>
        <img src={logoImage} alt="H+ logo" className="w-full h-full object-cover" />
      </span>
      {showText && (
        <span className="flex items-baseline gap-1.5 min-w-0">
          <span className="text-[#0F172A] font-bold text-xl tracking-tight leading-none">H+</span>
          <span className="text-[#475569] font-medium text-xs tracking-widest uppercase leading-none">Healthcare</span>
        </span>
      )}
    </span>
  );
}
