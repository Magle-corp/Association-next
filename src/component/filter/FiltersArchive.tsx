// Use.
import styled from 'styled-components';
import { getYear } from 'date-fns';
import { Wrapper, Text, Button } from '@magle-corp/design-system';
import { Event } from '../../type';
import { ItemsArchiver } from '../../util';

interface Props {
  events: Event[];
  filters: Array<string | number>;
  setFilters: Function;
}

const Container = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 7px;
  margin-bottom: 7px;
`;

const SelectedButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

/**
 * Provide component "FiltersArchive".
 *
 * @param events
 *   Array of Strapi custom content type "Event".
 * @param filters
 *   State "filters".
 * @param setFilters
 *   Function for set "filters" state.
 */
const FiltersArchive = ({ events, filters, setFilters }: Props) => {
  const { nextYearsArch, currentYearArch, pastYearsArch } =
    ItemsArchiver(events);

  return (
    <Container>
      {nextYearsArch && (
        <Container>
          <Text variant="h4">A venir</Text>
          <Wrapper direction="row">
            {nextYearsArch.map((year) => (
              <Wrapper key={`archive_${year}`}>
                {filters && filters.includes(year) ? (
                  <SelectedButton
                    onClick={() => {
                      setFilters(filters.filter((item) => item !== year));
                    }}
                  >
                    {year}
                  </SelectedButton>
                ) : (
                  <StyledButton
                    key={`archive_${year}`}
                    onClick={() => {
                      setFilters([...filters, year]);
                    }}
                  >
                    {year}
                  </StyledButton>
                )}
              </Wrapper>
            ))}
          </Wrapper>
        </Container>
      )}
      {currentYearArch && (
        <Container>
          <Text variant="h4">{getYear(new Date())}</Text>
          <Wrapper direction="row">
            {currentYearArch.map((month) => (
              <Wrapper key={`archive_${month}`}>
                {filters && filters.includes(month) ? (
                  <SelectedButton
                    onClick={() => {
                      setFilters(filters.filter((item) => item !== month));
                    }}
                  >
                    {month}
                  </SelectedButton>
                ) : (
                  <StyledButton
                    key={`archive_${month}`}
                    onClick={() => {
                      setFilters([...filters, month]);
                    }}
                  >
                    {month}
                  </StyledButton>
                )}
              </Wrapper>
            ))}
          </Wrapper>
        </Container>
      )}
      {pastYearsArch && (
        <Container>
          <Text variant="h4">Archives</Text>
          <Wrapper direction="row">
            {pastYearsArch.map((year) => (
              <Wrapper key={`archive_${year}`}>
                {filters && filters.includes(year) ? (
                  <SelectedButton
                    onClick={() => {
                      setFilters(filters.filter((item) => item !== year));
                    }}
                  >
                    {year}
                  </SelectedButton>
                ) : (
                  <StyledButton
                    key={`archive_${year}`}
                    onClick={() => {
                      setFilters([...filters, year]);
                    }}
                  >
                    {year}
                  </StyledButton>
                )}
              </Wrapper>
            ))}
          </Wrapper>
        </Container>
      )}
    </Container>
  );
};

export { FiltersArchive };
