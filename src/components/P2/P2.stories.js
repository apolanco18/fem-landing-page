import React from 'react';

import P2 from './P2';


export default {
    component:P2,
    title:"Landing Page Part 2",
}

export const Default = args => {
    return (
        <P2
            {...args}
        />
    )
}