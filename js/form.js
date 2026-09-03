function performRegistration() {
	var form = document.shaadi;
 	var why = "";

	why += checkFullName(form.fullname.value); 
	why += checkAttendees(form.attendees.value); 

	if (why != "") {
		alert(why);
		return false;
	}
	else {
		return true;
	}	

}


function checkFullName(strng) {
   var error = "";
   if (isWhitespace(strng) == true) {
       error += "Full Name is a required field\n";
   }
   else {
     // full name can't be smaller than 3 chars
     if (strng.length < 2) {
          error = "Full Name is the wrong length.\n";
      }
   }

   return error;
}

function checkAttendees(strng) {
   var error = "";
   if (isWhitespace(strng) == true) {
       error += "Number of Attendees is a required field\n";
   }
   else {
       //strip out acceptable non-numeric characters
       if (isNaN(parseInt(strng))) {
          error += "The number of attendees contains illegal characters. It should be a number\n";
       }

       // number of attendees must be atleast 1 digits
       if (!(strng.length >= 1)) {
	error += "The number of attendees is the wrong length.\n";
       }
   }

   return error;
}


function checkEmailAddress(strng) {
   var error = "";
   if (isWhitespace(strng) == true) {
       error += "Email Address is a required field\n";
   }
   else {
       // For email addresses, we’re forbidding the following: ( ) < > [ ] , ; : \ / "
       var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
       if (strng.match(illegalChars)) {
          error += "The email address contains illegal characters.\n";
       }

       if(isValidEmail(strng) == false) {
		error += "Invalid Email Address entered.\n";
	}
   }
   return error;

}

function isWhitespace (s) {   
	var i;
	
	// whitespace characters
	var whitespace = " \t\n\r";
	
	// Is s empty?
	if (isEmpty(s)) return true;

	// Search through string's characters one by one
	// until we find a non-whitespace character.
	// When we do, return false; if we don't, return true.

	for (i = 0; i < s.length; i++) {   
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (whitespace.indexOf(c) == -1) return false;
	}

	// All characters are whitespace.
	return true;
}

function isValidEmail(email)
    {
        var re;
        // Rules for the email regular expression:
        // The start of the email must have at least one character 
        // before the @ sign
        // There may be either a . or a -, but not together before the @ sign
        // There must be an @ sign
        // At least once character must follow the @ sign
        // There may be either a . or a -, but not together in the address
        // The address must end with a . followed by at least 2 characters
        re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (re.test(email) == true) {
		return true;
	}
        else {
		return false;
        }
 }

function isEmpty(s) {   
	return ((s == null) || (s.length == 0))
}


