const region = 'localhost';
const endpoint = 'http://localhost:8000';
const options = (process.env.IS_OFFLINE) ? { region, endpoint } : {};

export { options as default };
