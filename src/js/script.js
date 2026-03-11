var Database = {
	keyName: "Mutant Database",
	data: []
};

function loadDataSource() {

	let data = localStorage.getItem(Database.keyName);

	let parsed = JSON.parse(data);

	Database.data = parsed.response;

	displayData(Database.data);
}

function displayData(dataArray) {

	let row = document.querySelector(".row");

	dataArray.forEach(function(m) {

		let html = `
		<div class="col">
			<div class="card shadow-lg h-100">
				<img src="${m.image}" class="card-img-top">

				<div class="card-body">
					<h5 class="card-title text-center">${m.name.alias}</h5>
					<p class="text-center text-muted">${m.name.firstName} ${m.name.lastName}</p>

					<h6>Profile</h6>
					<ul>
						<li>Gender: ${m.profile.gender}</li>
						<li>Eyes: ${m.profile.eyes}</li>
						<li>Hair: ${m.profile.hair}</li>
						<li>Height: ${m.profile.height}</li>
					</ul>

					<h6>Powers</h6>
					<ul>
						${m.powers.map(p => `<li>${p}</li>`).join("")}
					</ul>

					<h6>Affiliation</h6>
					<ul class="list-inline">
						${m.affiliation.map(a => `<li class="list-inline-item badge bg-primary">${a}</li>`).join("")}
					</ul>
				</div>
			</div>
		</div>
		`;

		row.insertAdjacentHTML("beforeend", html);
	});
}

loadDataSource();