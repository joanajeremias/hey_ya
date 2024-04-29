function render (path = 'https://meme-api.com/gimme/50'){
    return showMemes(path);
}

async function fetchMemes(path) {
    const api = path;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok) {
        throw new Error(body.message); // throwing inside async rejects the returned promise
    }
    return body;
}
async function showMemes(path) {
    try {
        const user = await fetchMemes(path);
        /* user.data[0].attributes.canonicalTitle.array.forEach(element => {
        }); */
      return user;
    } catch (err) {
        console.log(err.message);
    }
}
export default {render};