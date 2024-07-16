"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transcribe_1 = __importDefault(require("./routes/transcribe"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use("/", transcribe_1.default);
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
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
