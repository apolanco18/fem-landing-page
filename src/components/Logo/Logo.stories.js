import React from 'react';
import Logo from './Logo'

export default {
    component:Logo,
    title:"Logo",
}


export const Default = (args) => {

    return (
        <Logo
        {...args}
        />
    )
}

Default.args = {
    width:160,
    height:32,
    fill:'#242D52',
}
