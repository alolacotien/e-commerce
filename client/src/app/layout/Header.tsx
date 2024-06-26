import {AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyles = {
    color: 'inherit', typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

function Header({darkMode, handleThemeChange}: Readonly<Props>) {
    return (
        <AppBar position={'static'} sx={{mb: 4}} color='secondary'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                <Box display={'flex'} alignItems={'center'}>
                    <Typography variant={'h6'} component={NavLink}
                                to='/'
                                sx={navStyles}>
                        Re-Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display={'flex'} alignItems={'center'}>
                    <IconButton component={Link} to={'/basket'} size={'large'} edge={'end'} color={'inherit'}>
                        <Badge badgeContent={4} color={'primary'}>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{color: 'inherit', typography: 'h6'}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;