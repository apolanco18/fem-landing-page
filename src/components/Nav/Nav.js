import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styled, {css} from 'styled-components';

import Logo from '../Logo/Logo';
import GenericButton from '../Button/Button'

const StyledAppBar = styled(AppBar)`
&&{
    display:flex;
    background:#fff;
    height:103px;
    justify-content:center;
}


`;

const StyledToolbar = styled(Toolbar)`
&&{
    justify-content:space-between;
}
`;

const Nav = ({btnArgs}) => {
    return (
        <div>
            <StyledAppBar position="static">
                <StyledToolbar>
                    <Logo/>
                    <GenericButton
                        {...btnArgs}
                    />
                </StyledToolbar>
            </StyledAppBar>
        </div>
    )
}

export default Nav;