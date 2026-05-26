import {
  FaComments,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLightbulb,
  FaListCheck,
  FaNodeJs,
  FaPaintbrush,
  FaReact,
  FaRotate,
  FaUsers,
  FaVuejs,
  FaWordpress,
} from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import BadgeCard from '../../shared/BadgeCard';

function SkillSection() {
  const HardSkills = [
    {
      icon: FaReact,
      label: 'React',
    },
    {
      icon: SiTailwindcss,
      label: 'Tailwind',
    },
    {
      icon: FaVuejs,
      label: 'Vue',
    },
    {
      icon: FaFigma,
      label: 'Figma',
    },
    {
      icon: FaDatabase,
      label: 'SQL',
    },
    {
      icon: FaNodeJs,
      label: 'Node',
    },
    {
      icon: FaGithub,
      label: 'Github',
    },
    {
      icon: FaGitAlt,
      label: 'Git',
    },
    {
      icon: FaWordpress,
      label: 'Wordpress',
    },
  ];

  const SoftSkills = [
    {
      icon: FaComments,
      label: 'Comunicação',
    },
    {
      icon: FaUsers,
      label: 'Trabalho em Equipe',
    },
    {
      icon: FaLightbulb,
      label: 'Resolução de Problemas',
    },
    {
      icon: FaRotate,
      label: 'Adaptabilidade',
    },
    {
      icon: FaListCheck,
      label: 'Organização',
    },
    {
      icon: FaPaintbrush,
      label: 'Criatividade',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 relative max-w-screen overflow-hidden">
      <h2 className="font-heading text-3xl font-bold mb-6 text-(--tertiary-color)">
        Hard e Soft Skills
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-semibold mb-4 text-(--tertiary-color)/90">
            Hard Skills
          </h3>
          <BadgeCard item={HardSkills} />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-semibold mb-4 text-(--tertiary-color)/90">
            Soft Skills
          </h3>
          <BadgeCard item={SoftSkills} styles="grid-cols-2" />
        </div>
      </div>

      <div className="absolute -left-50 -top-50 size-100 bg-(--primary-color)/10 -z-50 rounded-full blur-3xl" />
      <div className="absolute -right-50 -top-50 size-100 bg-(--primary-color)/20 -z-50 rounded-full blur-3xl" />
      <div className="absolute -right-50 top-50 size-100 bg-(--primary-color)/20 -z-50 rounded-full blur-3xl" />
      <div className="absolute -left-50 top-50 size-100 bg-(--primary-color)/10 -z-50 rounded-full blur-3xl" />
    </section>
  );
}

export default SkillSection;
