var navMenu=document.querySelectorAll(".nav-items a");

for(let i=0;i<navMenu.length;i++){

    navMenu[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        // console.log(targetSectionID);

        var targetSection=document.getElementById(targetSectionID);
        // console.log(targetSection);

        var interval=setInterval(function(){
            let targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return ;
            }
            window.scrollBy(0,50);
        },20);
    })
}

//for skills display
var skillBox=document.getElementById("skill-container");
var progressBars=document.querySelectorAll(".skill-progress>div");

function fillBars(){
   for(let bar of progressBars){
        let maxWidth=bar.getAttribute("data-value");
        let currWidth=0;
        let interval=setInterval(function(){
            if(currWidth==maxWidth){
                clearInterval(interval);
                return;
            }
            currWidth++
            bar.style.width= currWidth + "%";    
        },10);
   }
}



var animationDone=false;

window.addEventListener('scroll',checkscroll);
function checkscroll(){
    var coordinates=skillBox.getBoundingClientRect();
    if( !animationDone &&coordinates.top<window.innerHeight){
        animationDone=true;
        // console.log("skill bar displayed");
        fillBars();
    }
}

