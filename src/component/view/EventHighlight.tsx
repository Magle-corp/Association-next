// Use.
import { format } from 'date-fns';
import styled from 'styled-components';
import { Event } from '../../type';
import { Calendar } from '../../theme/icon';
import { Wrapper, Text } from '../../ui';

interface Props {
  event: Event;
}

const CalendarIcon = styled(Calendar)`
  margin-right: 10px;
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h3}
  line-height: 3.7rem;
`;

/**
 * Provide view "EventHighlight".
 *
 * @param event
 *   Strapi custom content type "Event".
 */
const EventHighlight = ({ event }: Props) => {
  return (
    <Wrapper variant="vertical" spacing="10px 0 0 0">
      <StyledDate as="h2" suppressHydrationWarning>
        <CalendarIcon size={40} />
        {format(new Date(event.date), 'EEEE')}{' '}
        {format(new Date(event.date), 'd')}{' '}
        {format(new Date(event.date), 'LLLL')}{' '}
        {format(new Date(event.date), 'y')} {' - '}
        {format(new Date(event.date), 'kk')}:
        {format(new Date(event.date), 'mm')}
      </StyledDate>
      <Text>{event.title}</Text>
    </Wrapper>
  );
};

export { EventHighlight };
