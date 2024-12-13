import type { ElementType } from 'react';

import type { PolymorphicComponentPropWithRef } from '@/components/private/types';

type MenuItemState = {
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
  registerChild?: (child: string) => () => void;
};

type MenuItemProps = {
  width?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  className?: string;
};

type MenuItemPolymorphicProps<C extends ElementType> =
  PolymorphicComponentPropWithRef<C, MenuItemProps>;

export type { MenuItemPolymorphicProps, MenuItemState };
