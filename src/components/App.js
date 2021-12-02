import Homepage from "./Homepage";
import StyledApp from "./styled/App.styled";
import GlobalStyle from "./styled/GlobalStyle";

const App = () => {
    return (
        <StyledApp>
            <GlobalStyle />
            <Homepage />
        </StyledApp>
    );
};

export default App;
