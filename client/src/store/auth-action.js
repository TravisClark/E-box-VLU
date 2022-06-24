import { authActions } from "./auth-slice";


const API_KEY = "http://localhost:5000/user/api/login";

export const loginRequest = (authData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
        const request = await fetch(API_KEY,{
            method: 'POST',
            body: JSON.stringify({username: authData.username, password: authData.password}),
            headers: {'Content-Type': 'application/json'}
        })
        if(!request.ok){
            return console.log('Error')
        }
        const responseData = await request.json();
         console.log(responseData)
    };
    try {
        await sendRequest();
        console.log(authData)
        await dispatch(authActions.loginHandler(authData))
        // console.log('Authenticate successfully!')
    } catch (error) {
        alert(error)
    }
  };
};
