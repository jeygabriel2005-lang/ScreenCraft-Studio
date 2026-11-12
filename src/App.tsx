import { useEffect, useState } from 'react';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { InfrastructureScreen } from './components/InfrastructureScreen';
import { InquiryModal } from './components/InquiryModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { RealEstateScreen } from './components/RealEstateScreen';
import { TourismScreen } from './components/TourismScreen';
import type {
  CurrencyCode,
  EditorialArticle,
  InquiryPreset,
  PropertyListing,
  ScreenId,
} from './types/editorial';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('editorial');
  const [currency, setCurrency] = useState<CurrencyCode>('MXN');
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryPreset, setInquiryPreset] = useState<InquiryPreset | null>(null);

  const openInquiry = (preset?: InquiryPreset) => {
    setInquiryPreset(preset ?? null);
    setInquiryOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (inquiryOpen) {
        setInquiryOpen(false);
      } else if (selectedProperty) {
        setSelectedProperty(null);
      } else if (selectedArticle) {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inquiryOpen, selectedProperty, selectedArticle]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#0D0D0D]">
      <Header
        activeScreen={activeScreen}
        onNavigate={setActiveScreen}
        onOpenInquiry={() => openInquiry()}
      />

      <main className="flex-1">
        {activeScreen === 'editorial' && (
          <HomeScreen
            currency={currency}
            onNavigate={setActiveScreen}
            onSelectArticle={setSelectedArticle}
            onSelectProperty={setSelectedProperty}
          />
        )}

        {activeScreen === 'real-estate' && (
          <RealEstateScreen
            currency={currency}
            onChangeCurrency={setCurrency}
            onSelectProperty={setSelectedProperty}
            onOpenInquiry={openInquiry}
          />
        )}

        {activeScreen === 'infrastructure' && (
          <InfrastructureScreen
            currency={currency}
            onSelectArticle={setSelectedArticle}
            onOpenInquiry={openInquiry}
          />
        )}

        {activeScreen === 'tourism' && (
          <TourismScreen
            onSelectArticle={setSelectedArticle}
            onOpenInquiry={openInquiry}
          />
        )}
      </main>

      <Footer
        onNavigate={setActiveScreen}
        onOpenInquiry={() => openInquiry()}
      />

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenInquiry={openInquiry}
      />

      <PropertyDetailModal
        property={selectedProperty}
        currency={currency}
        onClose={() => setSelectedProperty(null)}
        onOpenInquiry={openInquiry}
      />

      <InquiryModal
        isOpen={inquiryOpen}
        preset={inquiryPreset}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}
