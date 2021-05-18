const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 2021;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_URL = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.wuq0u.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const DATABASE = {
    url: DATABASE_URL,
    name: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
}

const config = {
    server: SERVER,
    database: DATABASE
}

export default config;