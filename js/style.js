function showcontent(){
    allcontents=document.querySelectorAll(".content");
    if(document.querySelector(".content").style.display=="block"){
        for (i = 0; i < allcontents.length; i++) {
            allcontents[i].style.display="none";
        }
    }
    else{
        for (i = 0; i < allcontents.length; i++) {
            allcontents[i].style.display="block";
        }
    }
}