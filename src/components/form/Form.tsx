import React, { forwardRef, useMemo } from 'react';

import type { WithChildren } from '../private/types';
import { mergeClassnames } from '../private/utils';
import type { FormProps, ItemProps } from './private/types';
import { FormContext, ItemContext, useFormContext } from './private/utils';

const FormRoot = forwardRef<HTMLFormElement, WithChildren<FormProps>>(
  ({ children, size = 'md', className, onSubmit, ...rest }, ref) => {
    const state = useMemo(
      () => ({
        size,
      }),
      [size],
    );
    return (
      <FormContext.Provider value={state}>
        <form
          {...rest}
          className={mergeClassnames(className)}
          onSubmit={onSubmit}
          ref={ref}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

const Item = ({
  children,
  size,
  disabled,
  error,
  className,
}: WithChildren<ItemProps>) => {
  const { size: formSize } = useFormContext('Form.Item');

  const state = useMemo(
    () => ({
      size: size || formSize,
      disabled,
      error,
    }),
    [size, formSize, disabled, error],
  );

  return (
    <ItemContext.Provider value={state}>
      <div
        className={mergeClassnames(
          'w-full max-w-full relative z-0',
          disabled && 'opacity-60 cursor-not-allowed',
          className && className,
        )}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
};
FormRoot.displayName = 'FormRoot';

const Form = Object.assign(FormRoot, { Item });

export default Form;