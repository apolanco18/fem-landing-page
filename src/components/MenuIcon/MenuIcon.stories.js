import React from 'react';
import CustomMenuIcon from './MenuIcon'

export default {
    component:CustomMenuIcon,
    title:"Custom Menu Icon",
}


export const Default = (args) => {

    return (
        <CustomMenuIcon
        {...args}
        />
    )
}