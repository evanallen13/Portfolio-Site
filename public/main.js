console.log('HHHHH')
function changeText(){
    let name = document.getElementById('nameH1');
    name.value = "Evan A//en";
    console.log('Yes')
    setTimeout(function(){
        name.value = "Evan Allen"},2000)
}

window.setInterval('changeText',5000);