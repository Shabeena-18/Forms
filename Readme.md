User Form
HTML FORMS ELEMENT
HTML FORMS ARE USED OT COLLECT DATA FROM THE USER
FORMS ARE OF DFFERENCT KINDS:
- LOGIN/SIGNUP IN FORM
- REGISTRATION FORM
- CONTACT US FORM
WE USE THE FORMS TO GATHER THE DATA FROM THE USER
THE FORM ELEMENT
THE HTMOL FORM ELEMENT IS USED OT CREATE THML FORMS

ITS IS A CONTAINER THAT CAN CONTAIN DIFFERENT TYPES OF INPUT ELEMENTS LIKE :- 
- TEXT FIELDS, - CHECKBOXES ETC

<FORM/...</FRM>
FORM has the special event - submit event
submit event will be triggered on pressing enter key
the submit event would be triggered by default

why does the form gets refreshed when we click on the enter and submit button

Default Behavious
whenever we clik on button or press enter keywhile editing any input field of a form submit evet will be triggered

Prevent Default method()

Event Object
Whenever an event happens, the breoswer creates an event object
It consists information about the event that has happpened

Evnet object
It consists of many properites and methods:
- preventDefault()
-type
-target
-key
- timestamp


The PreventDefault Method
the preventDefault() method prevents the occurence of default action normaly
here in the form,, it prevents the default behaviour of submit event

How to add the field level validations like required

we have so many events like keyborad evetnts
mouse events, touch events, form events etc..,
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");
let myFormEl = document.getElementById("myForm");
let formData = {  name: "", 


Form events
a form event is an event that can oocur within a form form events like blur, focus, change etc
the Blur event - the blur event happens when an element has lost focus

Lets show the required message on not filing the name


1. HTML Select Element
The HTML select element is used to create a drop-down list.


<select></select>
1.1 HTML Option Element
The HTML option element is used to create the menu option of a drop-down list.

The text content of the HTML option element is used as a label.

<select>  <option>Active</option></select>
1.1.1 The value Attribute
Every HTML option element should contain the HTML value attribute.


<option value="Active">Active</option>
2. HTML Input Element
2.1 Radio
The HTML input radio element is used to select one option among a list of given options.

<input type="radio" id="genderMale" value="Male" /><input type="radio" id="genderFemale" value="Female" />

The HTML name Attribute specifies the name for an HTML Element.

<input type="radio" value="Male" name="gender" />
Radio Group
All the radio buttons with same name collectively called as a radio group.

We can select only one radio button within a radio group.


<input type="radio" value="Male" name="gender" /><input type="radio" value="Female" name="gender" />
3. Boolean Attributes
For the HTML Boolean attributes, we only specify the name of the HTML attribute.

The presence of a boolean attribute represents the true value, and the absence represents the false value.

3.1 HTML selected attribute
The selected attribute specifies that an option should be pre-selected when the page loads.


<option value="Active" selected>Active</option>
3.2 HTML checked attribute
The checked attribute specifies that an input element should be pre-selected (checked) when the page loads.


<input type="radio" id="genderMale" value="Male" name="gender" checked />

Boolean Attributes
for these attributes, we only specify the name of the attribute
The presence of a boolean attribute represents the true value, and the absence represents the false value.
-selected, -checked, -disabled, -readonly, default etc.,


the selected attribute
-The selected attibute specifies that an option should be pre-selected when the page loads.

How to add the radio buttons to the user form ?
A Radio Button is used to select one option among a list of given options - we use this when we have very less options.

until now both the radio elements got the true status

how to change this
The Name Attribute
The HTML name Attribute specifies a name for an Html element.
<input type = "radio" value = "Male" name="gender"/>

Radio Group -> All the radio butons with same name collectively called as a radio group.
within a group only one radio button will be selected at a time.

Lets make a post request on submitting form data

for that maintain all the form data in the object
send the form data using post method on submit event.

Initial form data object

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

In form events we have so many events
a from event is an event that can occur within a form
form events:
* blur, * submit, * change etc.,

The Change Event

The change event occurs when the value of an element has been changed.


