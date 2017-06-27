// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
makeRequest(1);

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "http://reqres.in/api/users?page=1" // for page 1
	// "http://reqres.in/api/users?page=2" // for page 2
	// etc...
	var url="";
	if(pageNum == 1){
        url = "https://reqres.in/api/users?page=1";
	}else if(pageNum == 2){
		url = "https://reqres.in/api/users?page=2";
	}else if(pageNum == 3){
		url = "https://reqres.in/api/users?page=3";
	}else if(pageNum == 4){
		url = "https://reqres.in/api/users?page=4";
	}
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			var body = document.getElementById("data");

			body.innerHTML = "";

			for(var i = 0; i < jsData.data.length; i++){
			    var tr = document.createElement("tr");
			    var td1 = document.createElement("td");
			    var td2 = document.createElement("td");
			    var td3 = document.createElement("td");
			    var td4 = document.createElement("td");
			    var img = document.createElement("img");
                
          td_text1 = document.createTextNode(jsData.data[i].id);
          td_text2 = document.createTextNode(jsData.data[i].first_name);
          td_text3 = document.createTextNode(jsData.data[i].last_name);
          img.setAttribute("src", jsData.data[i].avatar);

          td1.appendChild(td_text1);
          td2.appendChild(td_text2);
          td3.appendChild(td_text3);
          td4.appendChild(img);

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);

          body.appendChild(tr);			

			}



			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			var bt = document.getElementsByTagName('button');
			for(var i = 0; i < bt.length; i++){
				bt[i].className = "pgbtn";
			}
			
				
			// TODO: add the class "active" to the button corresponding to the active page, ie:

			var page = jsData.page;
			 
			if(page == 1){
                bt[1].className = 'active';
			}else if(page == 2){
				bt[2].className = 'active';
			}else if(page == 3){
				bt[3].className = 'active';
			}else if(page == 4){
				bt[4].className = 'active';

			}


		} else {
			console.log('There was a problem with the request.');
		}
	}
}	
