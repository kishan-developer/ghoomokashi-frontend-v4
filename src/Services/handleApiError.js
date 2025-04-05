import { toast } from "react-toastify"; // Importing toast for displaying error notifications
import Cookies from "js-cookie"; // Importing js-cookie for handling cookies

export function handleApiError(error, errorFrom) {
    // A Console For DeveLoper
    console.log(`Error From ------>${errorFrom} API : Error ------> ${error}`);
    if (error.response) {
        // When the server responds with an error status code
        return error.response.data.message || "Server error occurred.";
    } else if (error.request) {
        // When the request was made but no response was received
        return "No response from server. Please try again later.";
    } else {
        // Error occurred setting up the request
        return error.message || "An unexpected error occurred.";
    }
}
