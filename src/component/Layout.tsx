import { ReactNode } from 'react';
import styled from 'styled-components';
import { Layout as UiLayout } from '@magle-corp/design-system';

interface Props {
  className?: string;
  children: ReactNode;
}

const StyledLayout = styled(UiLayout)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 50px 20px 0 20px;
  margin: 0 auto;
`;

const Layout = ({ className, children, ...props }: Props) => (
  <StyledLayout className={className} {...props}>
    {children}
  </StyledLayout>
);

export { Layout };
