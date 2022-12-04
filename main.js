// nav-bar mobile button
function navBarMobile() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }

function openFloat() {
  let float = document.getElementById('float')
  console.log(float)
  if (!float.classList.contains('open')) {
    float.classList.add('open')}
    else{float.classList.remove('open')}
}

let cardData = [
  {dataOpen:1,
  imgSrc: [
  './assets/india.jpg',
  './assets/hawaii.jpg',
  './assets/cultural-jewelry.jpg',
  './assets/girls-cooking.jpg',
  './assets/OKTOBERFEST-JOHANNES.JPG',
  './assets/flags.JPG',
  ],
  imgDescription: [
    'Indian Cultural Lesson',
    'Hawaiian Day',
    'Cultural Jewelry on Field Trip',
    'Cooking cultural cuisine',
    'Celebrating OktoberFest',
    'International Flags taught to the children',
  ],
  title:'International Focus',
  color: 'rgb(247 201 17 / 97%)',
  icon: "fa-solid fa-earth-asia"
  },
  {dataOpen:2,
    imgSrc: [
      './assets/bell-plates-german-background.JPG',
      './assets/hawaii-music.jpg',
      './assets/tonebars2.jpg',
      './assets/TONE-BARS-REGULAR.JPG',
      
      ],
      imgDescription: [
        'Bell Plates performed for OktoberFest',
        'Playing Hawaiian Music',
        'Tone Bells used to teach Music Fundamentals',
        'Tone Bars used by Elementary to play songs',
        
      ],
      isVideo:true,
      video: [
        '<iframe width="800" height="448" src="https://www.youtube.com/embed/_oG7uvVdSH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="800" height="448" src="https://www.youtube-nocookie.com/embed/5o-i-R2pyTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      ],
      vidDescription: [
        'St. Patricks Day Bell Plate Performance',
        'Oktoberfest Bell Plate Performance'
      ],
  title:'Performing Arts',
  color: 'rgb(2 170 185 / 97%)',
  icon: "fa-solid fa-masks-theater"
  },
  {dataOpen:3,
    imgSrc: [
      './assets/trash-clean-up.jpg',
      './assets/friendship.jpg',
      './assets/american-flag.JPG'
      ],
      imgDescription: [
        'Cleaning up Local Trash',
        'Developing friendships',
        'Celebrating the American Flag'
      ],
      isVideo:true,
      video: [
        '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmontessorilabschool%2Fvideos%2F1772095359735280%2F&show_text=false&width=560&t=0" width="800" height="448" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
      ],
      vidDescription: [
        'Peace Day 2016'
      ],
  title:'Character Building',
  color: 'rgb(79 202 70 / 97%)',
  icon: "fa-solid fa-people-group"
  },
  {dataOpen:4,
    imgSrc: [
      './assets/kids-with-letters.jpg',
      './assets/SOLAR-SYSTEM.JPG',
      './assets/girl-counting.jpg',
      './assets/girl-counting-two.jpg',
      './assets/boy-geography.jpg',
      './assets/writing.jpg',
      ],
      imgDescription: [
        'Learning cursive letters together',
        'Solar System Learning Tools',
        'Learning Early Math with Beads',
        'Counting with Beads',
        'Learning Geography',
        'Practicing Math & Writing'
      ],
  title:'Academic Studies',
  color: 'rgb(247 59 75 / 97%)',
  icon: "fa-solid fa-graduation-cap"
  },
]

// POP up creater
function imageGrab(id) {
  let img=[]
  for (let i=0; i < cardData[id-1].imgSrc.length; i++) {
    img.push( 
      `
      <div class='mySlides'>
        <img src='${cardData[id - 1].imgSrc[i]}' alt="card image ${id}"></img>
        <div class='img-caption'> ${cardData[id-1].imgDescription[i]}</div>
      </div>
      ` );
  };
  return img.join('');
}
function videoGrab(id) {
  let vid=[]
  for (let i=0; i < cardData[id-1].video.length; i++) {
    vid.push( 
      `
      <div class='mySlides'>
        ${cardData[id - 1].video[i]}
        <div class='img-caption'> ${cardData[id-1].vidDescription[i]}</div>
      </div>
      ` );
  };
  return vid.join('');
}

const popUpParent= document.querySelector('.pop-up-modals-container');
function createPopUp(id) {
    


cardData
.map(({ dataOpen, title, color, icon, isVideo }) => { 
        const newContent = 
        `
        <div id='${dataOpen}' class="modal" data-animation="zoomInOut">
            <div class="modal-dialog" style='background:${color}'>
                <header class="modal-header">
                    <i style='color:white;'class='${icon}'></i>
                    <h3 style='margin-right:auto;'>${title}</h3>
                    <i class="fa-solid fa-circle-xmark" data-close onclick= "removeIsVisible(${dataOpen})"></i>
                </header>
                <div class="modal-body">
                    <div class="img-wrapper">
                        ${imageGrab(dataOpen)}
                        ${ isVideo ? videoGrab(dataOpen): ''}
                    </div>
                    <div class='btn-container'>
                      <button class='slide-btn slide-left' onclick='plusDivs(-1)'><i class="fa-solid fa-circle-chevron-left"></i></button>
                      <button class='slide-btn slide-right' onclick='plusDivs(1)'><i class="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
            if (dataOpen == id)
            popUpParent.insertAdjacentHTML("beforeend", newContent);})
            
};

var slideIndex = 1;


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

const cards = document.querySelectorAll('.feature-card');
for (box of cards){
box.addEventListener('click', function() {
  // if ()
  const dataOpen = this.dataset.open
  createPopUp(dataOpen);
  showDivs(slideIndex);
        
    }) ;
}

function removeIsVisible(id) {
  let elm = document.getElementById(id)
  elm.remove()
}