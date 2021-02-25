import React from 'react';

import UButton from '@material-ui/core/Button';
import styled, {css} from 'styled-components';
import './button.css'

const Button = styled(UButton)`
    &&{
        width: 137px;
        height: 44px;
        box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        background-color: hsl(12, 88%, 59%);
        font-size: 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: white;
        text-transform: capitalize;
    }

    &&:hover {
        opacity: 0.5;
        background: hsl(12, 88%, 59%);
    }
`;

const GenericButton = ({buttonName}) => {
    return (
        <Button className="btn btn-text" variant="contained">
            {buttonName}
        </Button>
    );
}

export default GenericButton;