const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
}

let stopperTime = 0;
let stopperIsRunning = false;
setInterval( () => {
    if (!stopperIsRunning) {
        return;
    }
    stopperTime++;
    const seconds = padNumbers(stopperTime % 60);
    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
    const hours = padNumbers(Math.floor(stopperTime / 3600));
    const time = `${[hours, minutes, seconds].join(' : ')}`;
    const stopperFace = document.querySelector('.stopper');
    stopperFace.textContent = time;
}, 1000);


const flipCardFronts = document.querySelectorAll('.flip-card-inner');


flipCardFronts.forEach(card => {
    card.addEventListener('click', () => {
        if (stopperIsRunning){
           stopperIsRunning = false;
            stopperTime = 0;
        } else {
            stopperIsRunning = true;
        }     
    });
});



let imgArray = new Array();

imgArray[0] = new Image(50, 50);
imgArray[0].src = 'Images/0.jpg';

imgArray[1] = new Image(50, 50);
imgArray[1].src = 'Images/1.jpg';

imgArray[2] = new Image(50, 50);
imgArray[2].src = 'Images/2.jpg';

imgArray[3] = new Image(50, 50);
imgArray[3].src = 'Images/3.jpg';

imgArray[4] = new Image(50, 50);
imgArray[4].src = 'Images/4.jpg';

imgArray = imgArray.concat(imgArray);
console.log(imgArray);





function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
shuffle(imgArray);


const wert = imgArray[0];

document.querySelector('.imgNull1').innerHTML = imgArray[2];


