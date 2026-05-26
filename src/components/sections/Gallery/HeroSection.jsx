import { motion } from 'motion/react';
import { FaFolderOpen, FaImage } from 'react-icons/fa6';
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
            <FaImage className="size-3.5" />
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
              <FaImage className="size-4 text-(--primary-color)" />
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
              <FaFolderOpen className="size-4 text-(--primary-color)" />
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
