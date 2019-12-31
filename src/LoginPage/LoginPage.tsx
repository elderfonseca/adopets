import * as React from "react";

import { authenticationService } from "../services";
import WrappedLoginForm from "../components/LoginForm";

class LoginPage extends React.Component<{history: any}, {}> {
  constructor(props) {
    super(props);

    // redirect to home if already logged in]
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
          <WrappedLoginForm></WrappedLoginForm>
      </React.Fragment>
    )
  }
}

export { LoginPage };