import React from 'react';
import Nav from './Nav'
import * as ButtonStories from '../Button/Button.stories';

export default {
    component:Nav,
    title:"Nav",
}



export const Default = (args) => {

    return (
        <Nav
        {...args}
        />
    )
}

Default.args = {
    btnArgs: ButtonStories.Default.args,
}