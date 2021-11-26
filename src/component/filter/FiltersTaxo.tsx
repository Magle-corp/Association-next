// Use.
import styled from 'styled-components';
import { Taxonomy } from '../../type';
import { Wrapper, Button as UiButton } from '@magle-corp/design-system';

interface Props {
  taxonomies: Taxonomy[];
  filters: Array<string | Array<string>>;
  setFilters: Function;
}

const Button = styled(UiButton)`
  margin-right: 7px;
  margin-bottom: 7px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

const SelectedButton = styled(Button)`
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

export { FiltersTaxo };
