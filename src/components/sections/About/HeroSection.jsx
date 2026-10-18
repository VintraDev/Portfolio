import { motion } from 'motion/react';
import { FaUser } from 'react-icons/fa6';

function Hero() {
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="mt-4 flex flex-col items-center gap-10 overflow-x-clip px-6 pt-8 md:mt-0 md:flex-row md:px-10 md:py-14 lg:mt-14 lg:px-20">
      <div className="flex-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--primary-color)/10 border border-(--primary-color)/20 text-(--primary-color) text-xs font-accent font-semibold mb-4"
        >
          <FaUser className="size-3.5" />
          <span>01 / Visão Geral & Perfil</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={transition}
          className="relative mb-6 h-8 w-full max-w-78 rounded-full border-2 border-(--primary-color)"
        >
          <span className="bg-(--primary-color) size-4 rounded-full absolute left-4 border-2 border-white top-1/2 -translate-y-1/2" />
          <div className="bg-(--primary-color)/70 blur-md animate-pulse absolute size-10 left-0 top-1/2 -translate-y-1/2 -z-1" />
          <p className="absolute right-4 top-1/2 -translate-y-1/2  font-accent font-semibold text-sm text-(--tertiary-color)">
            Disponível para novos projetos
          </p>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.15 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-(--tertiary-color) mb-4 lg:mb-6"
        >
          Meu nome é{' '}
          <span className="text-(--primary-color) block">Vinicius Santos</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.3 }}
          className="font-body leading-relaxed text-(--tertiary-color)/90"
        >
          Sou desenvolvedor Full Stack e designer UI/UX com foco em construir
          experiências digitais acessíveis, rápidas e centradas no usuário. Meu
          objetivo é alinhar design visual e engenharia de software para
          entregar soluções que resolvem problemas reais.
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...transition, delay: 0.4 }}
        className="relative w-full flex-1 overflow-x-clip"
      >
        <div className="relative mx-auto aspect-[1.095/1] w-full max-w-125">
          <div className="absolute inset-[7%] rounded-[44%_56%_47%_53%/52%_43%_57%_48%] bg-(--primary-color)/10 blur-2xl" />

          <img
            src="/svg/BlueBackground.svg"
            className="absolute inset-0 z-0 h-full w-full object-contain"
            alt=""
            aria-hidden="true"
          />

          <div className="absolute inset-[4%] z-10 rounded-[44%_56%_47%_53%/52%_43%_57%_48%] border border-white/40" />

          <span className="absolute right-[2%] top-[7%] z-20 rounded-full border border-white/50 bg-white/80 px-2 py-1 font-accent text-[8px] font-semibold tracking-[0.14em] text-(--tertiary-color) shadow-sm backdrop-blur-sm sm:right-[3%] sm:top-[13%] sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.18em]">
            DESIGN × CODE
          </span>

          <img
            src="/img/profile-image.webp"
            className="absolute bottom-0 left-1/2 z-10 w-[104%] max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_22px_18px_rgba(24,42,76,0.24)] sm:h-[108%] sm:w-auto"
            alt="Retrato de Vinicius Santos"
            width={1080}
            height={1080}
            loading="eager"
            decoding="async"
          />

          <div className="absolute bottom-[5%] left-[2%] z-20 flex max-w-[calc(100%-1rem)] items-center gap-1.5 rounded-full border border-white/60 bg-white/85 py-1 pl-1.5 pr-2 font-accent shadow-md backdrop-blur-sm sm:bottom-[8%] sm:left-[1%] sm:gap-2 sm:py-1.5 sm:pl-2 sm:pr-3">
            <span className="size-1.5 shrink-0 rounded-full bg-(--primary-color) shadow-[0_0_0_3px_rgba(33,97,219,0.12)] sm:size-2 sm:shadow-[0_0_0_4px_rgba(33,97,219,0.12)]" />
            <span className="whitespace-nowrap text-[8px] font-semibold tracking-[0.08em] text-(--tertiary-color) sm:text-[10px] sm:tracking-[0.12em]">
              UI/UX &amp; FULL STACK
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
