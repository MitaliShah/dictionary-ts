import { useEffect } from "react";
import { useFontThemeContext } from "../FontThemeContext";
import Select, { StylesConfig } from "react-select";

const options = [
  { value: "serif", label: "Serif" },
  { value: "sans-serif", label: "Sans Serif" },
  { value: "monospace", label: "Monospace" },
];

interface OptionType {
  value: string;
  label: string;
}

export default function FontOptions() {
  const { isDarkTheme, selectedFont, setSelectedFont } = useFontThemeContext();

  useEffect(() => {
    if (!selectedFont) {
      setSelectedFont(options[0].value);
    }
    document.body.style.fontFamily = selectedFont;
  }, [selectedFont, setSelectedFont]);

  const handleChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      setSelectedFont(selectedOption.value);
    }
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "none",
      border: "none",
      outline: "none",
      boxShadow: "none",
      color: isDarkTheme ? "var(--very-dark-gray)" : "var(--white)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkTheme ? "var(--white)" : "var(--charcoal-gray)",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkTheme ? "var(--very-dark-gray)" : "var(--white)",
      boxShadow: "0 0 5px var(--violet)",
      width: "183px",
      left: "-40px",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "inherit",
      color: isDarkTheme ? "var(--white)" : "var(--charcoal-gray)",
      "&:hover": {
        color: "var(--violet)",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--violet)",
      "&:hover": {
        color: "var(--violet)",
      },
    }),
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      styles={customStyles}
      value={options.find((option) => option.value === selectedFont)}
    />
  );
}
