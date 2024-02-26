import { redirect } from 'react-router-dom';

// Wrapper function for fetch that handles putting token in the header and token expiration 
export const fetchWithToken = async (url, options = {}) => {
    try {
        //get the token from localStorage
        const token = localStorage.getItem('token');

        // Perform the with token request in the headers
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
            },
        });

        // If the response status is 401 (Unauthorized), redirect the user to the logout page
        if (response.status === 401) {
            return redirect('/login')
        }

        // If the response status is not 401, return the original response
        return response;

    } catch (error) {
        // Handle other errors as needed
        console.error('Error during fetch:', error);
        throw error;
    }
}
