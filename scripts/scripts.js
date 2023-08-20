let speech = new SpeechSynthesisUtterance();


let voiceSelect = document.querySelector("select");



let voices = [];
const btn = document.getElementById('load');
const options = document.getElementById('voices');
const hasSynth = 'speechSynthesis' in window;

if (hasSynth) {
  voices = speechSynthesis.getVoices();
  
  speechSynthesis.addEventListener('voiceschanged', () => {
    voices = speechSynthesis.getVoices();
  });
}

/* btn.addEventListener('click', () => {*/
function onLoad()
{
  const initOpt = document.createElement('option');
  voices = speechSynthesis.getVoices();

  /*if (!voices.length && hasSynth) {
    voices = speechSynthesis.getVoices()
  }
  else{
    alert(hasSynth + "no voices available" + voices.length);
  }*/
 
  initOpt.append(document.createTextNode('-- select voice --'));
  options.append(initOpt);

  voices.forEach(voice => {
    const option = document.createElement('option');
 
    option.value = voice.name;
    option.append(document.createTextNode(`${voice.lang} - ${voice.name}`))
    options.append(option);
  })
  
  options.style.display = 'inline';
}

/*options.addEventListener('change', (evt) => {
  if (hasSynth) {
    const utterance = new SpeechSynthesisUtterance();

    
    utterance.text= document.querySelector("textarea").value;
    utterance.voice = voices.find(voice => voice.name === evt.target.value);
    
    speechSynthesis.speak(utterance);
  }
  
});*/

btn.addEventListener('click', () => {
    if (hasSynth) {
      const utterance = new SpeechSynthesisUtterance();
  
      
      utterance.text= document.querySelector("textarea").value;
      utterance.voice = voices.find(voice => voice.name === options.value);
      
      speechSynthesis.speak(utterance);
    }
    
  });

/*
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new option(voice.name, i)));
};

options.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
    speech.text = document.querySelector("textarea").value;
});

document.querySelector("button").addEventListener("click", () =>{

     if (hasSynth) {
    const utterance = new SpeechSynthesisUtterance();

    
    utterance.text= document.querySelector("textarea").value;
    utterance.voice = voices.find(voice => voice.name === evt.target.value);
    
    speechSynthesis.speak(utterance);
  
});
  /*
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});*/