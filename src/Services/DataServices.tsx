import { Modal } from 'react-bootstrap';


let userData = {};





export async function createAcc(createdUser: { Id: number; Username: string; Password: string; IsAdmin: boolean }) {

    const codewarsResponse = await fetch(`https://www.codewars.com/api/v1/users/${createdUser.Username}`);
    if (codewarsResponse.status != 200) {
        throw new Error('Username does not exist');
    }
    else{
        const res = await fetch('https://katacode.azurewebsites.net/user/adduser', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(createdUser)
        });
        if (!res.ok) {
            const message = `An Error has Occured ${res.status}`;
            throw new Error(message);
        }
        let data = await res.json();
        return data;
    }
    
}



export async function login(loginUser: { Username: string; Password: string; }) {
    const res = await fetch('https://katacode.azurewebsites.net/user/login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }

    let data = await res.json();
    return data;

}
   

