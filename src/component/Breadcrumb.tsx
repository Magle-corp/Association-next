// Use.
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BreadcrumbBuilder } from '../util';
import { Link, Text } from '../ui';
import { Home as HomeIcon, Arrow as ArrowIcon } from '../theme/icon';

interface Props {
  className?: string;
  variant: 'mono_breadcrumb' | 'duo_breadcrumb';
}

const Container = styled.div<{ variant: string }>`
  grid-column: ${({ variant }) =>
    variant == 'mono_breadcrumb' ? '1/2' : '1/3'};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;

  * > svg:not(:first-child) {
    display: none;
  }

  > *:not(:last-child) {
    margin-right: 10px;

    svg:not(:first-child) {
      display: inline;
      margin-left: 10px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

/**
 * Provide component "Breadcrumb".
 *
 * @param className
 *   String for override Styled component style.
 * @param variant
 *   String for define behaviour of the component.
 */
const Breadcrumb = ({ className, variant }: Props) => {
  const router = useRouter();
  const routes = BreadcrumbBuilder(router.route, router.query);

  return (
    <Container className={className} variant={variant}>
      <StyledLink href="/">
        <HomeIcon size={20} />
        <ArrowIcon size={20} variant="right" />
      </StyledLink>
      {routes.map((route) => (
        <StyledLink href={route.url} key={`${route.route}`}>
          <Text as="span">{route.route}</Text>
          <ArrowIcon size={20} variant="right" />
        </StyledLink>
      ))}
    </Container>
  );
};

export { Breadcrumb };
