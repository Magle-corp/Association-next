// Use.
import styled from 'styled-components';
import { getYear } from 'date-fns';
import { Wrapper, Text, Button } from '@magle-corp/design-system';
import { Event } from '../../type';
import { ItemsArchiver } from '../../util';

interface Props {
  events: Event[];
}

const Container = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 10px;
  }
  > * {
    > *:not(:first-child) {
      margin-top: 5px;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-right: 7px;
  margin-bottom: 7px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

const SelectedButton = styled(Button)`
  margin-right: 7px;
  margin-bottom: 7px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const FiltersArchive = ({ events }: Props) => {
  const { nextYearsArch, currentYearArch, pastYearsArch } =
    ItemsArchiver(events);

  return (
    <Container>
      <Wrapper>
        <Text variant="h4">A venir</Text>
        <Wrapper direction="row">
          {nextYearsArch.map((year) => (
            <StyledButton key={`archive_${year}`}>{year}</StyledButton>
          ))}
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Text variant="h4">{getYear(new Date())}</Text>
        <Wrapper direction="row">
          {currentYearArch.map((month) => (
            <StyledButton key={`archive_${month}`}>{month}</StyledButton>
          ))}
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Text variant="h4">Archives</Text>
        <Wrapper direction="row">
          {pastYearsArch.map((year) => (
            <StyledButton key={`archive_${year}`}>{year}</StyledButton>
          ))}
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export { FiltersArchive };
