// Use.
import { List } from '@magle-corp/design-system';
import { Event } from '../type';
import { EventTeaser } from './EventTeaser';

interface Props {
  events: Event[];
  spacing?: number;
}

const EventsList = ({ events, spacing }: Props) => {
  return (
    <>
      <List spacing={spacing}>
        {events.map((event) => (
          <li key={event.id}>
            <article>
              <EventTeaser event={event} />
            </article>
          </li>
        ))}
      </List>
    </>
  );
};

export { EventsList };
