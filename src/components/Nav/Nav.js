import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styled, {css} from 'styled-components';


/* 
 Custom Component Imports
*/
import Logo from '../Logo/Logo';
import GenericButton from '../Button/Button';
import CustomMenuIcon from '../MenuIcon/MenuIcon';


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
    width:80%;
    align-self:center;
}
`;

const Nav = ({btnArgs}) => {
    const matches = useMediaQuery('(max-width:375px)');
    return (
        <div>
            <StyledAppBar position="static" elevation={0}>
                <StyledToolbar>
                    <div>
                        <Logo
                            width={160}
                            height={32}
                            fill={'#242D52'}
                        />
                    </div>
                    
                    <div>
                        gefe
                    </div>
                    <div>
                        {
                            (matches) ?
                            <CustomMenuIcon/>
                            :
                            <GenericButton
                            {...btnArgs}
                            />
                        }
                    </div>
                    

                    
                </StyledToolbar>
            </StyledAppBar>
        </div>
    )
}

export default Nav;

Nav.propTypes = {
    /* Arguments of Generic Button Component */
    btnArgs: PropTypes.objectOf(GenericButton.propTypes),
}