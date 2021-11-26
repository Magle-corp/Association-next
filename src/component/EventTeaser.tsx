// Use.
import styled from 'styled-components';
import { format, formatDistance, isBefore } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../type';
import { TaxonomiesList } from './TaxonomiesList';
import { AvailableEvent, CloseEvent } from '../theme/icon';

interface Props {
  event: Event;
}

const EventWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 1fr;
`;

const DateWrapper = styled(Wrapper)`
  grid-template-columns: 1/2;
  grid-template-rows: 1/2;

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

const ContentWrapper = styled(Wrapper)`
  grid-template-columns: 2/3;
  grid-template-rows: 1/2;
  margin-left: 25px;

  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const EventTeaser = ({ event }: Props) => {
  const startDateInterval = formatDistance(new Date(event.date), new Date(), {
    addSuffix: true,
  });

  const isPastDate = isBefore(new Date(event.date), new Date());

  return (
    <EventWrapper direction="row">
      <DateWrapper>
        <Wrapper>
          <StyledDate as="h3" suppressHydrationWarning>
            {isPastDate && <CloseEvent width={35} height={35} />}
            {!isPastDate && <AvailableEvent width={35} height={35} />}
            {format(new Date(event.date), 'EEEE')}{' '}
            {format(new Date(event.date), 'd')}{' '}
            {format(new Date(event.date), 'LLLL')}{' '}
            {format(new Date(event.date), 'y')} <br />
            {format(new Date(event.date), 'kk')}:
            {format(new Date(event.date), 'mm')}
          </StyledDate>
        </Wrapper>
        <Text>{startDateInterval}</Text>
      </DateWrapper>
      <ContentWrapper>
        <Text as="h4" variant="h3">
          {event.title}
        </Text>
        <TaxonomiesList taxonomies={event.taxonomies} />
        <Text>{event.content}</Text>
      </ContentWrapper>
    </EventWrapper>
  );
};

export { EventTeaser };
