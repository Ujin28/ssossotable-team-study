async function auth() {
    await axios.post('/auth', {user_id: document.getElementById('user-id').value})
    location.href = '/main'
}