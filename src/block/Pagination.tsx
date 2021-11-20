import styled from 'styled-components';
import { Wrapper, Button } from '@magle-corp/design-system';

interface Props {
  page: number;
  lastPage: number;
  setPage: Function;
}

const PaginationWrapper = styled(Wrapper)`
  margin-top: 40px;

  button + button {
    margin-left: 20px;
  }
`;

const Pagination = ({ page, lastPage, setPage }: Props) => {
  return (
    <PaginationWrapper direction="row" justifyContent="center">
      <Button
        onClick={() => {
          page <= 0 ? setPage() : setPage(page - 1);
        }}
        disabled={page <= 0}
      >
        Précédent
      </Button>
      <Button
        onClick={() => {
          page >= lastPage ? setPage() : setPage(page + 1);
        }}
        disabled={page >= lastPage}
      >
        Suivant
      </Button>
    </PaginationWrapper>
  );
};

export { Pagination };
