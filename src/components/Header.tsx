import logo from "../../public/assets/images/logo.svg"
import FormThemeForm from "./FontThemeForm"
import { FontThemeProvider } from '../FontThemeContext';

export default function Header() {
    //const { selectedFont, setSelectedFont, isDarkTheme, toggleDarkTheme } = useFontThemeContext();

    return(
        <header>            
            <img src={logo} alt="Dictionary Logo" />
            <FontThemeProvider>
                <FormThemeForm />
            </FontThemeProvider>
        </header>
    )
}