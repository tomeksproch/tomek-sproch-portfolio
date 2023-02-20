import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import MainPage from "./components/pages/MainPage/MainPage";
import MyResumePage from "./components/pages/MyResumePage/MyResumePage";
import MyProjectsPage from "./components/pages/MyProjectsPage/MyProjectsPage";
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
      <Route path="myprojects" element={<MyProjectsPage />} />
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
