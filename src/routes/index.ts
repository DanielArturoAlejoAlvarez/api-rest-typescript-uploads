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