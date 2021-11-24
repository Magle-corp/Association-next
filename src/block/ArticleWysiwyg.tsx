// Use.
import Image from 'next/image';
import parse from 'html-react-parser';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Wysiwyg } from '../type';

interface Props {
  block: Wysiwyg;
}

const ArticleWysiwyg = ({ block }: Props) => {
  console.log(block);

  const parseOptions = {
    replace: (domNode: {
      attribs: any;
      name: string;
      children: string | any[];
    }) => {
      if (
        domNode.attribs &&
        domNode.name === 'p' &&
        domNode.children.length > 0 &&
        domNode.children[0].name === 'img'
      ) {
        const imageUrl = domNode.children[0].attribs.src;
        const imageAlt = domNode.children[0].attribs.alt;
        return (
          <div className={'image-wrapper'}>
            <Image
              src={`${process.env.BASE_URL}${imageUrl}`}
              layout="responsive"
              width={750}
              height={510}
              alt={imageAlt}
            />
            <p>{imageAlt}</p>
          </div>
        );
      }
    },
  };

  return (
    <Wrapper>
      <Text as="h2" variant="h2">
        {block.title}
      </Text>
      <Wrapper>{parse(block.content, parseOptions)}</Wrapper>
    </Wrapper>
  );
};

export { ArticleWysiwyg };
