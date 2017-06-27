var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters(){
	var loadPet = document.querySelector("#main-table-body");
	loadPet.innerHTML = "";
	for(var i = 0; i < petData.length; i++){
		if((petData[i].type == filterType || filterType == "")&& petData[i].age < filterAgeMax && petData[i].age >= filterAgeMin){
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			var image = document.createElement("img");

			var td2 = document.createElement("td");
			var header = document.createElement("h4");
			var header_text = document.createTextNode(petData[i].name);
           
			var paragraph = document.createElement("p");

			var span = document.createElement("span");
			var span_text = document.createTextNode(petData[i].age + " years old.");


			image.setAttribute("src", petData[i].image.src);
			image.setAttribute("alt", petData[i].image.alt);
			image.setAttribute("height", petData[i].image.height);
			image.setAttribute("width", petData[i].image.width);
			td.appendChild(image);
			tr.appendChild(td);
		 

			header.appendChild(header_text);
			paragraph.innerHTML = petData[i].description;

			span.appendChild(span_text);



			td2.appendChild(header);
			td2.appendChild(paragraph);
			td2.appendChild(span);





            tr.appendChild(td2);
			loadPet.appendChild(tr);



		}
	}
}

function filterDog(){
	filterType = "dog";
	loadTableWithFilters();
}

function filterCat(){
	filterType = "cat";
	loadTableWithFilters();
}

function filterBird(){
	filterType = "bird";
	loadTableWithFilters();
}

function filter_zero_1(){
	filterAgeMin = 0;
	filterAgeMax = 1;
	loadTableWithFilters(); 
}

function filter_1_3(){
	filterAgeMin = 1;
	filterAgeMax = 3;
	loadTableWithFilters();
}

function filter_4_plus(){
	filterAgeMin = 4;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}

function filterAllPets(){
	filterType = "";
	filterAgeMin = 0;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}