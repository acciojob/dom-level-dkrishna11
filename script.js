//your JS code here. If required.
let li=document.getElementByTagName("li");
li.addEventListner("load", functio(){
	for(let i=0;i<li.length;i++){
	if(li[i].id==="level")
		alert("The level of the element is: "+i);
}
})
