import { motion } from 'motion/react';

function HeroSection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30">
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-3xl font-bold mb-4 text-(--tertiary-color)"
        >
          Galeria Visual
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-(--tertiary-color)/90 mb-6 font-work-sans max-w-2xl"
        >
          Uma coleção de capturas, designs e momentos que inspiram meu processo
          criativo e técnico. Explore as seções abaixo para ver meus trabalhos e
          inspirações.
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
