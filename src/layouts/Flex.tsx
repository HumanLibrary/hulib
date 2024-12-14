import React from 'react';

interface Props extends React.CSSProperties {
  children?: React.ReactNode;
}

export const Col = (props: Props) => {
  const { children, ...style } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {children}
    </div>
  );
};

export const Row = (props: Props) => {
  const { children, ...style } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'row', ...style }}>
      {children}
    </div>
  );
};
