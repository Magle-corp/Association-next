// Use.
import styled from 'styled-components';
import { Taxonomy } from '../../type';
import { Wrapper, Button } from '@magle-corp/design-system';

interface Props {
  taxonomies: Taxonomy[];
  filters: Array<string | Array<string>>;
  setFilters: Function;
}

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

const FiltersTaxo = ({ taxonomies, filters, setFilters }: Props) => {
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

export { FiltersTaxo };
