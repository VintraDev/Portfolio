import { motion } from 'motion/react';
import { totalPhotos } from '@/data/galleryData';

function HeroSection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 lg:pt-30 pb-4 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute -top-40 -right-40 size-80 bg-(--primary-color)/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 size-60 bg-(--primary-color)/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mb-12">
        {/* Breadcrumb tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-accent font-semibold text-(--primary-color) bg-(--primary-color)/8 px-4 py-2 rounded-full uppercase tracking-wider">
            <svg
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Ícone de galeria"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Portfólio Visual
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4 text-(--tertiary-color)"
        >
          Galeria <span className="text-(--primary-color)">Visual</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-(--tertiary-color)/80 mb-8 font-body max-w-2xl text-lg leading-relaxed"
        >
          Uma coleção de capturas, designs e momentos que inspiram meu processo
          criativo e técnico. Explore as seções abaixo para ver meus trabalhos e
          inspirações.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex gap-6"
        >
          <div className="flex items-center gap-2 text-sm font-body">
            <div className="size-8 rounded-lg bg-(--primary-color)/10 flex items-center justify-center">
              <svg
                className="size-4 text-(--primary-color)"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Ícone de foto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-(--tertiary-color)/70">
              <span className="font-semibold text-(--tertiary-color)">
                {totalPhotos}
              </span>{' '}
              fotos
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-body">
            <div className="size-8 rounded-lg bg-(--primary-color)/10 flex items-center justify-center">
              <svg
                className="size-4 text-(--primary-color)"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Ícone de categoria"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <span className="text-(--tertiary-color)/70">
              <span className="font-semibold text-(--tertiary-color)">3</span>{' '}
              categorias
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
