import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        black: string;
        white: string;
    }
}

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#4D4D4D',
            dark: '#1565c0',
            light: '#D9D9D9',
        },
        text: {
            black: '#000000',
            white: '#FFFFFF',
        },
        secondary: {
            main: '#9c27b0', // Фиолетовый
        },
        error: {
            main: '#d32f2f', // Красный
        },
        background: {
            default: '#f5f5f5', // Светло-серый фон
            paper: '#ffffff', // Белый для карточек
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 24,
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: 20,
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontSize: 15,
        },
    },

    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                sx: {
                    padding: '10px 0',
                    fontSize: '14px',
                    textTransform: 'none',
                },
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4D4D4D',
                    borderRadius: '40px',
                    minHeight: '71px',
                    position: 'relative',
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    justifyContent: 'end',
                    paddingBottom: '10px',
                    borderRadius: '40px',
                    '& .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                    },
                    '&.Mui-selected .MuiBottomNavigationAction-label': {
                        fontSize: '13px',
                        color: 'white',
                    },
                },
            },
        },
    },
});
