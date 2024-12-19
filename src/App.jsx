
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/LogInPage";
import SignUp from "./pages/RegisterPage";
import BoardList from "./pages/BoardPages/BoardListPage";
import KanbanBoard from "./pages/BoardPages/KanbanBoardPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Rutas públicas */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/SignUp"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        {/* Rutas protegidas */}
        <Route
          path="/BoardList"
          element={
            <ProtectedRoute>
              <BoardList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/KanbanBoard/:id"
          element={
            <ProtectedRoute>
              <KanbanBoard />
            </ProtectedRoute>
          }
        />
      </>
    )
  );

  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
