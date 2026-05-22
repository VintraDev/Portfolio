import Cards from '../../shared/Cards';

function BeyondTheCodeSection() {
  const items = [
    {
      image: '/svg/GamingPad.svg',
      title: 'Jogos',
      description:
        'Adoro jogar e me expressar por meio de jogos criativos como Minecraft e Hytale. Também gosto de jogos de tabuleiro e experiências cooperativas.',
    },
    {
      image: '/svg/Book.svg',
      title: 'Leitura',
      description:
        'Adoro mergulhar em diferentes estilos literários e enriquecer minha imaginação com as histórias que encontro em cada leitura.',
    },
    {
      image: '/svg/Dumbell.svg',
      title: 'Academia',
      description:
        'Não é apenas um hobby, mas uma parte essencial da minha saúde e bem-estar.',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-10">
      <h2 className="font-montserrat text-3xl font-bold mb-6 text-(--tertiary-color)">
        Além do Código
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cards items={items} className="items-center p-4" />
      </div>
    </section>
  );
}

export default BeyondTheCodeSection;
