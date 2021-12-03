// Use.
import styled from 'styled-components';
import { Wrapper, Button } from '@magle-corp/design-system';

interface Props {
  page: number;
  lastPage: number;
  setPage: Function;
}

const PaginationWrapper = styled(Wrapper)`
  margin-top: 60px;

  button + button {
    margin-left: 20px;
  }
`;

const StyledButton = styled(Button)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'cursor')};
`;

/**
 * Provide component "Pagination".
 *
 * @param page
 *   State "page".
 * @param lastPage
 *   State "lastPage".
 * @param setPage
 *   Function for set "page" state.
 */
const Pagination = ({ page, lastPage, setPage }: Props) => {
  return (
    <PaginationWrapper direction="row" justifyContent="center">
      {page !== null && lastPage !== null && (
        <>
          <StyledButton
            onClick={() => {
              page <= 0 ? setPage() : setPage(page - 1);
            }}
            disabled={page <= 0}
          >
            Précédent
          </StyledButton>
          <StyledButton
            onClick={() => {
              page >= lastPage ? setPage() : setPage(page + 1);
            }}
            disabled={page >= lastPage}
          >
            Suivant
          </StyledButton>
        </>
      )}
    </PaginationWrapper>
  );
};

export { Pagination };
