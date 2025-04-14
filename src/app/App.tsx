import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppRouter} from './routes/AppRoute';
import {ThemeProvider} from '@mui/material/styles';
import {appTheme} from './theme';
import {BrowserRouter} from 'react-router-dom';
import Static from './static/Static';
import {CheckIsMobile} from '../feature/CheckIsMobile';
import {HelmetProvider} from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';

function App() {
    return (
        <StrictMode>
            <HelmetProvider>
                <ThemeProvider theme={appTheme}>
                    <BrowserRouter>
                        <Provider store={store}>
                            <Static />
                            <ToastContainer />
                            <CheckIsMobile>
                                <AppRouter />
                            </CheckIsMobile>
                        </Provider>
                    </BrowserRouter>
                </ThemeProvider>
            </HelmetProvider>
        </StrictMode>
    );
}

export default App;
