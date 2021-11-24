// Use.
import { format } from 'date-fns';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Event } from '../type';

interface Props {
  event: Event;
}

const Container = styled(Wrapper)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
`;

const FakeIconOne = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightblue;
`;

const FakeIconTwo = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  background-color: lightblue;
`;

const ContentWrapper = styled(Wrapper)`
  margin-left: 10px;
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
      <FakeIconOne />
      <ContentWrapper>
        <Wrapper direction="row">
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
          <FakeIconTwo />
        </Wrapper>
        <Text>{event.title}</Text>
      </ContentWrapper>
    </Container>
  );
};

export { EventHighlight };
