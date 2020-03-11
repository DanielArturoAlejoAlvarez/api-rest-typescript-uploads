import {connect} from "mongoose";

export async function Connection() {
    await connect("mongodb://127.0.0.1:27017/apirestfile_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log("DB connect!");
}