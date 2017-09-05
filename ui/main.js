console.log('Loaded!');
var img=document.getElementById('giri')
var marginLeft=0;
function moveRight(){
	marginLeft=marginLeft+10;
	img.style.marginLeft =marginLeft +'px';
}
img.onclick=function(){
	//img.style.marginLeft='100px'
      var Interval=setInterval(moveRight,100);
};
