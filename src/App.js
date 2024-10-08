import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LayoutContainer } from "./components/Utils/LayoutContainer";
import { NoMatch } from "./pages/NoMatch";
import { LandingPage } from "./pages/LandingPage";
import { MarkdownEditor } from "./pages/MarkdownEditor";
const appRouter = createBrowserRouter(createRoutesFromElements(_jsx(Route, { errorElement: _jsx(NoMatch, {}), children: _jsxs(Route, { element: _jsx(LayoutContainer, {}), children: [_jsx(Route, { index: true, element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/:id", element: _jsx(MarkdownEditor, {}) })] }) })));
export default function App() {
    return (_jsx(HelmetProvider, { children: _jsx(RouterProvider, { router: appRouter }) }));
}
//# sourceMappingURL=App.js.map