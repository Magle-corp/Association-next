// Use.
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Cartes } from '../type';
import { Link } from '../ui';

interface Props {
  block: Cartes;
}

const Container = styled(Wrapper)`
  text-align: center;

  > *:not(:first-child) {
    margin-top: 70px;
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
  display: grid;
  grid-template-columns: 10px 1fr 10px;
  grid-template-rows: 10px max-content 10px max-content max-content;
  width: 220px;
  min-width: 200px;
  min-height: 150px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    margin: 0 10px;
  }
`;

const TitleWrapper = styled(Wrapper)`
  z-index: 10;
  grid-column: 1/4;
  grid-row: 1/4;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const ContentWrapper = styled(Wrapper)`
  grid-column: 2/3;
  grid-row: 3/5;
  padding: 20px 10px 10px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};

  > *:not(:first-child) {
    margin-top: 25px;
  }
`;

const CardLink = styled(Link)`
  ${({ theme }) => theme.typography.call_action};
  grid-column: 2/3;
  grid-row: 5/6;
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
              <TitleWrapper>
                <Text as="h4" variant="h4">
                  {carte.title}
                </Text>
              </TitleWrapper>
              <ContentWrapper>
                <Text>{carte.content}</Text>
              </ContentWrapper>
              <CardLink href={`${carte.link.slug ? carte.link.slug : '/404'}`}>
                <Text as="span">{carte.link_title}</Text>
              </CardLink>
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </>
  );
};

export { ArticleCartes };
