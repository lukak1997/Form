import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import CardComponent from "./components/CardComponent";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <CardComponent />
    </ThemeProvider>
  );
}

export default App;
