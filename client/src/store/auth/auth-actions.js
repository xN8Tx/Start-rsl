import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../api/services/auth-service';

const authRegistration = createAsyncThunk(
  '@@auth/registration',
  async (title) => {
    const { email, password } = title;
    const res = await AuthService.registration(email, password);
    const token = res.data.message;
    
    localStorage.setItem('access_token', token);
    
    return token;
  }
); 

const authLogin = createAsyncThunk(
  '@@auth/login',
  async (title) => {
    const { email, password } = title;
    const res = await AuthService.login(email, password);
    const token = res.data.message;
    
    
    localStorage.setItem('access_token', token);
    
    return token;
  }
); 

const authLogout = createAsyncThunk(
  '@@auth/logout',
  async () => {
    const res = await AuthService.logout();
    const msg = res.data.message;
    
    localStorage.removeItem('access_token');
    
    return msg;
  }
); 

export { authRegistration, authLogin, authLogout };