import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowUpRightFromSquare,
  FaAward,
  FaDownload,
  FaFilePdf,
  FaGraduationCap,
  FaXmark,
} from 'react-icons/fa6';
import DropdownFilter from '@/components/shared/DropdownFilter';

const CERTIFICATE_GROUPS = [
  { id: 'all', label: 'Todos' },
  { id: 'rocketseat', label: 'Rocketseat' },
  { id: 'curso-em-video', label: 'Curso em Vídeo' },
  { id: 'scrumstudy', label: 'SCRUMstudy' },
];

const CERTIFICATES = [
  {
    id: 'nextjs',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Curso de extensão',
    title: 'Next.js',
    hours: 45,
    completedAt: '22 set. 2026',
    topics: ['App Router', 'Server Actions', 'SSR, SSG e ISR', 'SEO'],
    file: 'Certificado_Next.js.pdf',
  },
  {
    id: 'board-app',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Micro-certificado',
    title: 'Board App',
    hours: 5,
    completedAt: '22 set. 2026',
    topics: ['React Query', 'API externa', 'Parallel Routes', 'Open Graph'],
    file: 'Certificado_Board App.pdf',
  },
  {
    id: 'nextjs-pet-shop',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Micro-certificado',
    title: 'Next.js · Pet Shop',
    hours: 6,
    completedAt: '17 ago. 2026',
    topics: ['Next.js 15', 'Prisma', 'React Hook Form', 'PostgreSQL'],
    file: 'Certificado_Next.js - Pet Shop.pdf',
  },
  {
    id: 'git-github',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Micro-certificado',
    title: 'O básico de Git e GitHub',
    hours: 1,
    completedAt: '16 ago. 2026',
    topics: ['Git', 'Commits', 'Repositórios', 'Controle de versão'],
    file: 'Certificado_O básico de Git e GitHub.pdf',
  },
  {
    id: 'fundamentos-nextjs',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Micro-certificado',
    title: 'Fundamentos do Next.js',
    hours: 15,
    completedAt: '23 jul. 2026',
    topics: ['Data fetching', 'Pages Router', 'CMS', 'Deploy'],
    file: 'Certificado_Fundamentos do Next.js.pdf',
  },
  {
    id: 'fundamentos-nodejs',
    provider: 'Rocketseat',
    group: 'rocketseat',
    type: 'Micro-certificado',
    title: 'Fundamentos do Node.js',
    hours: 3,
    completedAt: '20 mai. 2026',
    topics: ['Node.js', 'Streams', 'HTTP', 'Request e Response'],
    file: 'Certificado_Fundamentos do Node.js.pdf',
  },
  {
    id: 'html-css-modulo-4',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'HTML5 e CSS3 · Módulo 4',
    hours: 40,
    completedAt: '12 abr. 2026',
    topics: ['HTML5', 'CSS3', 'Desenvolvimento web'],
    file: 'Vinicius-Santos-HTML5-e-CSS3-Modulo-4-de-5-VIP-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'wordpress-modulo-1',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'WordPress · Módulo 1',
    hours: 40,
    completedAt: '20 mai. 2025',
    topics: ['WordPress', 'Criação de sites', 'CMS'],
    file: 'Vinicius-Santos-WordPress-Modulo-1-8211-Criando-um-site-do-zero-40-Horas-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'html-css-modulo-3',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'HTML5 e CSS3 · Módulo 3',
    hours: 40,
    completedAt: '19 mai. 2025',
    topics: ['HTML5', 'CSS3', 'Desenvolvimento web'],
    file: 'Vinicius-Santos-HTML5-e-CSS3-Modulo-3-de-5-VIP-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'html-css-modulo-2',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'HTML5 e CSS3 · Módulo 2',
    hours: 40,
    completedAt: '19 dez. 2024',
    topics: ['HTML5', 'CSS3', 'Desenvolvimento web'],
    file: 'Vinicius-Santos-HTML5-e-CSS3-Modulo-2-de-5-VIP-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'python-mundo-3',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'Python 3 · Mundo 3',
    hours: 40,
    completedAt: '16 out. 2024',
    topics: ['Python 3', 'Lógica de programação', 'Programação'],
    file: 'Vinicius-Santos-Python-3-8211-Mundo-3-40-Horas-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'javascript',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'JavaScript',
    hours: 40,
    completedAt: '25 jun. 2024',
    topics: ['JavaScript', 'Lógica de programação', 'Desenvolvimento web'],
    file: 'Vinicius-Santos-Javascript-40-Horas-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'html-css-modulo-1',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'HTML5 e CSS3 · Módulo 1',
    hours: 40,
    completedAt: '29 abr. 2024',
    topics: ['HTML5', 'CSS3', 'Desenvolvimento web'],
    file: 'Vinicius-Santos-HTML5-e-CSS3-Modulo-1-de-5-VIP-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'scrum-fundamentals-certified',
    provider: 'SCRUMstudy',
    group: 'scrumstudy',
    type: 'Certificação profissional',
    title: 'Scrum Fundamentals Certified (SFC)',
    completedAt: '15 mar. 2024',
    topics: ['Scrum', 'Métodos ágeis', 'Fundamentos de produto'],
    file: 'ScrumFundamentalsCertified-ViniciusSantos-1020971-20240315.pdf',
  },
  {
    id: 'python-mundo-1',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'Python 3 · Mundo 1',
    hours: 40,
    completedAt: '28 fev. 2024',
    topics: ['Python 3', 'Lógica de programação', 'Programação'],
    file: 'Vinicius-Santos-Python-3-8211-Mundo-1-40-Horas-Certificado-Curso-em-Video.pdf',
  },
  {
    id: 'python-mundo-2',
    provider: 'Curso em Vídeo',
    group: 'curso-em-video',
    type: 'Curso em videoaula',
    title: 'Python 3 · Mundo 2',
    hours: 40,
    completedAt: '28 fev. 2024',
    topics: ['Python 3', 'Lógica de programação', 'Programação'],
    file: 'Vinicius-Santos-Python-3-8211-Mundo-2-40-Horas-Certificado-Curso-em-Video.pdf',
  },
];

function CertificatesSection() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const closeButtonRef = useRef(null);

  const certificates = CERTIFICATES.filter(
    (certificate) => activeGroup === 'all' || certificate.group === activeGroup,
  );
  const certificateFilters = CERTIFICATE_GROUPS.map((group) => {
    const count =
      group.id === 'all'
        ? CERTIFICATES.length
        : CERTIFICATES.filter((certificate) => certificate.group === group.id)
            .length;

    return {
      label: `${group.label} (${count})`,
      value: group.id,
    };
  });

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certificados"
      className="relative overflow-hidden bg-gray-50 px-6 py-12 md:px-10 lg:px-20"
      aria-labelledby="certificates-title"
    >
      <div className="absolute -right-32 top-12 -z-0 size-80 rounded-full bg-(--primary-color)/10 blur-3xl" />
      <div className="absolute -bottom-36 -left-28 -z-0 size-80 rounded-full bg-(--secondary-color)/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-360">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-(--primary-color)/20 bg-(--primary-color)/10 px-3.5 py-1.5 font-accent text-xs font-semibold text-(--primary-color)">
              <FaAward className="size-3.5" />
              <span>03 / Formação complementar</span>
            </div>
            <h2
              id="certificates-title"
              className="font-heading text-3xl font-bold text-(--tertiary-color) md:text-4xl"
            >
              Certificados &amp; formação contínua
            </h2>
            <p className="mt-3 max-w-xl font-body leading-relaxed text-(--tertiary-color)/75">
              Uma seleção das formações que aprofundam minha atuação em
              desenvolvimento web, back-end e ferramentas do ecossistema
              moderno.
            </p>
          </div>

          <dl className="grid grid-cols-3 divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs">
            <div className="px-4 py-3 text-center">
              <dt className="font-accent text-[11px] font-medium uppercase tracking-wide text-gray-500">
                Certificados
              </dt>
              <dd className="mt-0.5 font-heading text-xl font-bold text-(--tertiary-color)">
                16
              </dd>
            </div>
            <div className="px-4 py-3 text-center">
              <dt className="font-accent text-[11px] font-medium uppercase tracking-wide text-gray-500">
                Horas em cursos
              </dt>
              <dd className="mt-0.5 font-heading text-xl font-bold text-(--tertiary-color)">
                435h
              </dd>
            </div>
            <div className="px-4 py-3 text-center">
              <dt className="font-accent text-[11px] font-medium uppercase tracking-wide text-gray-500">
                Instituições
              </dt>
              <dd className="mt-0.5 font-heading text-xl font-bold text-(--tertiary-color)">
                3
              </dd>
            </div>
          </dl>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-accent text-xs text-gray-500">
            Exibindo {certificates.length}{' '}
            {certificates.length === 1 ? 'certificado' : 'certificados'}
          </p>
          <DropdownFilter
            filters={certificateFilters}
            activeFilter={activeGroup}
            onChange={setActiveGroup}
            labelPrefix="Instituição:"
          />
        </div>

        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {certificates.map((certificate) => {
            const certificatePath = `/files/certificates/${certificate.file}`;

            return (
              <article
                key={certificate.id}
                className="group flex min-h-67.5 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--primary-color)/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                    <FaGraduationCap className="size-5" />
                  </div>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 font-accent text-[11px] font-semibold text-gray-600">
                    {certificate.hours ? `${certificate.hours}h` : 'SFC'}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="font-accent text-xs font-semibold text-(--primary-color)">
                    {certificate.provider} · {certificate.type}
                  </p>
                  <h3 className="mt-1.5 font-heading text-xl font-bold leading-snug text-(--tertiary-color)">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-gray-500">
                    Conclusão em {certificate.completedAt}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {certificate.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 font-accent text-[10px] font-medium text-(--tertiary-color)/75"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-(--primary-color)/20 bg-(--primary-color)/10 px-3 py-2.5 font-accent text-xs font-bold text-(--primary-color) transition-colors hover:bg-(--primary-color) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
                  >
                    <FaArrowUpRightFromSquare className="size-3.5" />
                    Visualizar
                  </button>
                  <a
                    href={certificatePath}
                    download
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 px-3 text-(--tertiary-color) transition-colors hover:border-(--primary-color)/30 hover:bg-gray-50 hover:text-(--primary-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
                    aria-label={`Baixar certificado ${certificate.title}`}
                  >
                    <FaDownload className="size-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-(--tertiary-color)/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget)
                setSelectedCertificate(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-[min(90vh,56rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-5 py-4 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                    <FaFilePdf className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-accent text-xs font-semibold text-(--primary-color)">
                      {selectedCertificate.provider}
                    </p>
                    <h3
                      id="certificate-modal-title"
                      className="truncate font-heading text-lg font-bold text-(--tertiary-color) sm:text-xl"
                    >
                      {selectedCertificate.title}
                    </h3>
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-(--tertiary-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
                  aria-label="Fechar visualização"
                >
                  <FaXmark className="size-5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 bg-gray-100 p-3 sm:p-5">
                <iframe
                  title={`Certificado ${selectedCertificate.title}`}
                  src={`/files/certificates/${selectedCertificate.file}`}
                  className="h-[58vh] min-h-80 w-full rounded-lg border border-gray-200 bg-white"
                />
              </div>

              <div className="flex flex-col-reverse gap-2 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="font-body text-xs text-gray-500">
                  Use Esc ou o botão acima para fechar.
                </p>
                <a
                  href={`/files/certificates/${selectedCertificate.file}`}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary-color) px-4 py-2.5 font-accent text-xs font-bold text-white transition-colors hover:bg-(--primary-color-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
                >
                  <FaDownload className="size-3.5" />
                  Baixar PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CertificatesSection;
