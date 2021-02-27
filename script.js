function publier(){
    //psuedo
    var element = document.createElement('h4');
    element.innerHTML = "psuedo : " + document.getElementById('username').value;
    element.style = " background-color: #024773;padding: 2px; margin: 0px; color: white; font-size: 1.2em;"
    var comment = document.getElementById('pageweb');
    comment.appendChild(element);

    //contenu
    var text = document.createElement('div');
    text.innerHTML = "commentaire : "+document.getElementById('comment').value;
    text.style = "background-color: white; padding: 10px; font: italic 1.2em, 'Fira Sans', serif; border: solid 2px black;"
    comment = document.getElementById('pageweb');
    comment.appendChild(text);
};
