document.getElementById('view-more').addEventListener("click", e =>{
    e.preventDefault
    if (document.getElementById("press-content").style.height === "auto"){
        if(document.getElementById("press-content").style.width < 650){
            document.getElementById("press-content").style.height = "1450px";
        }
        if(document.getElementById("press-content").style.width < 850){
            document.getElementById("press-content").style.height = "1350px";
        }
    }else{
        document.getElementById("press-content").style.height = "auto"
    }
})