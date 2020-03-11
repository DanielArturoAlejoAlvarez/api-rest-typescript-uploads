# API REST (typescript)
## Description

This repository is a Application software with NODEjs, Express, MongoDB,etc this application contains an API created with TYPESCRIPT.

## Installation
Using Typescript, Express, Mongoose, Multer,etc preferably.

## DataBase
Using MongoDB preferably.

## Apps
Using Postman, Insomnia,etc to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/api-rest-typescript-uploads.git [NAME APP] 

$ npm install

$ npm run dev
```
Follow the following steps and you're good to go! Important:


![alt text](https://media1.giphy.com/media/RF5mb1srv4ALu/source.gif)


## Coding

### Routes

```typescript
...
import {Router} from "express";

import {getFiles, getFileById, saveFile, updateFile, deleteFile} from "../controllers/file.controllers";

import upload from '../libs/multer';

const router = Router();

router.route('/files')
    .post(upload.single('image'), saveFile)
    .get(getFiles);

router.route('/files/:id')
    .get(getFileById)
    .delete(deleteFile)
    .put(updateFile)

export default router;
...
```

### Server

```typescript
...
import {connect} from "mongoose";

export async function Connection() {
    await connect("mongodb://127.0.0.1:27017/[your database]", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log("DB connect!");
}
...
```

### Controllers


```typescript
...
 export const saveFile = async (req:Request, res: Response): Promise<Response> => {

    console.log(req.body);

    console.log(req.file);

    const {displayName,description,status} = req.body;

    const newFile = new File({
        displayName,
        description,
        status
    });

    newFile.url = req.file.path;

    await newFile.save();

    return res.json({
        msg: "File saved successfully!",
        newFile
    });
}
...

```

### Model

```typescript
...
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
...
```



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/api-rest-typescript-uploads. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
