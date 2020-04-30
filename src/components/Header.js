import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>COVID-19 STATS</p>
        <ul>
          <li>
            <Link to="/">
              <i class="fi-xnsuxl-house-solid"></i>{' '}
            </Link>
          </li>
          {/* <li>
            <Link to="/page-2/">INDIA</Link>
          </li> */}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
