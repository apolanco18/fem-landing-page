import React from 'react';
import P1Left from './P1Left';

import * as BodyTextStories from '../Text/BodyText.stories';
import * as MainTitleTextStories from '../Text/MainTitleText.stories';
import * as GenericButtonStories from '../Button/Button.stories';


export default {
    component:P1Left,
    title:"Landing Page Part 1 LeftSide"
}

export const Default = args => {
    return (
        <P1Left
        {...args}
        />
    )
}

Default.args = {
    titleArgs: MainTitleTextStories.Default.args,
    bodyTextArgs: BodyTextStories.Default.args,
    btnArgs: GenericButtonStories.Default.args,

}
