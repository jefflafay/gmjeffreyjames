import React from 'react';
import { Image } from 'semantic-ui-react';
import avatar from '../images/avatar.jpg';

class Avatar extends React.Component {
    render() {
        return (
            <div>
                <Image src={avatar} circular size='small' centered={true} />
            </div>
        );
    }
}

export default Avatar;