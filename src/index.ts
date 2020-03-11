import app from "./app";

import {Connection} from "./database";

function main() {
    Connection();
    app.listen(app.get('port'), ()=>{
        console.log(`Server running in port: http://127.0.0.1:${app.get('port')}`);
    });
}

main();