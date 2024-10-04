/**
 * The top-level component of the application.
 *
 * This component sets up the react-router-dom and react-query contexts for the
 * entire application.
 *
 * It renders a `Layout` component, which renders a `ErrorBoundary` component,
 * which renders a `Routes` component, which renders a `Route` component for the
 * root path and a `Route` component for the details path.
 *
 * The `Layout` component renders a `ChakraProvider` component, which renders the
 * theme.
 *
 * The `ErrorBoundary` component catches any errors that occur in the
 * application and renders an error message.
 *
 * The `Routes` component renders the correct route based on the current path.
 *
 * The `Route` components render the correct component for each path.
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/layout/PageLayout";
import "@fontsource/monaspace-krypton/600.css";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import { fonts, colors } from "./utils";
import "@fontsource/titillium-web";

const queryClient = new QueryClient();
const theme = extendTheme({ fonts, colors });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider theme={theme}>
          <Layout>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route
                  path="/character-details/:id"
                  element={<DetailsPage />}
                />
              </Routes>
            </ErrorBoundary>
          </Layout>
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
