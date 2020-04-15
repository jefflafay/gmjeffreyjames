import React from 'react';
import { List } from 'semantic-ui-react';
import LinkButton from './LinkButton';

class LinkList extends React.Component {
    render () {
        return (
            <List>
                <List.Item>
                    <LinkButton content='Twitter' link='https://twitter.com/gmjeffreyjames' />
                </List.Item>
                <List.Item>
                    <LinkButton content='Instagram' link='https://instagram.com/gmjeffreyjames' />
                </List.Item>
            </List>  
        );
    }
}

export default LinkList;