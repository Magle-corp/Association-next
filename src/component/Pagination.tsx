// Use.
import styled from 'styled-components';
import { Button, Wrapper } from '../ui';

interface Props {
  page: number;
  lastPage: number;
  setPage: Function;
}

const PaginationWrapper = styled(Wrapper)`
  justify-content: center;
  margin: 60px auto auto;
`;

const StyledButton = styled(Button)`
  border: ${({ theme, disabled }) =>
    disabled
      ? `2px solid ${theme.colors.grey}`
      : `2px solid ${theme.colors.primary}`};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.primary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'cursor')};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.white};
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.white : theme.colors.black};
  }
`;

/**
 * Provide component "Pagination".
 *
 * @param page
 *   State "page", number.
 * @param lastPage
 *   State "lastPage", number.
 * @param setPage
 *   Function for set "page" state, number.
 */
const Pagination = ({ page, lastPage, setPage }: Props) => {
  return (
    <PaginationWrapper variant="horizontal">
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
