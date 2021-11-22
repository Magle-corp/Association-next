// Use.
import { Cartes, TexteImage, Wysiwyg } from '../type';

interface Props {
  blocks: [Cartes | TexteImage | Wysiwyg];
}

const BlockBuilder = ({ blocks }: Props) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__component) {
          case 'global.carte':
            return <p>cartes</p>;
          case 'global.texte-image':
            return <p>texte image</p>;
          case 'global.wysiwyg':
            return <p>wysiwyg</p>;
          default:
            return <p>LOOL</p>;
        }
      })}
    </>
  );
};

export { BlockBuilder };
