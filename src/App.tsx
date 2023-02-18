import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import MainPage from "./components/pages/MainPage/MainPage";
import MyResumePage from "./components/pages/MyResumePage/MyResumePage";
import MyWorkPage from "./components/pages/MyWorkPage/MyWorkPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/templates/RootLayout";
import NavigationProvider from "./context/NavigationContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="myresume" element={<MyResumePage />} />
      <Route path="mywork" element={<MyWorkPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <NavigationProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </NavigationProvider>
    </>
  );
}

export default App;
