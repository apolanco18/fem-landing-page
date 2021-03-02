import React from 'react'
import styled from 'styled-components'
import P1 from '../../components/P1/P1';
import P2 from '../../components/P2/P2';
import P3 from '../../components/P3/P3'
import Grid from '@material-ui/core/Grid';


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
        justify-content:center;
        flex-direction:column;
    }

    .part-container {
        display:flex;
        justify-content:center;
    }
    .empty-space-sm {
        height:100px;
    }
    .empty-space-med {
        height:200px;
    }
`;
const Home = () => {

    return (
        <div>
            <StyledDiv>
                <div className="part-container">
                    <P1
                        {...data}
                    />
                </div>
                <div className="part-container">
                    <P2
                    />
                </div>
                <div className="empty-space-sm"></div>
                <div>
                    <P3/>
                </div>
                <div className="empty-space-med"></div>
            </StyledDiv>
        </div>
        
    )
    
}

export default Home;