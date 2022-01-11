// Use.
import styled from 'styled-components';
import { Wrapper, Button } from '@magle-corp/design-system';
import { Taxonomy } from '../../type';

interface Props {
  taxonomies: Taxonomy[];
  filters: Array<string | Array<string>>;
  setFilters: Function;
}

const StyledButton = styled(Button)`
  margin-right: 7px;
  margin-bottom: 7px;
`;

const SelectedButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * Provide component "FiltersTaxo".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param filters
 *   State "filters".
 * @param setFilters
 *   Function for set "filters" state.
 */
const FilterTaxo = ({ taxonomies, filters, setFilters }: Props) => {
  return (
    <Wrapper direction="row">
      {taxonomies.map((taxonomy) => (
        <div key={taxonomy.id}>
          {filters && filters.includes(taxonomy.title) ? (
            <SelectedButton
              onClick={() => {
                setFilters(filters.filter((item) => item !== taxonomy.title));
              }}
            >
              {taxonomy.title}
            </SelectedButton>
          ) : (
            <StyledButton
              onClick={() => {
                setFilters([...filters, taxonomy.title]);
              }}
            >
              {taxonomy.title}
            </StyledButton>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export { FilterTaxo };
