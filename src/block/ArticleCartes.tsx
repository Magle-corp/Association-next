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

const CardsWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const Card = styled(Wrapper)`
  width: 200px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
  text-align: center;

  > *:not(:first-child) {
    margin-top: 15px;
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
        <Text as="h3" variant="h3">
          {block.title}
        </Text>
        <CardsWrapper>
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
