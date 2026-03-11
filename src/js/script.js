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

					<h6 class="fw-bold">Profile</h6>
					<ul class="list-unstyled">
						<li>Gender: ${mutant.profile.gender}</li>
						<li>Eyes: ${mutant.profile.eyes}</li>
						<li>Hair: ${mutant.profile.hair}</li>
						<li>Height: ${mutant.profile.height}</li>
					</ul>

					<h6 class="fw-bold">Powers</h6>
					<ul class="list-unstyled">
						${powersList}
					</ul>

					<h6 class="fw-bold">Affiliation</h6>
					<ul class="list-inline">
						${affiliationList}
					</ul>

				</div>
			</div>
		</div>
		`;

		container.insertAdjacentHTML("beforeend", html);

	});

}

loadDataSource();