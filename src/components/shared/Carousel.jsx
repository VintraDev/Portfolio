import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
} from 'react-icons/fa6';
import OptimizedImage from '@/components/shared/OptimizedImage';

function Carousel({ items = [] }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: items.length > 1,
      skipSnaps: false,
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    onReInit();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onReInit);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onReInit);
    };
  }, [emblaApi, onReInit, onSelect]);

  if (items.length === 0) return null;

  const currentProject = String(selectedIndex + 1).padStart(2, '0');
  const totalProjects = String(items.length).padStart(2, '0');

  return (
    <section
      className="group/carousel relative w-full outline-none"
      aria-roledescription="carousel"
      aria-label="Carrossel de projetos"
    >
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/20 pb-4 sm:mb-6">
        <div>
          <p className="font-accent text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase">
            Projetos selecionados
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-white sm:text-xl">
            {currentProject}
            <span className="mx-1.5 text-white/35">/</span>
            <span className="text-white/60">{totalProjects}</span>
          </p>
        </div>

        <nav
          className="flex items-center gap-2"
          aria-label="Navegação do carrossel"
        >
          <button
            onClick={scrollPrev}
            type="button"
            disabled={!canScrollPrev}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-md backdrop-blur-md transition duration-200 hover:scale-105 hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Projeto anterior"
          >
            <FaChevronLeft className="size-4" />
          </button>

          <button
            onClick={scrollNext}
            type="button"
            disabled={!canScrollNext}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white text-(--tertiary-color) shadow-md transition duration-200 hover:scale-105 hover:bg-white/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Próximo projeto"
          >
            <FaChevronRight className="size-4" />
          </button>
        </nav>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden rounded-[1.35rem] p-1 cursor-grab active:cursor-grabbing select-none"
          ref={emblaRef}
        >
          <div className="-ml-3 flex">
            {items.map((item, index) => (
              <div
                key={item.title || index}
                className="min-w-0 flex-[0_0_88%] pl-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="group flex h-full min-h-105 flex-col rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-4">
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <OptimizedImage
                      src={item.img}
                      alt={item.title}
                      width={640}
                      height={400}
                      className="size-full object-cover transition duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 82vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/30 bg-slate-950/55 px-2.5 py-1 font-accent text-[9px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                      Projeto {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-1 flex-col">
                    <h3 className="mb-2 line-clamp-1 font-heading text-lg font-bold text-(--tertiary-color) transition-colors group-hover:text-(--primary-color) sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 font-body text-xs leading-relaxed text-(--tertiary-color)/75 sm:text-sm">
                      {item.description}
                    </p>

                    {item.tags?.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-(--primary-color)/15 bg-(--primary-color)/8 px-2 py-1 font-accent text-[10px] font-semibold text-(--primary-color)"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
                    {item.linkSite && (
                      <a
                        href={item.linkSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-(--color-primary) px-3 py-2 font-accent text-xs font-semibold text-white shadow-sm transition hover:bg-(--color-primary-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                        aria-label={`Ver site do projeto ${item.title}`}
                      >
                        <FaArrowUpRightFromSquare className="size-3" />
                        <span>Ver site</span>
                      </a>
                    )}

                    {item.linkGitHub && (
                      <a
                        href={item.linkGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-accent text-xs font-semibold text-(--tertiary-color) transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                        aria-label={`Ver repositório do projeto ${item.title} no GitHub`}
                      >
                        <FaGithub className="size-3.5" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-linear-to-l from-(--tertiary-color) to-transparent lg:block" />
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
        <nav className="flex items-center" aria-label="Páginas do carrossel">
          {scrollSnaps.map((snap, index) => (
            <button
              key={`dot-${snap}`}
              onClick={() => scrollTo(index)}
              type="button"
              className="flex w-6 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Ir para projeto ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-7 bg-white shadow-sm'
                    : 'w-1.5 bg-white/35 hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Carousel;
