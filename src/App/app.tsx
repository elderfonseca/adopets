import * as React from "react";
import { Router, Route } from "react-router-dom";
import { Layout, Button } from "antd";

import { history } from "../helpers";
import { authenticationService } from "../services";
import { PrivateRoute } from "../components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";

import "../scss/app.scss";

const { Header, Content, Footer } = Layout;

export default class App extends React.Component<{}, { currentUser: any }> {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <Layout>
          <Header>
            <h1>Front-end Test</h1>
            {currentUser &&
              <Button type="primary">Logout</Button>
            }
          </Header>
          <Content>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}
