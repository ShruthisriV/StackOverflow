import express from "express"
import { Askquestion,getallquestion,deletequestion,votequestion } from "../controller/Question.js"

import auth from "../middleware/auth.js"
import { getallquestions } from "../../client/src/api/index.js";

const router=express.Router();

router.post('/Ask',auth,Askquestion);
router.get('/get',getallquestions);


export default router;