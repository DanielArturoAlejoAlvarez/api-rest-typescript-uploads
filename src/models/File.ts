import {Schema,model,Document} from "mongoose";

interface IFile extends Document{
    displayName: string;
    description: string;
    url: string;
    status: boolean;
}

const FileSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true,
        max: 512
    },
    dateReg: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: 'ACTIVE'
    }
});

export default model<IFile>('File', FileSchema);