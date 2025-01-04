import { Suspense } from "react";
import LoadingView from "./components/LoadingView";
import { ThemeProvider } from "./providers/ThemeProviders";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<LoadingView screen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
