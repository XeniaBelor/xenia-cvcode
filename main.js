const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement= txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 6);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 200;
    if (this.isDeleting){
        typeSpeed = typeSpeed / 2;
    }

    if (!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 1000;
    }
    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

window.onscroll = controlScrollToTopButton;

function controlScrollToTopButton() {
  var windowInnerHeight = 0.5 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}

var image_primarySchool = 'ps';
var image_university = 'un';
var image_highSchool = 'hs';
var image_musicSchool = 'ms';
var image_artSchool = 'as';

function change(){
  var image = document.getElementById('primarySchool');
  if(image_primarySchool=='ps'){
    image.src = 'images/years1.png';
    image_primarySchool = 'pstxt'
  } else {
    image.src = 'images/years.png';
    image_primarySchool = 'ps';
  }
}

function change2(){
  var image = document.getElementById('highSchool');
  if(image_highSchool=='hs'){
    image.src = 'images/years2-1.png';
    image_highSchool = 'hstxt'
  } else {
    image.src = 'images/years2.png';
    image_highSchool = 'hs';
  }
}

function change3(){
  var image = document.getElementById('university');
  if(image_university=='un'){
    image.src = 'images/years3-1.png';
    image_university = 'untxt'
  } else {
    image.src = 'images/years3.png';
    image_university = 'un';
  }
}

function change4(){
  var image = document.getElementById('musicSchool');
  if(image_musicSchool=='ms'){
    image.src = 'images/extra1.png';
    image_musicSchool = 'mstxt'
  } else {
    image.src = 'images/extra.png';
    image_musicSchool = 'ms';
  }
}

function change5(){
  var image = document.getElementById('artSchool');
  if(image_artSchool=='as'){
    image.src = 'images/extra3.png';
    image_artSchool = 'astxt'
  } else {
    image.src = 'images/extra2.png';
    image_artSchool = 'as';
  }
}

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});
