import { motion } from 'motion/react';

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Descoberta',
      description:
        'Entendimento profundo dos seus objetivos, público-alvo e requisitos técnicos do projeto.',
    },
    {
      number: '02',
      title: 'Planejamento',
      description:
        'Definição da arquitetura, tecnologias e criação de wireframes/protótipos para validar a ideia.',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description:
        'Implementação de código limpo, performático e seguindo as melhores práticas do mercado.',
    },
    {
      number: '04',
      title: 'Entrega',
      description:
        'Testes rigorosos e deploy da aplicação, garantindo que tudo funcione perfeitamente.',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-(--tertiary-color) mb-4">
            Meu Processo de Trabalho
          </h2>
          <p className="text-(--tertiary-color)/70 font-body max-w-2xl mx-auto">
            Uma metodologia focada em transparência, agilidade e resultados de
            alta qualidade para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <span className="text-5xl font-heading font-black text-(--primary-color)/10 absolute top-4 right-6 group-hover:text-(--primary-color)/20 transition-colors">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-(--tertiary-color) mb-4 relative">
                {step.title}
              </h3>
              <p className="text-(--tertiary-color)/80 font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
