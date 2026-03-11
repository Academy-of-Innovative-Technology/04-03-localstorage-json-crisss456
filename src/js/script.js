var Database = {
	keyName: "Mutant Database",
	data: []
};

function loadDataSource() {

	let storedData = localStorage.getItem(Database.keyName);

	let parsedData = JSON.parse(storedData);

	Database.data = parsedData.response;

	displayData(Database.data);
}
function displayData(dataArray) {

	let container = document.querySelector(".row");

	dataArray.forEach(function(mutant) {

		let powersList = "";
		mutant.powers.forEach(function(power){
			powersList += `<li>${power}</li>`;
		});

		let affiliationList = "";
		mutant.affiliation.forEach(function(team){
			affiliationList += `<li class="list-inline-item badge bg-primary">${team}</li>`;
		});

		let html = `
		<div class="col">
			<div class="card shadow-lg h-100">
				<img src="${mutant.image}" class="card-img-top">

				<div class="card-body">
					<h5 class="card-title text-center mb-3">
						${mutant.name.alias}
					</h5>

					<p class="card-text text-center text-muted">
						${mutant.name.firstName} ${mutant.name.lastName}
					</p>

				