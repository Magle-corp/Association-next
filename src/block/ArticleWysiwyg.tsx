// Use.
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Wysiwyg } from '../type';

interface Props {
  block: Wysiwyg;
}

const Container = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 20px;
  }
`;

/**
 * Provide block "Wysiwyg" for block builder.
 *
 * @param block
 *   The custom Strapi "Wysiwyg" component.
 */
const ArticleWysiwyg = ({ block }: Props) => {
  return (
    <Container>
      {block.title && (
        <Text as="h2" variant="h2">
          {block.title}
        </Text>
      )}
      <Text>{block.content}</Text>
    </Container>
  );
};

export { ArticleWysiwyg };
