export class GithubUsers {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
            .then(data => data.json())
            .then((data) => {
                const { login, name, public_repos, followers, received_events_url } = data
                return { login, name, public_repos, followers, received_events_url }
            })
    }
}