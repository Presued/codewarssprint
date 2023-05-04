let userData = {};

export async function createAcc(createdUser) {
    const res = await fetch(`https://katacode.azurewebsites.net/user/adduser`, {
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

export async function login(loginUser) {
    const res = await fetch(`https://katacode.azurewebsites.net/user/login`, {
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

async function GetUserByUsername(Username){
    const promise = await fetch(`https://dev.codewars.com/#introduction/User/GetUserByUsername/${Username}`);
    const data = await promise.json();
    console.log(data);
    return data;

}








export { createAcc, login, GetUserByUsername }