// Use.
import styled from 'styled-components';
import { format, formatDistance, isBefore } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../../type';
import { TaxonomiesList } from '../TaxonomiesList';
import { AvailableEvent, CloseEvent } from '../../theme/icon';

interface Props {
  event: Event;
}

const EventWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-template-columns: 180px 15px 15px 1fr;
    grid-template-rows: 15px max-content 15px;
  }
`;

const DateWrapper = styled(Wrapper)`
  z-index: 10;
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  svg {
    margin-right: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h4}
  color: ${({ theme }) => theme.colors.white};
  line-height: 3.7rem;
`;

const ContentWrapper = styled(Wrapper)`
  grid-column: 1/2;
  grid-row: 2/3;
  padding: 20px 15px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 2/5;
    grid-row: 2/4;
    padding: 15px 25px 15px 40px;
    margin-top: 0;
  }

  > *:not(:first-child) {
    margin-top: 15px;
  }
`;

/**
 * Provide component "EventTeaser".
 *
 * @param event
 *   Strapi custom content type "Event".
 */
const EventTeaser = ({ event }: Props) => {
  const startDateInterval = formatDistance(new Date(event.date), new Date(), {
    addSuffix: true,
  });

  const isPastDate = isBefore(new Date(event.date), new Date());

  return (
    <EventWrapper direction="row">
      <DateWrapper>
        <>
          <StyledDate as="h3" suppressHydrationWarning>
            {isPastDate && <CloseEvent width={28} height={28} />}
            {!isPastDate && <AvailableEvent width={28} height={28} />}
            {format(new Date(event.date), 'EEEE')}{' '}
            {format(new Date(event.date), 'd')}{' '}
            {format(new Date(event.date), 'LLLL')}{' '}
            {format(new Date(event.date), 'y')} <br />
            {format(new Date(event.date), 'kk')}:
            {format(new Date(event.date), 'mm')}
          </StyledDate>
        </>
        <Text>{startDateInterval}</Text>
      </DateWrapper>
      <ContentWrapper>
        <Wrapper>
          <Text as="h4" variant="h3">
            {event.title}
          </Text>
          <TaxonomiesList taxonomies={event.taxonomies} />
        </Wrapper>
        <Text>{event.content}</Text>
      </ContentWrapper>
    </EventWrapper>
  );
};

export { EventTeaser };
