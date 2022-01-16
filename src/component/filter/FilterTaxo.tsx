// Use.
import styled from 'styled-components';
import { Taxonomy } from '../../type';
import { Button, Wrapper } from '../../ui';

interface Props {
  taxonomies: Taxonomy[];
  filters: Array<string | Array<string>>;
  setFilters: Function;
}

const SelectedButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * Provide component "FilterTaxo".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param filters
 *   State "filters", array.
 * @param setFilters
 *   Function for set "filters" state, array.
 */
const FilterTaxo = ({ taxonomies, filters, setFilters }: Props) => {
  return (
    <Wrapper variant="horizontal">
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
            <Button
              onClick={() => {
                setFilters([...filters, taxonomy.title]);
              }}
            >
              {taxonomy.title}
            </Button>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export { FilterTaxo };
