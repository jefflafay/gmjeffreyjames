import React from 'react';
import SiteHeader from './Components/SiteHeader';
import LinkList from './Components/LinkList';

import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div style={{paddingTop: '2%'}}>
      <Container text>
        <SiteHeader />
        <LinkList />
      </Container>
    </div>
  );
}

export default App;
