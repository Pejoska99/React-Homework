import  { useContext } from 'react';
import { ThemeContext } from '../../contex/ThemeContex';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // const handleButtonClick = () => {
    //     console.log('Before toggle:', theme);
    //     toggleTheme();
    //     console.log('After toggle:', theme);
    // };

    return (
        <header>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? 'DARK' : 'LIGHT'}
            </button>
        </header>
    );
};

export default Header;
