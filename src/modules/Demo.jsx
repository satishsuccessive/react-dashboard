import React, { Component } from 'react';
import { Box } from '@stack-ui/components';
// import Switch from '@stack-ui/components/dist/cjs/components/Switch/Switch';

class Demo extends Component {
    render() {
        return (
            <div>
                <Box>
                <Box width="50%" background="#e7e1e1" p="0px" pt="20px" border="1px solid blue">with border property, It renders a Box with background color</Box>
<br />
<br />
<Box textAlign="center" pt="20px" bgImg="url(https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg)">
The Box with background image props.
{/* <Switch  label="switch one" /> */}

</Box>
                </Box>
            </div>
        );
    }
}

export default Demo;