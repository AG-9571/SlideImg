let counter = 0;

const Switch = () => {
    const scroll = document.querySelectorAll("div.bg-fnt div img");
    const title = document.querySelectorAll("div.content h1");
    // switch
    switch (counter) {
        case 0:
        title[0].innerText = "SUMMER";
        scroll[0].src = "./src/img/IMG2.png";
        break;
        case 1:
        title[0].innerText = "MANUEL";
        scroll[0].src = "./src/img/IMG7.png";
        break;
        case 2:
        title[0].innerText = "SPRING";
        scroll[0].src = "./src/img/IMG6.png";
        break;
        case 3:
        title[0].innerText = "WINTER";
        scroll[0].src = "./src/img/IMG5.png";
        break;
        case 4:
        title[0].innerText = "AUTUMN";
        scroll[0].src = "./src/img/IMG6.png";
        break;
        default:
        title[0].innerText = "SUMMER";
        scroll[0].src = "./src/img/IMG2.png";
        break;
    }
};

const click = (element) => {
        const scroll = document.querySelectorAll("div.bg-fnt div img");
        const title = document.querySelectorAll("div.content h1");
        element.addEventListener("click", (event) => {         
                if (element.innerText === ">" || event.key === "ArrowRight") {
                    counter++;
                    if (counter === 5) {
                        counter = 0;
                    }
                } else if (element.innerText === "<" || event.key === "ArrowLeft") {
                    counter--;
                    if (counter === -1) {
                        counter = 4;
                    }
                }
                Switch();

                scroll[0].classList.add("fade-in");
                setTimeout(() => {
                        scroll[0].classList.remove("fade-in");
                }, 500);
        });
};

const weel = () => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        counter++;
        if (counter === 5) {
          counter = 0;
        }
      } else {
        counter--;
        if (counter === -1) {
          counter = 4;
        }
      }      
      Switch();
      
      scroll[0].classList.add("transition");
      setTimeout(() => {
        scroll[0].classList.remove("transition");
      }, 500);
    });
};

const scroolToleft = () => {  
    const btnR = document.querySelectorAll(".rigth button");
    const btnL = document.querySelectorAll(".left button");  
    click(btnR[0]);
    click(btnL[0] );  
    weel();  
};

scroolToleft();


