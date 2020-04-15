import React from 'react';
import { Button } from 'semantic-ui-react';

class LinkButton extends React.Component {
    render() {
        return (
            <div>
                <Button inverted fluid
                    as='a' 
                    role='link' 
                    href={this.props.link}  
                    content={this.props.content} 
                    size='big'
                />
            </div>
        );
    }
}

export default LinkButton;
