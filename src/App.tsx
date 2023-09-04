import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { LayoutContainer } from "./components/Utils/LayoutContainer";
import { NoMatch } from "./pages/NoMatch";
import { LandingPage } from "./pages/LandingPage";
import { MarkdownEditor } from "./pages/MarkdownEditor";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NoMatch />}>
      <Route element={<LayoutContainer />}>
        <Route index element={<LandingPage />} />
        <Route path="/:id" element={<MarkdownEditor />} />
      </Route>
    </Route>
  )
);

export default function App() {
  const removePreloadFromBody = () => {
    const body = document.querySelector("#body");
    body?.classList.remove("preload");
  };

  useEffect(() => {
    window.addEventListener("load", removePreloadFromBody);

    return () => {
      window.removeEventListener("load", removePreloadFromBody);
    };
  }, []);

  return (
    <HelmetProvider>
      <RouterProvider router={appRouter} />
    </HelmetProvider>
  );
}
