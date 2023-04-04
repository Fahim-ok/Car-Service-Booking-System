import express from "express";
import Ho from "../models/Ho.js";
import { createError } from "../utils/error.js";
import { createH, deleteH, getAllH, getH, updateH } from "../controllers/hone.js";

const router =  express.Router();
//createoperations

router.post("/",createH);


//update

router.put("/:id",updateH);


//delete

router.delete("/:id", deleteH);


//get by id

router.get("/:id",getH);

//get by all

router.get("/",getAllH);


export default router;