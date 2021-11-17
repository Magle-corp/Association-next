import { ReactNode } from 'react';
import styled from 'styled-components';
import { Main as UiMain } from '@magle-corp/design-system';

interface Props {
  className?: string;
  children: ReactNode;
}

const StyledMain = styled(UiMain)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 50px 20px 0 20px;
  margin: 0 auto;
`;

const Main = ({ className, children }: Props) => (
  <StyledMain gridColumnsTemplate="1fr 250px" className={className}>
    {children}
  </StyledMain>
);

export { Main };
