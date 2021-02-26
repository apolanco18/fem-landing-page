import React from 'react';
import P1 from './P1';


import * as BodyTextStories from '../Text/BodyText.stories';
import * as MainTitleTextStories from '../Text/MainTitleText.stories';
import * as GenericButtonStories from '../Button/Button.stories';


export default {
    component:P1,
    title:"Landing Page Part 1"

}

export const Default = args => {
    return (
        <P1
            {...args}
        />
    )
}

Default.args = {
    titleArgs: MainTitleTextStories.Default.args,
    bodyTextArgs: BodyTextStories.Default.args,
    btnArgs: GenericButtonStories.Default.args,

}

