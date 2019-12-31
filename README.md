# Adopets Front-end Test

The project was created with a login system that requests the _API_ that authenticates the user.
#### Installation

The following steps assume that _NPM_ is supposed to be installed on the machine.
If not, see the link [`https://www.npmjs.com/get-npm`](https://www.npmjs.com/get-npm).
If you use _Yarn_ feel free to use the equivalent commands.
1. Clone repository from [`https://github.com/elderfonseca/adopets.git`](https://github.com/elderfonseca/adopets.git).
2. Run `npm install` in the _root folder_.
3. Create an `.env` file in the _root folder_ with the following content:
```
REACT_APP_ADOPETS_API_KEY_NAME="YourKey"
REACT_APP_API_URL=https://test.adopets.app/v1
```
4. Run `npm start` in the _root folder_.

The browser will automatically open at the address [`http://localhost:3000/`](http://localhost:3000/) in the _Login_ path.