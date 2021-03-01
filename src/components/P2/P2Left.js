import React from 'react';

import styled from 'styled-components';

import MediumTitleText from '../Text/MediumTitleText'
import BodyText from '../Text/BodyText'

import useMediaQuery from '@material-ui/core/useMediaQuery';


const StyledDiv = styled.div.attrs(props => ({
    headerText:{
        width: (props.isSmall) ? '100%':'80%' ,
    },
    bodyText:{
        width: (props.isSmall) ? '100%':'55%' ,
    }
}))`
    &.container{
        display:flex;
        flex-direction:column;
    }

    .heading-text {
        width:${props => props.headerText.width};
    }

    .body-text {
        width:${props => props.bodyText.width};
    }

    .center-text {
        text-align:center;
    }
`;

const P2Left = () => {
    const matches = useMediaQuery('(max-width:375px)');
    const hdrStyle = matches ? 'heading-text center-text' : 'heading-text';
    const bdyTxtStyle = matches ? 'body-text center-text' : 'body-text';


    return (
        <StyledDiv className="container"
            isSmall={matches}
        >
            <div className={hdrStyle}>
                <MediumTitleText/>
            </div>
            <div className={bdyTxtStyle}>
                <BodyText
                    text={"Manage provides all the functionality your team needs without complexity. Our software is tailor-made for modern digital product teams"}
                />
            </div>
            
            
        </StyledDiv>
    )
}

export default P2Left;