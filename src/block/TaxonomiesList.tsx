// Use.
import { Text, List } from '@magle-corp/design-system';
import { Taxonomy } from '../type';
import { Link } from '../component';

interface Props {
  taxonomies: Taxonomy[];
  variant?: 'default' | 'link';
}

const TaxonomiesList = ({ taxonomies, variant = 'default' }: Props) => {
  return (
    <>
      <List variant="horizontal">
        {variant == 'default' &&
          taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Text variant="tag">{taxonomy.title}</Text>
            </li>
          ))}
        {variant == 'link' &&
          taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Link href={`#`}>
                <Text as="span" variant="tag">
                  {taxonomy.title}
                </Text>
              </Link>
            </li>
          ))}
      </List>
    </>
  );
};

export { TaxonomiesList };
