import { lazy, Suspense } from "react";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./useApp";
import { DebugThemeToggle } from "./features/theme/DebugThemeToggle";
import DebugLanguageToggle from "./features/lang/DebugLanguageToggle";

// Component imports
import { DebugBreakpoints } from "./features/responsiveness/DebugBreakpoints";
import LoadingPage from "./features/loading/LoadingPage";
import { useTheme } from "./features/theme/useTheme";
import NotFound from "./features/404/NotFound";

const HomePage = lazy(() => import("./features/home/HomePage"));
const LoginPage = lazy(() => import("./features/auth/login/LoginPage"));
const StyleSheetPage = lazy(() => import("./styles/StyleSheetPage"));
const TestPage = lazy(() => import("./testing/TestPage"));

export default function App() {
  useTheme();

  return (
    <>
      <div className="fixed right-5 bottom-5 flex flex-col items-end gap-3">
        <DebugBreakpoints />
        <DebugLanguageToggle />
        <DebugThemeToggle />
      </div>
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/styles" element={<StyleSheetPage />}></Route>
              <Route path="/test" element={<TestPage />}></Route>
              <Route path="/loading" element={<LoadingPage />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}
