import React from 'react';
import MediumTitleText from '../Text/MediumTitleText'
import GenericButton from '../Button/Button'

import useMediaQuery from '@material-ui/core/useMediaQuery';


import styled from "styled-components"

const StyledDiv = styled.div.attrs(props => ({
    innerCont: {
        width: (props.isSmall) ? '100%' : '80%'
    },
    txtCont:{
        width: (props.isSmall) ? '100%' : '50%'
    }
}))`
    &.background {
        background-color:hsl(12, 88%, 59%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 220px;

    }

    .inner-cont {
        width: ${props => props.innerCont.width};
        display: flex;
        justify-content: space-between;
    }

    .titTxt-cont {
        width: ${props => props.txtCont.width};
    }

    .btnTxt-cont {
        display: flex;
        align-items: center;
    }

    .center-txt {
        text-align:center;
    }

    .change-direction {
        align-items:center;
        flex-direction:column;
    }

`;
const P4 = () => {
    const matches = useMediaQuery('(max-width:375px)');

    return (
        <StyledDiv className="background"
            isSmall={matches}
        >
            <div className={`inner-cont ${matches ? 'change-direction':''}`}>
                <div className={`titTxt-cont ${matches ? 'center-txt':''}`}>
                    <MediumTitleText
                        text={"Simplify how your team works today"}
                        color={"white"}
                    />
                </div>
                <div className="btnTxt-cont">
                    <GenericButton
                        backgroundColor={"#fff"}
                        txtColor={"hsl(12, 88%, 59%)"}
                    />
                </div>
            </div>
        </StyledDiv>
    )
}

export default P4;