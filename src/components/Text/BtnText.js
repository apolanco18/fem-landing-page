import React from 'react'

import styled from "styled-components";

const StyledA = styled.a.attrs(props => ({
    
})) `
    &.a-txt {
        color:${props => props.color};
        font-family: Be Vietnam, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration:none;
    }
    &.a-txt:hover {
        opacity: ${props => props.opac};
        color: ${props => props.hovColor}
    }
`;


const BtnText = ({text,color,hovColor,opac}) => {
    return(
        <StyledA className="a-txt"
            color={color}
            hovColor={hovColor}
            opac={opac}
            href="#"
        >
            {text}
        </StyledA>
    )
}

export default BtnText;

BtnText.defaultProps = {
    color:"hsl(228,39%,23%)",
    text:"Hello World",
    opac:0.5,
}