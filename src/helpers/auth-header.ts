import { authenticationService } from "../services";

export function authHeader(){
  // return authorization header with jwt token
  const currentUser = authenticationService.currentUserValue;
  if (currentUser && currentUser.access_key) {
    return { Authorization: `Bearer ${currentUser.access_key}` };
  } else {
    return {};
  }
}