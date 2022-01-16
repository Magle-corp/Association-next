// Use.
import { Cartes, TexteImage, Wysiwyg } from '../type';
import { Wrapper } from '../ui';
import { ArticleCartes, ArticleImageTexte, ArticleWysiwyg } from '../block';

interface Props {
  blocks?: [Cartes | TexteImage | Wysiwyg];
}

/**
 * Returns a block component according to the Strapi custom component type passed.
 *
 * @param blocks
 *   Array of custom Strapi components.
 */
const BlockBuilder = ({ blocks }: Props) => {
  return (
    <>
      {blocks && (
        <Wrapper variant="vertical" spacing="80px 0 0 0">
          {blocks.map((block) => {
            switch (block.__component) {
              case 'global.cartes':
                return (
                  <ArticleCartes
                    block={block as Cartes}
                    key={`${block.__component}_${block.id}`}
                  />
                );
              case 'global.texte-image':
                return (
                  <ArticleImageTexte
                    block={block as TexteImage}
                    key={`${block.__component}_${block.id}`}
                  />
                );
              case 'global.wysiwyg':
                return (
                  <ArticleWysiwyg
                    block={block as Wysiwyg}
                    key={`${block.__component}_${block.id}`}
                  />
                );
            }
          })}
        </Wrapper>
      )}
    </>
  );
};

export { BlockBuilder };
