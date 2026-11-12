import { useState } from 'react';
import { Compass } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  caption?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  caption,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="m-0 flex flex-col h-full">
      <div
        className={`relative overflow-hidden rounded-[4px] bg-[#ebe8e3] border border-[#0D0D0D]/8 ${aspectClassName} ${className}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#f0ede9] via-[#ebe8e3] to-[#dcdad5] p-6 text-center">
            <Compass className="h-7 w-7 text-[#7A5806]" strokeWidth={1.5} aria-hidden="true" />
            <span className="font-serif text-sm italic text-[#1c1c19] max-w-xs">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-serif text-xs italic text-[#444748] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
