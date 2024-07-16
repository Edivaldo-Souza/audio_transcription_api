"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const openai_1 = __importDefault(require("openai"));
const router = (0, express_1.Router)();
const openai = new openai_1.default({ apiKey: "" });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const transcription = yield openai.audio.transcriptions.create({
            file: fs_1.default.createReadStream("../assets/02.m4a"),
            model: "whisper-1"
        });
        console.log(transcription.text);
        return transcription.text;
    });
}
router.post("/transform", (req, res) => {
    var text;
    main().then((response) => {
        text = response;
        console.log("OK");
    })
        .catch(() => {
        console.log("Error ");
    });
    res.json({ message: text });
});
exports.default = router;
