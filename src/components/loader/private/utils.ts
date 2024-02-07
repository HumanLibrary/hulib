import type { LoaderSize } from '@/components/loader/private/types';

export const getDivBorder = (size?: LoaderSize) => {
  switch (size) {
    case '2xs':
    case 'xs':
    case 'sm':
      return 'border-2';
    default:
      return 'border-4';
  }
};

export const getSize = (size?: LoaderSize) => {
  switch (size) {
    case '2xs':
      return 'w-4 h-4';
    case 'xs':
      return 'w-6 h-6';
    case 'sm':
      return 'w-8 h-8';
    case 'lg':
      return 'w-12 h-12';
    default:
      return 'w-10 h-10';
  }
};
