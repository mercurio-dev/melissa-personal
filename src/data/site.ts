export const site = {
  name: 'Melissa Amaral',
  url: 'https://melissa-personal.netlify.app',
  title: 'Melissa Amaral | Avaliação física e treinamento individualizado',
  description: 'Avaliação física, prescrição individualizada e acompanhamento presencial e online com Melissa Amaral. Força, corrida, saúde e autonomia. CREF 130791-G/SP.',
};
// Public business contact, confirmed by the site owner.
const phone = '5512991255292';
export const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent('Olá, Melissa! Gostaria de saber mais sobre a avaliação e o acompanhamento.')}`;
export const isIndexable = import.meta.env.CONTEXT === 'production'
  && import.meta.env.PUBLIC_ENABLE_INDEXING === 'true';
