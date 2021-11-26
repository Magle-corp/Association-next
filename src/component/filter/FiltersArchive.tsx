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

const StyledButton = styled(Button)`
  margin-right: 7px;
  margin-bottom: 7px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

const SelectedButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.grey};
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
    <>
      {nextYearsArch && (
        <>
          <Text variant="h4">A venir</Text>
          <Wrapper direction="row">
            {nextYearsArch.map((year) => (
              <>
                {filters && filters.includes(year) ? (
                  <SelectedButton
                    key={`archive_${year}`}
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
              </>
            ))}
          </Wrapper>
        </>
      )}
      {currentYearArch && (
        <>
          <Text variant="h4">{getYear(new Date())}</Text>
          <Wrapper direction="row">
            {currentYearArch.map((month) => (
              <>
                {filters && filters.includes(month) ? (
                  <SelectedButton
                    key={`archive_${month}`}
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
              </>
            ))}
          </Wrapper>
        </>
      )}
      {pastYearsArch && (
        <>
          <Text variant="h4">Archives</Text>
          <Wrapper direction="row">
            {pastYearsArch.map((year) => (
              <>
                {filters && filters.includes(year) ? (
                  <SelectedButton
                    key={`archive_${year}`}
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
              </>
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export { FiltersArchive };
