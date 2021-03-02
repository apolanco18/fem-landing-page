import React from 'react'

import styled from "styled-components";

const StyledA = styled.a.attrs(props => ({
    
})) `
    &.a-txt {
        color:${props => props.color};
        font-family: Be Vietnam, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }
    &.a-txt:hover {
        opacity: 0.5;
    }
`;


const BtnText = ({text,color}) => {
    return(
        <StyledA className="a-txt"
            color={color}
        >
            {text}
        </StyledA>
    )
}

export default BtnText;

BtnText.defaultProps = {
    color:"hsl(228,39%,23%)",
    text:"Hello World"
}