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
