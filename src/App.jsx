
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

/*import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"; // Asegúrate de importar correctamente tu store

// Importar páginas
import SignIn from './pages/LogInPage';
import SignUp from './pages/RegisterPage';
import BoardList from './pages/BoardPages/BoardListPage';
import KanbanBoard from './pages/BoardPages/KanbanBoardPage';
import MainLayout from "./layouts/MainLayout";

// Importar componentes de ruta
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       
        <Route
          path="/"
          element={<PublicRoute element={<SignIn />} />}
        />
        <Route
          path="/SignUp"
          element={<PublicRoute element={<SignUp />} />}
        />

      
        <Route
          path="/BoardList"
          element={<ProtectedRoute element={<BoardList />} />}
        />
        <Route
          path="/KanbanBoard/:id"
          element={<ProtectedRoute element={<KanbanBoard />} />}
        />
      </>
    )
  );

  return (
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </Provider>
  );
}

export default App;*/

/*import React, { createContext, useContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// Importar mis páginas 
import SignIn from './pages/LogInPage';
import SignUp from './pages/RegisterPage';
import BoardList from './pages/BoardPages/BoardListPage';
import KanbanBoard from './pages/BoardPages/KanbanBoardPage';
import MainLayout from "./layouts/MainLayout";

// Contexto de autenticación
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Intentar recuperar el token del almacenamiento local o devolver null si no existe
    return localStorage.getItem("token") || null;
  });

  const login = (token) => {
    setAuth(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto de autenticación
const useAuth = () => useContext(AuthContext);

// Componente de ruta protegida
const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  return auth ? element : <Navigate to="/" />;
};

// Aplicación principal con rutas
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        
       
        <Route
          path="/BoardList"
          element={<ProtectedRoute element={<BoardList />} />}
        />
        <Route
          path="/KanbanBoard/:id"
          element={<ProtectedRoute element={<KanbanBoard />} />}
        />
      </>
    )
  );

  return (
    <AuthProvider>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </AuthProvider>
  );
}

export default App;

/*import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//importar mis paginas 
import SignIn from './pages/LogInPage'
import SignUp from './pages/RegisterPage'
import BoardList from './pages/BoardPages/BoardListPage'
import KanbanBoard from './pages/BoardPages/KanbanBoardPage'
import MainLayout from "./layouts/MainLayout";


//estructurar mi rutas mas adelante hacer rutas protegidas
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SignIn />} />,
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/KanbanBoard/:id" element={<KanbanBoard />} />
      </>
    )
  );


  return (
    <>
    <MainLayout>
      <RouterProvider router={router} />
      </MainLayout>
    </>
  );
}

export default App;
*/