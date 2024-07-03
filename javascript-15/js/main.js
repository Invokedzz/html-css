// Exemplo prático

function obtainuser (id) {
    return fetch (`https://reqres.in/api/users/${id}`).then(data => data.json()).catch(error => console.log(error));
}
async function showusername (id) {
    const user = await obtainuser(id);
    console.log(`The user name is: ${user.data.first_name}`);
}
showusername(5, 6, 7);