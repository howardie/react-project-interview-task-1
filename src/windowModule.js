

import React, { useEffect, useState } from 'react';
import './App.css';

const input = "Hello, here is my voice"




export const WindowModule = ({ModalFunction}) => {
    const [finalTranscript, setFinalTranscript] = useState()
    useEffect (() => {
    var recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    var final_transcript = '';
    var interim_transcript = '';
    recognition.onstart = function() {  }
    recognition.onerror = function(event) {  }
    recognition.onend = function() {  }
    recognition.onresult = function(event) {
        console.log(event)
      
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        setFinalTranscript(final_transcript)
      };

    recognition.start();

    },[])
        return (
            <div className="App">
                <div className="app-content">
                    <h1>
                        Speak now...
                    </h1>
              <div> {finalTranscript}</div> 
                    <button onClick={ModalFunction}>Done</button>
                </div>
            </div>
        );
    }



