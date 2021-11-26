// Use.
import { List } from '@magle-corp/design-system';
import { Event } from '../type';
import { EventTeaser } from './index';

interface Props {
  events: Event[];
  spacing?: number;
}

/**
 * Provide component "EventsList".
 *
 * @param events
 *   Array of Strapi custom content type "Events".
 * @param spacing
 *   Number for define space between each list item.
 */
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
