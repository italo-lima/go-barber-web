import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string; // permite que receba estilização do styles.ts do input
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
