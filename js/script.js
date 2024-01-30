const akordiyonIcerik = document.querySelectorAll(".akordiyon-icerik");

akordiyonIcerik.forEach((item, index) => {
    let baslik = item.querySelector("header");
    baslik.addEventListener("click", () =>{
        item.classList.toggle("open");

        let aciklama = item.querySelector(".aciklama");
        if(item.classList.contains("open")){
            aciklama.style.height = `${aciklama.scrollHeight}px`; 
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            aciklama.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        kapat(index);
    })
})

function kapat(index1){
    akordiyonIcerik.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let ack = item2.querySelector(".aciklama");
            ack.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}