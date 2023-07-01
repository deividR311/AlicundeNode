import * as dotenv from 'dotenv';
import Server from "./classes/server";

dotenv.config();
const server = new Server();

server.start( () => {
    console.log(`Server running in ${ process.env.PORT }`);
})

export default server;