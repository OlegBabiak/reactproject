const baseUrl = 'https://jsonplaceholder.typicode.com'
const baseUrlSpacex = 'https://api.spacexdata.com/v3/'

const postsUrl = '/posts';
const launchesUrl = 'launches/';

const urls = {
    posts: {
        base: postsUrl,
        byId: (id) => `${postsUrl}/${id}`

    },
    launches: {
        base: launchesUrl,
        byFlight_number: (flight_number) => `${launchesUrl}/${flight_number}`
    }

}

export {
    baseUrl,
    baseUrlSpacex,
    urls
}