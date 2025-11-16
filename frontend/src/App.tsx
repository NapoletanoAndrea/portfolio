import { lazy, Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { AppProvider } from "./AppContext";
import { DebugThemeToggle } from "./features/theme/DebugThemeToggle";
import DebugLanguageToggle from "./features/lang/DebugLanguageToggle";

// Component imports
import { DebugBreakpoints } from "./features/responsiveness/DebugBreakpoints";
import LoadingPage from "./features/loading/LoadingPage";
import { useTheme } from "./features/theme/useTheme";
import NotFound from "./features/404/NotFound";
import HomePage from "./features/home/HomePage";
import { HOME_PATH, PROJECTS_PATH } from "./constants";
import CalendarProject from "./features/projects/CalendarProject";

const LoginPage = lazy(() => import("./features/auth/login/LoginPage"));
const StyleSheetPage = lazy(
  () => import("./features/stylesheet/StyleSheetPage"),
);
const TestPage = lazy(() => import("./testing/TestPage"));

export default function App() {
  useTheme();

  return (
    <>
      <div className="fixed right-5 bottom-5 z-10 flex flex-col items-end gap-3">
        <DebugBreakpoints />
        <DebugLanguageToggle />
        <DebugThemeToggle />
      </div>
      <HashRouter>
        <AppProvider>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path={HOME_PATH} element={<HomePage />}></Route>
              <Route
                path={`${PROJECTS_PATH}/calendar`}
                element={<CalendarProject />}
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/styles" element={<StyleSheetPage />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
              <Route path="/loading" element={<LoadingPage />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </Suspense>
        </AppProvider>
      </HashRouter>
    </>
  );
}
