// Use.
import styled from 'styled-components';
import { Cartes } from '../type';
import { Link, Text, Wrapper } from '../ui';

interface Props {
  block: Cartes;
}

const Container = styled(Wrapper)`
  justify-content: center;
  text-align: center;
`;

const CardsWrapper = styled.div<{ cardinality: number }>`
  display: flex;
  flex-wrap: wrap;
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

const Card = styled.div`
  display: grid;
  grid-template-columns: 5px 1fr 5px;
  grid-template-rows: max-content max-content max-content;
  width: 220px;
  min-width: 200px;
  min-height: 150px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    margin: 0 10px;
  }
`;

const TitleWrapper = styled.div`
  z-index: 10;
  grid-column: 1/4;
  grid-row: 1/2;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  h4 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ContentWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};

  > *:not(:first-child) {
    margin-top: 25px;
  }
`;

const CardLink = styled(Link)`
  grid-column: 2/3;
  grid-row: 5/6;
  box-sizing: border-box;
  width: 100%;
  padding: 5px 7px;
  margin-top: 20px;
`;

/**
 * Provide block "Cartes" for block builder.
 *
 * @param block
 *   The custom Strapi "Cartes" component.
 */
const ArticleCartes = ({ block }: Props) => {
  return (
    <Container variant="horizontal" spacing="50px 0 0 0">
      {block.title && (
        <Text as="h3" variant="h3">
          {block.title}
        </Text>
      )}
      <CardsWrapper cardinality={block.cartes.length}>
        {block.cartes.map((carte) => (
          <Card key={`${carte.__component}_${carte.id}`}>
            <TitleWrapper>
              <Text as="h4" variant="h4">
                {carte.title}
              </Text>
            </TitleWrapper>
            <ContentWrapper>
              <Text>{carte.content}</Text>
            </ContentWrapper>
            {carte.button && (
              <CardLink
                variant="link_action"
                href={`${
                  carte.button.slug && carte.button.slug.slug !== undefined
                    ? carte.button.slug.slug
                    : '/404'
                }`}
              >
                <Text as="span">{carte.button.title}</Text>
              </CardLink>
            )}
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
};

export { ArticleCartes };
