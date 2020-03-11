import multer from "multer";
import {v4 as uuid4} from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb)=>{
        cb(null, uuid4() + path.extname(file.originalname));
    }
});

export default multer({storage});