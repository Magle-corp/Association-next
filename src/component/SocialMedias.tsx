// Use.
import { Identity } from '../type';
import { Link, Wrapper } from '../ui';
import { Facebook, Instagram, Twitter } from '../theme/icon';

interface Props {
  identity: Identity;
}

/**
 * Provide component "SocialMedias".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const SocialMedias = ({ identity }: Props) => {
  return (
    <Wrapper variant="horizontal" spacing="0 0 0 15px">
      {identity.facebook && (
        <Link href={identity.facebook} variant="social">
          <Facebook size={30} />
        </Link>
      )}
      {identity.instagram && (
        <Link href={identity.instagram} variant="social">
          <Instagram size={30} />
        </Link>
      )}
      {identity.twitter && (
        <Link href={identity.twitter} variant="social">
          <Twitter size={30} />
        </Link>
      )}
    </Wrapper>
  );
};

export { SocialMedias };
