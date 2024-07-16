import {Router,Request,Response} from "express"
import fs from "fs"
import OpenAI from "openai";

const router = Router();
const openai = new OpenAI({apiKey:""});

async function main(){
    const transcription = await openai.audio.transcriptions.create({
        file:fs.createReadStream("../assets/02.m4a"),
        model:"whisper-1"
    })
    console.log(transcription.text)
    return transcription.text
}

router.post("/transform",(req:Request,res:Response)=>{
    var text
    main().then((response)=>{
        text = response
        console.log("OK")
    })
    .catch(()=>{
        console.log("Error ")
    })
    res.json({ message:text})
})

export default router
