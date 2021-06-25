	/*js code for form*/
	function validateForm() {
						var fname = document.forms["messageForm"]["FirstName"].value;
						var lname = document.forms["messageForm"]["LastName"].value;
						var address= document.forms["messageForm"]["Address"].value;
						var phno = document.forms["messageForm"]["PhoneNumber"].value;
						var Username = document.forms["messageForm"]["Username"].value;
						var Password = document.forms["messageForm"]["Password"].value;
						var suggest = document.forms["messageForm"]["suggestions"].value;

						if (fname == "" || lname == "" || suggest == ""|| address == "" || phno == "" || Username == "" || Password== ""){
							alert("Fields cannot be empty. Please fill the form.");
						}
						else {
							
			            alert("Thank you "+fname+" "+lname);
						}
					}