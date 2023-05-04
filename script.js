//your JS code here. If required.
function abc(){
let promise = new Promise(function(resolve,reject){

	setTimeout(()=>{
		resolve("Hello, world!");
	},1000))

   .then(function(msg){
	document.getElementById("output").innerText="msg";
})
	
}
	
	


abc();
