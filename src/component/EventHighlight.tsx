// Use.
import { format } from 'date-fns';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../type';

interface Props {
  event: Event;
}

const Container = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const EventHighlight = ({ event }: Props) => {
  return (
    <Container alignItem="flex-end">
      <Text variant="h3" suppressHydrationWarning>
        {format(new Date(event.date), 'EEEE')}{' '}
        {format(new Date(event.date), 'd')}
      </Text>
      <Text variant="h4" suppressHydrationWarning>
        {format(new Date(event.date), 'LLLL')}{' '}
        {format(new Date(event.date), 'y')}
      </Text>
      <Text variant="h4" suppressHydrationWarning>
        {format(new Date(event.date), 'kk')}:
        {format(new Date(event.date), 'mm')}
      </Text>
      <Text>{event.title}</Text>
    </Container>
  );
};

export { EventHighlight };
