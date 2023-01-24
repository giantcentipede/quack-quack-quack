function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/euy4DYdsI/model.json',modelReady);


}

function modelReady() {
    classifier.classify(gotResults);
    
}

function gotResults(error,results) {
    if (error) {console.error(error)} 
    else {
console.log(results);
random_number_r=Math.floor(Math.random() * 255 ) + 1;
random_number_g=Math.floor(Math.random() * 255 ) + 1;
random_number_b=Math.floor(Math.random() * 255 ) + 1;
document.getElementById("times_detected").innerHTML="I👽 can hear - "+ results[0].label;
        
document.getElementById("audio_played").innerHTML="👽 accuracy "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("audio_played").style.color="rgb("+random_number_r+","+ random_number_g +","+ random_number_b+")";
document.getElementById("times_detected").style.color="rgb("+random_number_r+","+ random_number_g +","+ random_number_b+")";

    }
}