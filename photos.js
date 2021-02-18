let sub = document.getElementById("root")
sub.addEventListener('click', addstorage)
let a = localStorage.getItem('root')||"Not Found";
if (a!="Not Found"){
    change()
}
function addstorage() {
    let newroot = document.getElementById("newinput")
    localStorage.setItem('root', newroot.value);
    console.log(newroot.value);
    console.log(localStorage);
    change()
}
function change() {
    let photos = document.querySelectorAll("img")
    let i=1
    photos.forEach(e=>{
        e.src=`file:///${a}\\${i}.jpg`
        i++;
    })
}
