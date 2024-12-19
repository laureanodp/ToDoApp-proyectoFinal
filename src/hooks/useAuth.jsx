import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, logout } from '../store/slice/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.user);

  const login = async (email, password) => {
    const userData = { email, password };
    await dispatch(loginUser(userData));
    console.log(token);
  };

  const register = async (name, email, password) => {
    const userData = { name, email, password };
    await dispatch(registerUser(userData));
  };

  
  const logoutUser = () => {
    dispatch(logout());
  };
  return {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout: logoutUser,
 
   
  };
};
