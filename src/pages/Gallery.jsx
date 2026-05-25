import { motion } from 'motion/react';
import { useState } from 'react';
import GalleryCategory from '@/components/sections/Gallery/GalleryCategory';
import HeroSection from '@/components/sections/Gallery/HeroSection';
import CTASection from '@/components/sections/Works/CTASection';
import PageTransition from '@/components/shared/PageTransition';
import { galleryCategories } from '@/data/galleryData';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories =
    activeFilter === 'all'
      ? galleryCategories
      : galleryCategories.filter((cat) => cat.id === activeFilter);

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        <HeroSection />

        {/* Filtros por categoria */}
        <div className="px-6 md:px-10 lg:px-20 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-accent font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-(--primary-color) text-white shadow-lg shadow-(--primary-color)/25'
                  : 'bg-(--tertiary-color)/5 text-(--tertiary-color)/70 hover:bg-(--tertiary-color)/10'
              }`}
              type="button"
            >
              Todos
            </button>
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-accent font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-(--primary-color) text-white shadow-lg shadow-(--primary-color)/25'
                    : 'bg-(--tertiary-color)/5 text-(--tertiary-color)/70 hover:bg-(--tertiary-color)/10'
                }`}
                type="button"
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Categorias */}
        <div className="pb-10">
          {filteredCategories.map((category) => (
            <GalleryCategory
              key={category.id}
              title={category.title}
              description={category.description}
              photos={category.photos}
            />
          ))}
        </div>

        <CTASection />
      </main>
    </PageTransition>
  );
}

export default Gallery;
