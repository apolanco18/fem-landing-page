import React from 'react'
import styled from 'styled-components'
import P1 from '../../components/P1/P1';

import * as BodyTextStories from '../../components/Text/BodyText.stories';
import * as MainTitleTextStories from '../../components/Text/MainTitleText.stories';
import * as GenericButtonStories from '../../components/Button/Button.stories';

const data = {
    titleArgs: MainTitleTextStories.Default.args,
    bodyTextArgs: BodyTextStories.Default.args,
    btnArgs: GenericButtonStories.Default.args,
}

const StyledDiv = styled.div`
    && {
        display:flex;
        justify-content:center
    }
`;
const Home = () => {

    return (
        <div>
            <StyledDiv>
                <P1
                    {...data}
                />
            </StyledDiv>
        </div>
        
    )
    
}

export default Home;