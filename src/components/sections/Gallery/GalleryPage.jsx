import GalleryCategory from './GalleryCategory';
import HeroSection from './HeroSection';

const fotografiaPhotos = [
  {
    src: '/img/Photograpy.png',
    width: 800,
    height: 600,
    title: 'Fotografia Principal',
  },
  {
    src: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800&h=600',
    width: 800,
    height: 600,
    title: 'Pôr do sol urbano',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=900',
    width: 600,
    height: 900,
    title: 'Arquitetura moderna',
  },
  {
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=700&h=500',
    width: 700,
    height: 500,
    title: 'Reflexo na chuva',
  },
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=700',
    width: 800,
    height: 700,
    title: 'Mercado central',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=750&h=500',
    width: 750,
    height: 500,
    title: 'Silhuetas ao entardecer',
  },
];

const designPhotos = [
  {
    src: '/img/cards/Clinica_Sensory.png',
    width: 800,
    height: 500,
    title: 'Clínica Sensory',
  },
  {
    src: '/img/cards/Feedback_Analytics.png',
    width: 600,
    height: 800,
    title: 'Feedback Analytics',
  },
  {
    src: '/img/cards/Invitation.png',
    width: 700,
    height: 600,
    title: 'Invitation Design',
  },
  {
    src: '/img/cards/iPhone_17_Pro_Max.png',
    width: 800,
    height: 900,
    title: 'iPhone UI Concept',
  },
  {
    src: '/img/FeedbackAnalytics.png',
    width: 650,
    height: 500,
    title: 'Feedback Analytics Dashboard',
  },
];

function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroSection />

      <GalleryCategory
        title="Fotografia"
        description="Capturas do cotidiano e viagens"
        photos={fotografiaPhotos}
      />

      <GalleryCategory
        title="Design & UI"
        description="Interfaces, sistemas visuais e exploração tipográfica"
        photos={designPhotos}
      />
    </main>
  );
}

export default GalleryPage;
