from flask import Flask,jsonify,request
from flask_cors import CORS
import os

from deepgram import (
    DeepgramClient,
    PrerecordedOptions,
    FileSource
)

app = Flask(__name__)
CORS(app)

AUDIO_FILE = "teste.mp3"

@app.route("/transform",methods=['POST'])
def predict():
    try:
        deepgram = DeepgramClient("KEY")

        AUDIO_SUBMITTED = request.get_json().get("path")

        with open(AUDIO_SUBMITTED, "rb") as file:
            buffer_data = file.read()

        payload: FileSource = {
            "buffer": buffer_data,
        }

        options = PrerecordedOptions(
            model="nova-2",
            smart_format=True,
        )

        response = deepgram.listen.prerecorded.v("1").transcribe_file(payload, options)

        return response.to_json(indent=4)

    except Exception as e:
        print(f"Exception: {e}")
    

if __name__=="__main__":
    app.run()