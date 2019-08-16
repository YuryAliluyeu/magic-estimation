let ddls = document.querySelectorAll("select");
ddls.forEach(function (){
	this.onchange = onDDLChange;
});
function getResult() {
	let summary = Object.values(ddls).reduce(function (acc, select) {
		acc += +select.value || 0;
		return acc;
	}, 0);
	return Math.ceil(summary/10);
}
function onDDLChange() {
	document.querySelector(".result").innerHTML = getResult();
};