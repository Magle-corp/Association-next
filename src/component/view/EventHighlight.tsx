// Use.
import { format } from 'date-fns';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../../type';
import { Calendar } from '../../theme/icon';

interface Props {
  event: Event;
}

const Container = styled(Wrapper)`
  svg {
    margin-right: 10px;
  }

  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h3}
  line-height: 3.7rem;
`;

/**
 * Provide component "EventHighlight".
 *
 * @param event
 *   Strapi custom content type "Event".
 */
const EventHighlight = ({ event }: Props) => {
  return (
    <Container>
      <StyledDate as="h2" suppressHydrationWarning>
        <Calendar />
        {format(new Date(event.date), 'EEEE')}{' '}
        {format(new Date(event.date), 'd')}{' '}
        {format(new Date(event.date), 'LLLL')}{' '}
        {format(new Date(event.date), 'y')} {' - '}
        {format(new Date(event.date), 'kk')}:
        {format(new Date(event.date), 'mm')}
      </StyledDate>
      <Text>{event.title}</Text>
    </Container>
  );
};

export { EventHighlight };
