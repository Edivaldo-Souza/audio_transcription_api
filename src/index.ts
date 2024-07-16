import express, {Request,Response} from "express"
import transcribeRouter from "./routes/transcribe"

const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello World")
})

app.use("/",transcribeRouter)

app.listen(port,()=>{
    console.log(`Servidor ouvindo na porta ${port}`)
})

/*import axios from "axios";
import FormData from "form-data";
import fs from "fs"

const transcribedAudio = async (filePath:string,apiKey:string)=>{
    const url = "https://api.openai.com/v1/audio/transcriptions"
    const form = new FormData()
    form.append("file",fs.createReadStream(filePath))
    form.append("model","whisper-1")

        try{
            const response = await axios.post(url,form,{
                headers:{
                    "Authorization": `Bearer ${apiKey}`,
                    ...form.getHeaders(),
                },
    
            })
            console.log("Transcricao:",response.data)
        }
        catch(error: any){
            console.log(error)
        }
}

const filePath = "C:/Users/souza/OneDrive/Documentos/UFERSA/Disciplinas_2024_1/Sistemas Multimídias/repos/api_teste/src/assets/teste.mp3"
const apiKey = ""

transcribedAudio(filePath,apiKey)*/