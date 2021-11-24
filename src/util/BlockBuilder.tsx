// Use.
import styled from 'styled-components';
import { Cartes, TexteImage, Wysiwyg } from '../type';
import { ArticleCartes, ArticleImageTexte, ArticleWysiwyg } from '../block';

interface Props {
  blocks: [Cartes | TexteImage | Wysiwyg];
}

const Container = styled.div`
  > *:first-child {
    margin-top: 100px;
  }

  > *:not(:first-child) {
    margin-top: 80px;
  }
`;

const BlockBuilder = ({ blocks }: Props) => {
  return (
    <Container>
      {blocks.map((block) => {
        switch (block.__component) {
          case 'global.carte':
            return (
              <ArticleCartes
                block={block}
                key={`${block.__component}_${block.id}`}
              />
            );
          case 'global.texte-image':
            return (
              <ArticleImageTexte
                block={block}
                key={`${block.__component}_${block.id}`}
              />
            );
          // case 'global.wysiwyg':
          //   return <ArticleWysiwyg block={block} key={`${block.__component}_${block.id}`}/>;
        }
      })}
    </Container>
  );
};

export { BlockBuilder };
