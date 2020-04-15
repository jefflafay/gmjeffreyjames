import React from 'react';
import Avatar from './Avatar';
import { Header, Container } from 'semantic-ui-react';

class SiteHeader extends React.Component {
    render() {
        return (
            <div>
                <Header as='h3' textAlign='center'>
                    <Avatar />
                </Header>
                <Container textAlign='center' inverted='true'>
                    <div className='ui inverted'>@gmjeffreyjames</div>
                </Container>
            </div>
        );
    }
}

export default SiteHeader;