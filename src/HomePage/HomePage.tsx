import * as React from "react";

import { authenticationService, petsService } from "../services";

class HomePage extends React.Component<{}, { currentUser: any, pets: any }> {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      pets: null
    };
  }

  componentDidMount(){ 
    petsService.getAll().then(pets => this.setState({ pets }));
  }

  render() {
    const { pets } = this.state;
    return (
      <React.Fragment>
        <h2>Pets List</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment Model</th>
              <th>Sex</th>
              <th>Size</th>
              <th>Age</th>
              <th>Specie</th>
              <th>Breed</th>
            </tr>
          </thead>
          {pets &&
            pets.map(pets => 
              <tr>
                <td key={pets.id}>{pets.id}</td>
                <td>{pets.name}</td>
                <td>{pets.price}</td>
                <td>{pets.status_key}</td>
                <td>{pets.payment_model_key}</td>
                <td>{pets.sex_key}</td>
                <td>{pets.size_key}</td>
                <td>{pets.age_key}</td>
                <td>{pets.size_key}</td>
                <td>{pets.age_key}</td>
                <td>{pets.specie.name}</td>
                <td>{pets.breed_primary.name}</td>
              </tr>
            )
          }
        </table>
      </React.Fragment>
    )
  }
}

export { HomePage };