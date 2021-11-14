import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';

const StyledList = styled(List)`
  margin-top: 10px;
`;

const LatestArticles = () => {
  return (
    <Wrapper alignItem="flex-end">
      <Text as="h2" variant="h2">
        Derniers articles
      </Text>
      <nav>
        <StyledList>
          <li>
            <Text>Article 1</Text>
          </li>
          <li>
            <Text>Article 2</Text>
          </li>
          <li>
            <Text>Article 3</Text>
          </li>
          <li>
            <Text>Article 4</Text>
          </li>
          <li>
            <Text>Article 5</Text>
          </li>
        </StyledList>
      </nav>
    </Wrapper>
  );
};

export { LatestArticles };

export async function getStaticProps() {}
