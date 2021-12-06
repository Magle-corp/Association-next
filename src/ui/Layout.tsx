// Use.
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Layout as UiLayout } from '@magle-corp/design-system';

interface Props {
  className?: string;
  children: ReactNode;
}

const StyledLayout = styled(UiLayout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 170px 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    padding: 100px 20px 120px 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: 1fr 250px;
    grid-template-rows: 1fr;
  }
`;

/**
 * Provide component "Layout".
 *
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param props
 *   Props.
 */
const Layout = ({ className, children, ...props }: Props) => (
  <StyledLayout className={className} {...props}>
    {children}
  </StyledLayout>
);

export { Layout };
