
import { ThemeProvider } from './contex/ThemeContex';
import Header from './components/Header/Header';
import UserDetails from './components/UserDetails/UserDetails';

const App = () => {
    return (
        <ThemeProvider>
          
            <div >
                <Header />
                <UserDetails />
            </div>
        </ThemeProvider>
    );
};

export default App;
