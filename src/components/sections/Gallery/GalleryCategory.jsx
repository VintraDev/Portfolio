import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({ photos, index, onClose }) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + photos.length) % photos.length),
    [photos.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % photos.length),
    [photos.length],
  );

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

  const photo = photos[current];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-white/60 hover:text-white text-2xl leading-none transition-colors z-10"
          aria-label="Fechar"
        >
          ✕
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl leading-none px-3 py-6 transition-colors z-10"
          aria-label="Anterior"
        >
          ‹
        </button>

        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={photo.src}
          alt={photo.title ?? ''}
          onClick={(e) => e.stopPropagation()}
          className="max-w-[82vw] max-h-[82vh] rounded-2xl object-contain select-none"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-5xl leading-none px-3 py-6 transition-colors z-10"
          aria-label="Próximo"
        >
          ›
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          {photo.title && (
            <p className="text-white/80 text-sm font-medium">{photo.title}</p>
          )}
          <p className="text-white/35 text-xs tabular-nums">
            {current + 1} / {photos.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Pinterest-style masonry column layout ───────────────────────────────────

function MasonryGrid({ photos, onPhotoClick }) {
  const getColumns = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cols, setCols] = useState(getColumns);

  useEffect(() => {
    const handler = () => setCols(getColumns());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Distribui fotos nas colunas sequencialmente (col 0, 1, 2, 0, 1, 2 ...)
  const columns = Array.from({ length: cols }, () => []);
  photos.forEach((photo, i) => {
    columns[i % cols].push({ photo, originalIndex: i });
  });

  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {columns.map((colPhotos, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-4">
          {colPhotos.map(({ photo, originalIndex }, itemIdx) => (
            <motion.div
              key={originalIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: colIdx * 0.07 + itemIdx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onPhotoClick(originalIndex)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gray-100"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <img
                src={photo.src}
                alt={photo.title ?? ''}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              {photo.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold leading-snug drop-shadow-sm">
                    {photo.title}
                  </p>
                </div>
              )}

              {/* Save button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md transition-colors"
                >
                  Salvar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
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
            <h2 className="font-montserrat text-2xl font-bold text-(--tertiary-color) mb-1">
              {title}
            </h2>
            {description && (
              <p className="text-(--tertiary-color)/60 font-work-sans text-sm">
                {description}
              </p>
            )}
          </div>
          <span className="text-(--tertiary-color)/40 font-work-sans text-sm shrink-0">
            {photos.length} itens
          </span>
        </motion.div>

        <MasonryGrid
          photos={photos}
          onPhotoClick={(i) => setLightboxIndex(i)}
        />
      </section>

      {/* Divider entre seções */}
      <div className="mx-6 md:mx-10 lg:mx-20 h-px bg-(--tertiary-color)/10" />

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
