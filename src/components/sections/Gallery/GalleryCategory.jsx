import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaMagnifyingGlassPlus,
  FaXmark,
} from 'react-icons/fa6';

// ─── Lightbox Premium ────────────────────────────────────────────────────────

function Lightbox({ photos, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef(null);

  const prev = useCallback(() => {
    setDirection(-1);
    setIsLoading(true);
    setCurrent((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIsLoading(true);
    setCurrent((i) => (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  const photo = photos[current];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.95 }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-6 size-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-all z-10 cursor-pointer"
          aria-label="Fechar"
        >
          <FaXmark className="size-5" />
        </button>

        {/* Botão anterior */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          type="button"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all z-10 cursor-pointer"
          aria-label="Anterior"
        >
          <FaChevronLeft className="size-6" />
        </button>

        {/* Imagem com animação de slide */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Skeleton loader */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
              </div>
            )}
            <img
              src={photo.src}
              alt={photo.title ?? ''}
              onLoad={() => setIsLoading(false)}
              className={`max-w-[85vw] max-h-[80vh] rounded-2xl object-contain select-none transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Botão próximo */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          type="button"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all z-10 cursor-pointer"
          aria-label="Próximo"
        >
          <FaChevronRight className="size-6" />
        </button>

        {/* Info inferior */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          {photo.title && (
            <p className="text-white/90 text-sm font-medium font-body tracking-wide">
              {photo.title}
            </p>
          )}
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs tabular-nums font-body">
              {current + 1} / {photos.length}
            </span>
            {/* Indicadores em dot */}
            <div className="flex gap-1">
              {photos.map((_, i) => (
                <button
                  // biome-ignore lint/suspicious/noArrayIndexKey: dots order is static and corresponds to photo index
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(i > current ? 1 : -1);
                    setIsLoading(true);
                    setCurrent(i);
                  }}
                  type="button"
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? 'w-6 h-1.5 bg-white/80'
                      : 'size-1.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Masonry Grid Premium ────────────────────────────────────────────────────

const getColumns = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

function MasonryGrid({ photos, onPhotoClick }) {
  const [cols, setCols] = useState(getColumns);

  useEffect(() => {
    const handler = () => setCols(getColumns());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Distribui as fotos dinamicamente para a coluna com a menor altura acumulada
  const columns = Array.from({ length: cols }, () => []);
  const colHeights = Array(cols).fill(0);

  photos.forEach((photo, i) => {
    // Localiza a coluna com a menor altura acumulada
    let shortestColIdx = 0;
    let minHeight = colHeights[0];
    for (let c = 1; c < cols; c++) {
      if (colHeights[c] < minHeight) {
        minHeight = colHeights[c];
        shortestColIdx = c;
      }
    }

    columns[shortestColIdx].push({ photo, originalIndex: i });

    // Adiciona a altura proporcional (height / width)
    const ratio = photo.height / photo.width;
    colHeights[shortestColIdx] +=
      Number.isNaN(ratio) || !Number.isFinite(ratio) ? 1 : ratio;
  });

  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {columns.map((colPhotos, colIdx) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: columns are static and rely on cols count
        <div key={colIdx} className="flex flex-col gap-4">
          {colPhotos.map(({ photo, originalIndex }, itemIdx) => (
            <MasonryItem
              key={originalIndex}
              photo={photo}
              originalIndex={originalIndex}
              colIdx={colIdx}
              itemIdx={itemIdx}
              onPhotoClick={onPhotoClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function MasonryItem({ photo, originalIndex, colIdx, itemIdx, onPhotoClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: colIdx * 0.08 + itemIdx * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onPhotoClick(originalIndex)}
      className="group relative cursor-pointer rounded-2xl overflow-hidden"
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}

      <img
        src={photo.src}
        alt={photo.title ?? ''}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Gradient overlay com glassmorphism */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Reflexo superior sutil */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Title com efeito de entrada */}
      {photo.title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-sm font-semibold leading-snug drop-shadow-md font-heading">
            {photo.title}
          </p>
        </div>
      )}

      {/* Ícone de expandir */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <div className="size-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
          <FaMagnifyingGlassPlus className="size-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── GalleryCategory ─────────────────────────────────────────────────────────

function GalleryCategory({ title, description, photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <section className="px-6 md:px-10 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-heading text-2xl font-bold text-(--tertiary-color) mb-1">
              {title}
            </h2>
            {description && (
              <p className="text-(--tertiary-color)/60 font-body text-sm">
                {description}
              </p>
            )}
          </div>
          <span className="shrink-0 flex items-center gap-1.5 text-(--tertiary-color)/40 font-body text-sm bg-(--tertiary-color)/5 px-3 py-1 rounded-full">
            <FaImage className="size-3.5" />
            {photos.length} itens
          </span>
        </motion.div>

        <MasonryGrid
          photos={photos}
          onPhotoClick={(i) => setLightboxIndex(i)}
        />
      </section>

      {/* Divider entre seções */}
      <div className="mx-6 md:mx-10 lg:mx-20 h-px bg-(--tertiary-color)/8" />

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export default GalleryCategory;
