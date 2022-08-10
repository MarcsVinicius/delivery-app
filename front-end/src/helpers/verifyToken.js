import jwtDecode from 'jwt-decode';
import { THOUSAND } from './constants';

const verifyToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    const date = new Date();

    if (decoded.exp * THOUSAND < date.getTime()) {
      return false;
    }

    return decoded;
  } catch (error) {
    return false;
  }
};

export default verifyToken;
