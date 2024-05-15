import FontOptions from "./FontOptions"
export default function FormThemeForm() {
    //const { selectedFont, setSelectedFont, isDarkTheme, toggleDarkTheme } = useFontThemeContext();
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
          }}>
            <FontOptions />
        </form>
    )
}