import logo from "../../public/assets/images/logo.svg"
import FormThemeForm from "./FontThemeForm"
import { FontThemeProvider } from '../FontThemeContext';
import styled from "styled-components";

export default function Header() {
    //const { selectedFont, setSelectedFont, isDarkTheme, toggleDarkTheme } = useFontThemeContext();

    return(
        <Wrapper>            
            <Img src={logo} alt="Dictionary Logo" />
            <FontThemeProvider>
                <FormThemeForm />
            </FontThemeProvider>
        </Wrapper>
    )
}

const Img = styled.img`
    display: block;
`;

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
`;