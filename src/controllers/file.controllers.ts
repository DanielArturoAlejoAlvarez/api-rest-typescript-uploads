import File from '../models/File';
import {Request,Response} from "express";

import path from "path";
import fs from "fs-extra";

export const getFiles = async (req: Request,res: Response): Promise<Response> => {
    const files = await File.find();
    return res.json(files);
}

export const getFileById = async (req: Request,res: Response): Promise<Response> => {
    const {id} = req.params;
    const file = await File.findById(id);
    return res.json(file);
}

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

export const deleteFile = async (req: Request,res: Response): Promise<Response> => {
    const {id} = req.params;
    const file = await File.findByIdAndRemove(id);

    if(file) {
        await fs.unlink(path.resolve(file.url));
    }

    return res.json({
        msg: "File deleted successfully!",
        file
    });
}


export const updateFile = async (req: Request,res: Response): Promise<Response> => {
    const {id} = req.params;
    const {displayName,description,status} = req.body;
    const updFile = await File.findByIdAndUpdate(id, {displayName,description,status}, {new: true});

    return res.json({
        msg: "File updated successfully!",
        updFile
    });
}

