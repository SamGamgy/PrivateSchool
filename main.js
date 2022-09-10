// nav-bar mobile button
function navBarMobile() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }


let cardData = [
  {dataOpen:1,
  imgSrc:'assets/kids.jpg',
  title:'International Focus',
  },
  {dataOpen:2,
  imgSrc:'',
  title:'Performing Arts',
  },
  {dataOpen:3,
  imgSrc:'',
  title:'Character Building',
  },
  {dataOpen:4,
  imgSrc:'',
  title:'Academic Studies',
  },
]

// POP up creater
const popUpParent= document.querySelector('.pop-up-modals-container');
console.log(popUpParent)
function createPopUp(id) {
    
cardData
.map(({ dataOpen, imgSrc, title}) => { 
        const newContent = 
        `
        <div id='${dataOpen}' class="modal" data-animation="slideInOutTop">
            <div class="modal-dialog">
                <header class="modal-header">
                    <h3>${title}</h3>
                    <i class="fas fa-times" data-close onclick= "removeIsVisible('${dataOpen}')"></i>
                </header>
                <div class="modal-body">
                    <div class="img-wrapper">
                        <img src=${imgSrc} alt="card image">
                    </div>
                </div>
            </div>
        </div>`;
        console.log(newContent)
            if (dataOpen == id)
            popUpParent.insertAdjacentHTML("beforeend", newContent);})
            
};
const cards = document.querySelectorAll('.feature-card');
console.log(cards)
for (box of cards){
box.addEventListener('click', function() {
  const dataOpen = this.dataset.open
  createPopUp(dataOpen);
  console.log(dataOpen)
        
    }) ;
}

