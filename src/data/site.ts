export const site = {
  name: 'Melissa Amaral',
  url: 'https://melissa-personal.netlify.app',
  title: 'Melissa Amaral | Avaliação física e treinamento individualizado',
  description: 'Avaliação física, prescrição individualizada e acompanhamento presencial e online com Melissa Amaral. Força, corrida, saúde e autonomia. CREF 130791-G/SP.',
};
const phone = import.meta.env.PUBLIC_WHATSAPP_NUMBER?.trim() ?? '';
if (phone && !/^[1-9]\d{9,14}$/.test(phone)) {
  throw new Error('PUBLIC_WHATSAPP_NUMBER must include country code and 10–15 digits, without punctuation.');
}
export const whatsappUrl = phone
  ? `https://wa.me/${phone}?text=${encodeURIComponent('Olá, Melissa! Gostaria de saber mais sobre a avaliação e o acompanhamento.')}`
  : null;
export const isIndexable = import.meta.env.CONTEXT === 'production'
  && import.meta.env.PUBLIC_ENABLE_INDEXING === 'true';
