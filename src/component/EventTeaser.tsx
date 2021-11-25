// Use.
import styled from 'styled-components';
import { format } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../type';
import { TaxonomiesList } from './TaxonomiesList';

interface Props {
  event: Event;
}

const EventWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 1fr;
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h3}
  line-height: 3.7rem;
`;

const ContentWrapper = styled(Wrapper)`
  margin-left: 15px;

  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const TaxoWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    margin-left: 5px;
  }
`;

const FakeImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightblue;
`;

const EventTeaser = ({ event }: Props) => {
  return (
    <EventWrapper direction="row">
      <Wrapper>
        <StyledDate as="h3" suppressHydrationWarning>
          {format(new Date(event.date), 'EEEE')}{' '}
          {format(new Date(event.date), 'd')}
          <br />
          {format(new Date(event.date), 'LLLL')}{' '}
          {format(new Date(event.date), 'y')}
          <br />
          {format(new Date(event.date), 'kk')}:
          {format(new Date(event.date), 'mm')}
        </StyledDate>
      </Wrapper>
      <ContentWrapper>
        <Text as="h4" variant="h3">
          {event.title}
        </Text>
        <TaxoWrapper direction="row">
          <FakeImage />
          <TaxonomiesList taxonomies={event.taxonomies} />
        </TaxoWrapper>
        <Text>{event.content}</Text>
      </ContentWrapper>
    </EventWrapper>
  );
};

export { EventTeaser };
