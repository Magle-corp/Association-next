// Use.
import { format } from 'date-fns';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../type';
import { Link } from '../ui';
import { Calendar } from '../theme/icon';

interface Props {
  event: Event;
}

const Container = styled(Wrapper)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
`;

const ContentWrapper = styled(Wrapper)`
  margin-left: 5px;
  > p:last-of-type {
    margin-top: 10px;
  }
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h3}
  line-height: 3.7rem;
`;

const EventHighlight = ({ event }: Props) => {
  return (
    <Container>
      <Calendar />
      <ContentWrapper>
        <StyledDate as="h2" suppressHydrationWarning>
          {format(new Date(event.date), 'EEEE')}{' '}
          {format(new Date(event.date), 'd')}
          <br />
          {format(new Date(event.date), 'LLLL')}{' '}
          {format(new Date(event.date), 'y')}
          <br />
          {format(new Date(event.date), 'kk')}:
          {format(new Date(event.date), 'mm')}
        </StyledDate>
        <Link href="#" variant="inline">
          <Text>{event.title}</Text>
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export { EventHighlight };
