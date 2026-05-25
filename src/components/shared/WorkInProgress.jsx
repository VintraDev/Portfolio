import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function WorkInProgress() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-surface) px-6 text-center relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--color-primary-light) rounded-full filter blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--color-primary-subtle) rounded-full filter blur-3xl -z-10 animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-md border border-(--color-border) rounded-2xl p-8 md:p-10 shadow-[--shadow-card-hover]"
      >
        {/* Ícone Animado */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-6xl mb-6 inline-block"
        >
          🛠️
        </motion.div>

        <h1 className="font-heading text-3xl font-extrabold text-(--tertiary-color) tracking-tight mb-3">
          Em Construção
        </h1>

        <p className="font-body text-base text-gray-500 mb-6 leading-relaxed">
          Novas experiências incríveis estão sendo preparadas para você neste
          portfólio.
        </p>

        {/* Indicador de progresso */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--color-primary-light) rounded-full border border-(--color-primary-subtle) text-sm font-accent text-(--primary-color) font-semibold">
          Desenvolvendo novidades{dots}
        </div>
      </motion.div>
    </div>
  );
}

export default WorkInProgress;
