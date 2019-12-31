import { BehaviorSubject } from "rxjs";
import axios from "axios";

import { handleResponse } from "../helpers";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || 'null'));

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue () { return currentUserSubject.value }
};

async function login(username: any, password: any) {
  const res = await axios.post(process.env.REACT_APP_API_URL + "/auth/session-request", { 'system_api_key': process.env.REACT_APP_ADOPETS_API_KEY_NAME });
  const response = res.data;
  let accessKey = response.data.access_key;
  axios.post(process.env.REACT_APP_API_URL + "/auth/session-register", { "organization_user": { "email": username, "password": password } }, { headers: { "Authorization": "Bearer " + accessKey } })
    .then(handleResponse)
    .then(user => {
      //store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    });
}

function logout() {
  //remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}