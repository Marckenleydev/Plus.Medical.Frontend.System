import { baseUrl } from "../utils/requestutils";



export const signOut = async () => {
    const response = await fetch(`${baseUrl}/users/patients/logout`, {
      credentials: "include",
      method: "POST",
    });
  
    if (!response.ok) {
      throw new Error("Error during sign out");
    }
  };



