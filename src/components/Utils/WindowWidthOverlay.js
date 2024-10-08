import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const CellPhoneSVG = () => {
    return (_jsx("div", { className: "grid place-content-center", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "mr-4 inline-block h-6 w-6 text-blue-400", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" }) }) }));
};
const DesktopSVG = () => {
    return (_jsx("div", { className: "grid place-content-center", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "mr-4 inline-block h-6 w-6 text-green-400", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" }) }) }));
};
const TabletSVG = () => {
    return (_jsx("div", { className: "grid place-content-center", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "mr-4 inline-block h-6 w-6 text-red-400", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" }) }) }));
};
export const WindowWidthOverlay = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (_jsxs("div", { className: "fixed bottom-4 left-4 flex items-center rounded-md bg-slate-200 px-4 py-2 font-mono text-2xl font-bold text-gray-400", children: [windowWidth <= 640 && _jsx(CellPhoneSVG, {}), windowWidth > 640 && windowWidth <= 1024 && _jsx(TabletSVG, {}), windowWidth > 1024 && _jsx(DesktopSVG, {}), _jsxs("span", { children: [": ", windowWidth, " px"] })] }));
};
//# sourceMappingURL=WindowWidthOverlay.js.map