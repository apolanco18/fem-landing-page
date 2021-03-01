import React from 'react';
import MainTitleText from '../Text/MainTitleText'
import BodyText from '../Text/BodyText';
import GenericButton from '../Button/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import styled from 'styled-components'

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
        flex-direction: column;
    }
    .heading-text {
        width: ${props => props.headerText.width};
        margin: 15px 0 15px 0;
    }

    .body-text {
        width: ${props => props.bodyText.width};

    }

    .btn{
        margin: 5px 0 5px 0;
    }

    .btn-mobile {
        justify-content: center;
        display:flex;
    }
    .center-text {
        text-align:center;
    }

`;

const P1Left = ({titleArgs,bodyTextArgs,btnArgs}) => {
    const matches = useMediaQuery('(max-width:375px)');
    const btnStyle = matches ? 'btn-mobile btn' : 'btn';
    const hdrStyle = matches ? 'heading-text center-text' : 'heading-text';
    const bdyTxtStyle = matches ? 'body-text center-text' : 'body-text';

    return (
        <StyledDiv className="container"
            isSmall={matches}
        >
            <div className={hdrStyle}>
                <MainTitleText
                    {...titleArgs}
                />
            </div>
            <div className={bdyTxtStyle}>
                <BodyText
                    {...bodyTextArgs} 
                />
            </div>
            <div className={btnStyle}>
                <GenericButton
                    {...btnArgs}
                />
            </div>    
        </StyledDiv>
    )
}

export default P1Left;