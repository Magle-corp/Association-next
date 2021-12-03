// Use.
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Cartes } from '../type';

interface Props {
  block: Cartes;
}

const Container = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 35px;
  }
`;

const CardsWrapper = styled(Wrapper)<{ cardinality: number }>`
  flex-direction: column;
  align-items: center;
  width: 80%;

  > *:not(:first-child) {
    margin-top: 35px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: unset;

    > *:not(:first-child) {
      margin-top: 0;
    }

    > *:last-child {
      margin-top: ${({ cardinality }) => (cardinality > 2 ? '35px;' : '0')};
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    width: 100%;

    > *:last-child {
      margin-top: 0;
    }
  }
`;

const Card = styled(Wrapper)`
  width: 190px;
  min-width: 190px;
  min-height: 150px;
  padding: 20px 12px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
  text-align: center;

  > *:not(:first-child) {
    margin-top: 15px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    margin: 0 10px;
  }
`;

/**
 * Provide block "Cartes" for block builder.
 *
 * @param block
 *   The custom Strapi "Cartes" component.
 */
const ArticleCartes = ({ block }: Props) => {
  return (
    <>
      <Container alignItem="center">
        {block.title && (
          <Text as="h3" variant="h3">
            {block.title}
          </Text>
        )}
        <CardsWrapper cardinality={block.cartes.length}>
          {block.cartes.map((carte) => (
            <Card key={`${carte.__component}_${carte.id}`}>
              <Text as="h4" variant="h4">
                {carte.title}
              </Text>
              <Text>{carte.content}</Text>
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
};

export { ArticleCartes };
