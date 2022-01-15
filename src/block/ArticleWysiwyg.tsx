// Use.
import { Wysiwyg } from '../type';
import { Text, Wrapper } from '../ui';

interface Props {
  block: Wysiwyg;
}

/**
 * Provide block "Wysiwyg" for block builder.
 *
 * @param block
 *   The custom Strapi "Wysiwyg" component.
 */
const ArticleWysiwyg = ({ block }: Props) => {
  return (
    <Wrapper variant="vertical" spacing="35px 0 0 0">
      {block.title && (
        <Text as="h2" variant="h2">
          {block.title}
        </Text>
      )}
      <Text>{block.content}</Text>
    </Wrapper>
  );
};

export { ArticleWysiwyg };
