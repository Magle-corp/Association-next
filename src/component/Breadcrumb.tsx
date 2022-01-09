// Use.
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { BreadcrumbBuilder } from '../util';
import { Link } from '../ui';
import { Home, ArrowDown } from '../theme/icon';

interface Props {
  className?: string;
}

const Container = styled(Wrapper)`
  display: flex;
  flex-direction: row;
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

const HomeIcon = styled(Home)`
  width: 20px;
  height: 20px;
`;

const ArrowIcon = styled(ArrowDown)`
  width: 20px;
  height: 20px;
  transform: rotate(270deg);
`;

const Breadcrumb = ({ className }: Props) => {
  const router = useRouter();
  const isThereQuery = !!(router.query && router.query.slug);
  const routes = BreadcrumbBuilder(router.route, isThereQuery);

  return (
    <Container className={className}>
      <StyledLink href="/">
        <HomeIcon />
        <ArrowIcon />
      </StyledLink>
      {routes.map((route) => (
        <StyledLink href={route.url} key={`${route.route}`}>
          <Text as="span">{route.route}</Text>
          <ArrowIcon />
        </StyledLink>
      ))}
    </Container>
  );
};

export { Breadcrumb };