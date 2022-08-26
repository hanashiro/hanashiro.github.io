import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7177ff',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            //default: '#22212c',
            //paper: '#2b2640',
            default: '#343746',
            paper: '#282a36',
        },
    },
    typography: {
        fontFamily: 'Inter, Roboto, sans-serif',
        h1: {
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
        },
        h2: {
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
        },
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '32px',
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: '14px',
                },
            },
        },
    },
});

export default theme;
