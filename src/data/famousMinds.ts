export type FamousMind = {
  id: string;
  name: string;
  initials: string;
  iqRange: string;
  field: string;
  country: string;
  achievement: string;
  /** Tailwind gradient classes for avatar ring */
  avatarGradient: string;
};

export const famousMinds: FamousMind[] = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    initials: 'AE',
    iqRange: '160–190',
    field: 'Theoretical physics',
    country: 'Germany / United States',
    achievement: 'Developed the theory of relativity and reshaped modern physics.',
    avatarGradient: 'from-brand-500 to-violet-600',
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    initials: 'MC',
    iqRange: '180–200',
    field: 'Physics & chemistry',
    country: 'Poland / France',
    achievement: 'First person to win Nobel Prizes in two scientific fields.',
    avatarGradient: 'from-violet-500 to-brand-600',
  },
  {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    initials: 'LV',
    iqRange: '180–220',
    field: 'Art, engineering & anatomy',
    country: 'Italy',
    achievement: 'Pioneered anatomical study and visionary mechanical designs.',
    avatarGradient: 'from-emerald-500 to-brand-600',
  },
  {
    id: 'lovelace',
    name: 'Ada Lovelace',
    initials: 'AL',
    iqRange: '165–185',
    field: 'Mathematics & computing',
    country: 'United Kingdom',
    achievement: 'Published early insights on programmable computation.',
    avatarGradient: 'from-rose-500 to-violet-600',
  },
  {
    id: 'ramanujan',
    name: 'Srinivasa Ramanujan',
    initials: 'SR',
    iqRange: '170–190',
    field: 'Pure mathematics',
    country: 'India',
    achievement: 'Produced remarkable theorems with little formal training.',
    avatarGradient: 'from-amber-500 to-brand-600',
  },
  {
    id: 'hypatia',
    name: 'Hypatia of Alexandria',
    initials: 'HA',
    iqRange: '170–185',
    field: 'Philosophy & astronomy',
    country: 'Egypt (Roman era)',
    achievement: 'Led the Platonic school and advanced geometric astronomy.',
    avatarGradient: 'from-brand-600 to-emerald-600',
  },
];

export const famousMindsDisclaimer =
  'IQ estimates are historical/educational approximations.';
