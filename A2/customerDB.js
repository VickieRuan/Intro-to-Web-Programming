 
/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
	{type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
	{type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
	{type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
	{type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
	{type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
	{type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
	{type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
	{type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
	{type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
	{type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
	{type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
	{type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
	{type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
	{type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
	{type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
	{type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
	{type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
	{type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
	{type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
	{type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
	 when you're ready.  Your code is required to run against these tests before you submit */
var CustomerDB = {
	customer: [],
	addresses: [],
	stores: [],
	insertData: function(allData){
 
		for(var i = 0; i < allData.length; i++){
			if(allData[i].type == "customer"){
				this.addCustomer(allData[i]);
			}else if(allData[i].type == "store"){
				this.addStore(allData[i]);
			}else{
				this.addAddress(allData[i]);
			}
		}

	},
	addCustomer: function(customerObj){
		customerObj.data.add_date = new Date();
		this.customer.push(customerObj);
	},
	addStore: function(storeObj){
		this.stores.push(storeObj);
	},
	addAddress: function(addressObj){
		this.addresses.push(addressObj);
	},
	outputCustomerById: function(customer_id){
		var result = "";
		for(var i = 0; i<this.customer.length; i++){
			if(this.customer[i].data.customer_id == customer_id){
				result = "Customer " + customer_id + ": " + this.customer[i].data.first_name + " "+this.customer[i].data.last_name + " (" + this.customer[i].data.email + ")" + "\n" + "Home Address: " + this.getAddressAddressById(this.customer[i].data.address_id) + "\n" + "Joined: " + this.customer[i].data.add_date + "\n\n"
			     	
			}
		}
	console.log(result);
		
	},
	getAddressAddressById: function(address_id){
		var result = "";
		for(var i = 0; i < this.addresses.length; i++){
			if(this.addresses[i].data.address_id == address_id){
				result =   this.addresses[i].data.address + " " + this.addresses[i].data.city + ", " + this.addresses[i].data.province +". "+ this.addresses[i].data.postal_code 
		    }
	    }
	    return result;
	},
	outputAllCustomers: function(){
		console.log("All Customers\n\n");
		for(var i = 0; i < this.customer.length; i++){
			 
			this.outputCustomerById(this.customer[i].data.customer_id);
			 
			
		}
	 
	},
	outputCustomersByStore: function(store_id){
		var result = "Customers in Store: " + this.getStoreById(store_id) + "\n\n\n";
		for(var i = 0; i < this.customer.length; i++){
			if(this.customer[i].data.store_id == store_id){
				result += "Customer " + this.customer[i].data.customer_id + ": " + this.customer[i].data.first_name + " "+this.customer[i].data.last_name + " (" + this.customer[i].data.email + ")" + "\n" + "Home Address: " + this.getAddressAddressById(this.customer[i].data.address_id) + "\n" + "Joined: " + this.customer[i].data.add_date + "\n\n\n"
				
				
			}
		}
		console.log(result);
	},
	
	getStoreById: function(store_id){
		var result = ""
		for(var i = 0; i < this.stores.length; i++){
			if(this.stores[i].data.store_id == store_id){
				result = this.stores[i].data.name
			}
		}
		return result;
	},
	removeCustomerById: function(customer_id){
		for(var i = 0; i < this.customer.length; i++){
			if(this.customer[i].data.customer_id == customer_id){
				var temp_remove_id = this.customer[i].data.address_id;
				this.customer.splice(i,1);
				this.removeAddressAddressById(temp_remove_id);
			}
		}
		
	},
	removeAddressAddressById: function(address_id){
		var flag = 0;
 
		for(var j = 0; j < this.customer.length; j++){
			 
			if(this.customer[j].data.address_id == address_id){
				flag = 1;
			}
			 
		}
		
		for(var a = 0; a < this.stores.length; a++){
			if(this.stores[a].data.address_id == address_id){
				flag = 1;
			}
		}
		
		if(flag == 0){
			for(var i = 0; i < this.addresses.length; i++){
			    if(this.addresses[i].data.address_id == address_id){
				    this.addresses.splice(i,1);
			    }
		    }
		}
	},
	getAddressById: function (address_id){
		var result = "";
		for(var i = 0; i < this.addresses.length; i++){
			if(this.addresses[i].data.address_id == address_id){
				result = this.addresses[i].data
				
			}
		}
		return result;
	},
	outputAllAddresses: function(){
		var result = "All Addresses\n\n";
		for(var i = 0; i < this.addresses.length; i++){
			result += "Address " + this.addresses[i].data.address_id + ": " +
				this.addresses[i].data.address + " " + this.addresses[i].data.city + ", " + this.addresses[i].data.province +". "+ this.addresses[i].data.postal_code  + "\n\n"
			}
		
	    console.log(result);
	},
 
	outputAllStores: function(){
		var result = "All Stores\n\n";
		for(var i = 0; i < this.stores.length; i++){
			result += "Store " + this.stores[i].data.store_id + ": " + this.getStoreById(this.stores[i].data.store_id) + "\n" + "Location: " + this.getAddressAddressById(this.stores[i].data.address_id) + "\n\n"
		}
	    console.log(result);	
	}
 
	
};
 



/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/
 

// Insert all Data into the Database

CustomerDB.insertData(allData);
 
 
// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");
 
// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 
 
// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

