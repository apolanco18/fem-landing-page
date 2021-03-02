import React from 'react';


import BtnText from './BtnText';

export default {
    component: BtnText,
    title: "Btn Text",
}

const defaultProps = {
    text:"Hello World",
    color: "hsl(228,39%,23%)",
}

export const Default = args => {
    return (
        <BtnText
        {...args}
        />
    )
}

Default.args = {
    ...defaultProps,
}