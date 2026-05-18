import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import GalleryCategory from '@/components/sections/Gallery/GalleryCategory';
import HeroSection from '@/components/sections/Gallery/HeroSection';
import CTASection from '@/components/sections/Works/CTASection';
import 'yet-another-react-lightbox/styles.css';

const galleryData = [
  {
    title: 'Design & UI/UX',
    description:
      'Explorações visuais focadas em experiência do usuário e interfaces modernas.',
    photos: [
      {
        src: '/img/cards/iPhone_17_Pro_Max.png',
        width: 1080,
        height: 1920,
        alt: 'Design Mobile iPhone 17',
        title: 'Design Mobile iPhone 17',
      },
      {
        src: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop',
        width: 2070,
        height: 1380,
        alt: 'UI Design Concept',
        title: 'UI Design Concept',
      },
      {
        src: '/img/cards/Invitation.png',
        width: 1200,
        height: 1600,
        alt: 'Identidade Visual & Convites',
        title: 'Identidade Visual & Convites',
      },
      {
        src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop',
        width: 1964,
        height: 2619,
        alt: 'App Interface Design',
        title: 'App Interface Design',
      },
      {
        src: 'https://images.unsplash.com/photo-1613909209432-7b4a42237ec9?q=80&w=1974&auto=format&fit=crop',
        width: 1974,
        height: 2632,
        alt: 'Typography Study',
        title: 'Typography Study',
      },
      {
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
        width: 1964,
        height: 1473,
        alt: 'Abstract Shapes',
        title: 'Abstract Shapes',
      },
      {
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        width: 2000,
        height: 3000,
        alt: 'Color Palette',
        title: 'Color Palette',
      },
      {
        src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop',
        width: 1974,
        height: 2961,
        alt: 'Minimalist Poster',
        title: 'Minimalist Poster',
      },
    ],
  },
  {
    title: 'Desenvolvimento Web',
    description:
      'Capturas de projetos web, dashboards e sistemas que desenvolvi recentemente.',
    photos: [
      {
        src: '/img/cards/Clinica_Sensory.png',
        width: 1920,
        height: 1080,
        alt: 'Projeto Clínica Sensory',
        title: 'Projeto Clínica Sensory',
      },
      {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
        width: 2072,
        height: 1381,
        alt: 'Coding Workspace',
        title: 'Coding Workspace',
      },
      {
        src: '/img/cards/Feedback_Analytics.png',
        width: 1920,
        height: 1080,
        alt: 'Dashboard Feedback Analytics',
        title: 'Dashboard Feedback Analytics',
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        width: 2015,
        height: 1080,
        alt: 'Data Visualization',
        title: 'Data Visualization',
      },
      {
        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        width: 2070,
        height: 1380,
        alt: 'Clean Code',
        title: 'Clean Code',
      },
      {
        src: '/img/FeedbackAnalytics.png',
        width: 1920,
        height: 1080,
        alt: 'Arquitetura Feedback Analytics',
        title: 'Arquitetura Feedback Analytics',
      },
      {
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        width: 1974,
        height: 1481,
        alt: 'Frontend Dev',
        title: 'Frontend Dev',
      },
      {
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        width: 2070,
        height: 1380,
        alt: 'Macbook Coding',
        title: 'Macbook Coding',
      },
      {
        src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop',
        width: 2031,
        height: 1354,
        alt: 'Night Coding',
        title: 'Night Coding',
      },
    ],
  },
  {
    title: 'Fotografia & Momentos',
    description:
      'Capturas do meu dia a dia e momentos que inspiram minha criatividade.',
    photos: [
      {
        src: '/img/Photograpy.png',
        width: 1600,
        height: 1200,
        alt: 'Fotografia Autoral',
        title: 'Fotografia Autoral',
      },
      {
        src: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=2080&auto=format&fit=crop',
        width: 2080,
        height: 1387,
        alt: 'Urban Photography',
        title: 'Urban Photography',
      },
      {
        src: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop',
        width: 1974,
        height: 1316,
        alt: 'Nature Inspiration',
        title: 'Nature Inspiration',
      },
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
        width: 2070,
        height: 1164,
        alt: 'Landscape',
        title: 'Landscape View',
      },
      {
        src: 'https://images.unsplash.com/photo-1511818566587-2ccd97b77954?q=80&w=2070&auto=format&fit=crop',
        width: 2070,
        height: 1380,
        alt: 'Macro Detail',
        title: 'Macro Detail',
      },
      {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1974&auto=format&fit=crop',
        width: 1974,
        height: 1316,
        alt: 'Forest Mist',
        title: 'Forest Mist',
      },
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
        width: 2071,
        height: 1381,
        alt: 'Sunlight through Trees',
        title: 'Sunlight through Trees',
      },
    ],
  },
];

function Gallery() {
  const [index, setIndex] = useState(-1);
  const [currentPhotos, setCurrentPhotos] = useState([]);

  const handlePhotoClick = (photos, photoIndex) => {
    setCurrentPhotos(photos);
    setIndex(photoIndex);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />

      <div className="pb-10">
        {galleryData.map((category, idx) => (
          <GalleryCategory
            key={idx}
            title={category.title}
            description={category.description}
            photos={category.photos}
            onClick={(photoIndex) =>
              handlePhotoClick(category.photos, photoIndex)
            }
          />
        ))}
      </div>

      <Lightbox
        index={index}
        slides={currentPhotos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />

      <CTASection />
    </main>
  );
}

export default Gallery;
