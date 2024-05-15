import { useFontThemeContext } from '../FontThemeContext';

export default function FontOptions() {
    const { selectedFont, setSelectedFont } = useFontThemeContext();
    
    return(
        <div>
            <label 
            htmlFor="font-select"
            className='visually-hidden'
            >
            Select Font
            </label>
            
            <select
            id="font-select"
            value={selectedFont}
            onChange={event => {
                setSelectedFont(event.target.value)
            }}
            >
            <option value="serif">
                Serif
            </option>
            <option value="sans-serif">
                Sans Serif
            </option>
            <option value="monospace">
                Monospace
            </option>            
            </select>
        </div>
    )
}