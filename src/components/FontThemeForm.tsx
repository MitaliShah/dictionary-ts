import FontOptions from "./FontOptions"
import ThemeSelection from "./ThemeSelection";
import styled from "styled-components";

export default function FormThemeForm() {

    return(
        <Form onSubmit={(event) => {
            event.preventDefault();
          }}>            
            <Wrapper>
                <FontOptions />
                <ThemeSelection />
            </Wrapper>
            
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
`;