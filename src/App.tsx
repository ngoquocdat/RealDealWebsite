import React from "react";
import "./App.css";
import MainContainer from "./Components/main";
import { ThemeProvider } from "@mui/material/styles";
import ViewportProvider from "./contexts/ViewportContext";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ViewportProvider>
          <MainContainer />
        </ViewportProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
