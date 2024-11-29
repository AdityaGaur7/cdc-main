import {jwtDecode} from 'jwt-decode';

const decodeTokenAndGetRole = () => {
  try {
    // Get the token from localStorage
    const localdata = localStorage.getItem("user");
    if (!localdata) {
      throw new Error('No user data found');
    }

    const user = JSON.parse(localdata);
    const token = user.token;

    if (!token) {
      throw new Error('No token found in user data');
    }

    // Decode the JWT token
    const decoded = jwtDecode(token);
    console.log('Decoded Token:', decoded);

    // Return the decoded token (or just the role if you need only the role)
    return decoded;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

export default decodeTokenAndGetRole;
