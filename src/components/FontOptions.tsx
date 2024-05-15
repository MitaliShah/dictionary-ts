import { useFontThemeContext } from '../FontThemeContext';
import styled from 'styled-components';

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
            
            <Select            
            id="font-select"
            value={selectedFont}
            onChange={event => {
                setSelectedFont(event.target.value)
            }}                       
            >
            <option 
                value="serif"
                aria-selected={selectedFont === "serif"}
            >
                Serif
            </option>
            <option 
                value="sans-serif"
                aria-selected={selectedFont === "sans-serif"}
            >
                Sans Serif
            </option>
            <option 
                value="monospace"
                aria-selected={selectedFont === "monospace"}
            >
                Monospace
            </option>            
            </Select>
        </div>
    )
}

const Select = styled.select`
    font-size: 14px;
    font-weight: bold;
    background: none;
    border: none;
    color: var(--charcoal-gray);
    outline: none;
    color: var(--violet);
`;