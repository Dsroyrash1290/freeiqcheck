export type FamousMind = {
  id: string;
  name: string;
  initials: string;
  image: string;
  imageAlt: string;
  iqRange: string;
  field: string;
  country: string;
  achievement: string;
  /** Tailwind gradient classes for initials fallback */
  avatarGradient: string;
};

export const famousMinds: FamousMind[] = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    initials: 'AE',
    image: '/images/famous-minds/einstein.jpg',
    imageAlt: 'Portrait of Albert Einstein, theoretical physicist',
    iqRange: '160–190',
    field: 'Theoretical physics',
    country: 'Germany / United States',
    achievement: 'Developed the theory of relativity and reshaped modern physics.',
    avatarGradient: 'from-brand-500 to-violet-600',
  },
  {
    id: 'newton',
    name: 'Isaac Newton',
    initials: 'IN',
    image: '/images/famous-minds/newton.jpg',
    imageAlt: 'Portrait of Isaac Newton, mathematician and physicist',
    iqRange: '180–200',
    field: 'Mathematics & physics',
    country: 'England',
    achievement: 'Formulated laws of motion and universal gravitation.',
    avatarGradient: 'from-slate-600 to-brand-700',
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    initials: 'NT',
    image: '/images/famous-minds/tesla.jpg',
    imageAlt: 'Portrait of Nikola Tesla, inventor and engineer',
    iqRange: '160–185',
    field: 'Electrical engineering',
    country: 'Serbia / United States',
    achievement: 'Pioneered alternating-current power systems and wireless concepts.',
    avatarGradient: 'from-violet-500 to-brand-600',
  },
  {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    initials: 'LV',
    image: '/images/famous-minds/davinci.jpg',
    imageAlt: 'Presumed self-portrait of Leonardo da Vinci',
    iqRange: '180–220',
    field: 'Art, engineering & anatomy',
    country: 'Italy',
    achievement: 'Pioneered anatomical study and visionary mechanical designs.',
    avatarGradient: 'from-emerald-500 to-brand-600',
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    initials: 'SH',
    image: '/images/famous-minds/hawking.jpg',
    imageAlt: 'Portrait of Stephen Hawking, theoretical physicist',
    iqRange: '160–180',
    field: 'Cosmology & physics',
    country: 'United Kingdom',
    achievement: 'Advanced understanding of black holes and the early universe.',
    avatarGradient: 'from-brand-600 to-violet-700',
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    initials: 'MC',
    image: '/images/famous-minds/curie.jpg',
    imageAlt: 'Portrait of Marie Curie, physicist and chemist',
    iqRange: '180–200',
    field: 'Physics & chemistry',
    country: 'Poland / France',
    achievement: 'First person to win Nobel Prizes in two scientific fields.',
    avatarGradient: 'from-rose-500 to-violet-600',
  },
];

export const famousMindsDisclaimer =
  'IQ estimates are historical/educational approximations.';
