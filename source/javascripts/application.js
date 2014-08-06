// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery/dist/jquery
//= require fastclick/lib/fastclick
//= require foundation/js/foundation
//= require foundation/js/foundation/foundation.abide
//= require foundation/js/foundation/foundation.accordion


// require foundation/js/foundation/foundation.alert

// move this to specific pages on blog, load on the fly
// require foundation/js/foundation/foundation.clearing

// require foundation/js/foundation/foundation.dropdown
// require foundation/js/foundation/foundation.equalizer
// require foundation/js/foundation/foundation.interchange
// require foundation/js/foundation/foundation.joyride
// require foundation/js/foundation/foundation.magellan
// require foundation/js/foundation/foundation.offcanvas
// require foundation/js/foundation/foundation.orbit
//= require foundation/js/foundation/foundation.reveal
// require foundation/js/foundation/foundation.slider
// require foundation/js/foundation/foundation.tab
// require foundation/js/foundation/foundation.tooltip
// require foundation/js/foundation/foundation.topbar
//= require vendor/highlight
// require vendor/processing
// move this to specific pages on blog, load on the fly
//= require vendor/socialite/socialite
//= require_directory .

$(document).foundation();

$(".card.article, .sidebar-test").click(function(){
	window.location = $(this).find("a:first").attr("href");
	return false;
});

// Show URL on Mouse Hover
$(".card.article, .card.product, .sidebar-test").hover(function () {
	window.status = $(this).find("a:first").attr("href");
}, function () {
	window.status = "";
});
$(".front").click(function(){
	$( "div.flip-container" ).toggleClass( "flip" )
});


Socialite.load("blog-social");
hljs.initHighlightingOnLoad();

// ga code below

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19284762-1', 'jamesstone.co');
ga('send', 'pageview');


// madmimi form validation below

// (function() {
//   var form = document.getElementById('mad_mimi_signup_form'),
//       submit = document.getElementById('webform_submit_button'),
//       validEmail = /.+@.+\..+/,
//       isValid;

//   form.onsubmit = function(event) {
//     validate();
//     if(!isValid) {
//       revalidateOnChange();
//       return false;
//     }
//   };

//   function validate() {
//     isValid = true;
//     emailValidation();
//     fieldAndListValidation();
//     updateFormAfterValidation();
//   }

//   function emailValidation() {
//     var email = document.getElementById('signup_email');
//     if(!validEmail.test(email.value)) {
//       textFieldError(email);
//       isValid = false;
//     } else {
//       removeTextFieldError(email);
//     }
//   }

//   function fieldAndListValidation() {
//     var fields = form.querySelectorAll('.mimi_field.required');
//     for(var i = 0; i < fields.length; ++i) {
//       var field = fields[i],
//           type  = fieldType(field);
//       if(type == 'checkboxes' || type == 'radio_buttons') {
//         checkboxAndRadioValidation(field);
//       } else {
//         textAndDropdownValidation(field, type);
//       }
//     }
//   }

//   function fieldType(field) {
//     var type = field.querySelectorAll('.field_type');
//     if(type.length > 0) {
//       return type[0].getAttribute('data-field-type');
//     } else if(field.className.indexOf('checkgroup') >= 0) {
//       return 'checkboxes';
//     } else {
//       return 'text_field';
//     }
//   }

//   function checkboxAndRadioValidation(field) {
//     var inputs   = field.getElementsByTagName('input'),
//         selected = false;
//     for(var i = 0; i < inputs.length; ++i) {
//       var input = inputs[i];
//       if((input.type == 'checkbox' || input.type == 'radio') && input.checked) selected = true;
//     }
//     if(selected) {
//       field.className = field.className.replace(/ invalid/g, '');
//     } else {
//       if(field.className.indexOf('invalid') == -1) field.className += ' invalid';
//       isValid = false;
//     }
//   }

//   function textAndDropdownValidation(field, type) {
//     var inputs = field.getElementsByTagName('input');
//     for(var i = 0; i < inputs.length; ++i) {
//       var input = inputs[i];
//       if(input.name.indexOf('signup') >= 0) {
//         if(type == 'text_field') {
//           textValidation(input);
//         } else {
//           dropdownValidation(field, input);
//         }
//       }
//     }
//     htmlEmbedDropdownValidation(field);
//   }

//   function textValidation(input) {
//     if(input.id == 'signup_email') return;
//     var val = input.value;
//     if(val == '') {
//       textFieldError(input);
//       isValid = false;
//       return;
//     } else {
//       removeTextFieldError(input)
//     }
//   }

//   function dropdownValidation(field, input) {
//     var val = input.value;
//     if(val == '') {
//       if(field.className.indexOf('invalid') == -1) field.className += ' invalid';
//       onSelectCallback(input);
//       isValid = false;
//       return;
//     } else {
//       field.className = field.className.replace(/ invalid/g, '');
//     }
//   }

//   function htmlEmbedDropdownValidation(field) {
//     var dropdowns = field.querySelectorAll('.mimi_html_dropdown');
//     for(var i = 0; i < dropdowns.length; ++i) {
//       var dropdown = dropdowns[i],
//           val      = dropdown.value;
//       if(val == '') {
//         if(field.className.indexOf('invalid') == -1) field.className += ' invalid';
//         isValid = false;
//         dropdown.onchange = validate;
//         return;
//       } else {
//         field.className = field.className.replace(/ invalid/g, '');
//       }
//     }
//   }

//   function textFieldError(input) {
//     input.className   = 'required invalid';
//     input.placeholder = input.getAttribute('data-required-field');
//   }

//   function removeTextFieldError(input) {
//     input.className   = 'required';
//     input.placeholder = '';
//   }

//   function onSelectCallback(input) {
//     if(typeof Widget != 'undefined' && Widget.BasicDropdown != undefined) {
//       var dropdownEl = input.parentNode,
//           instances  = Widget.BasicDropdown.instances;
//       for(var i = 0; i < instances.length; ++i) {
//         var instance = instances[i];
//         if(instance.wrapperEl == dropdownEl) {
//           instance.onSelect = validate;
//         }
//       }
//     }
//   }

//   function updateFormAfterValidation() {
//     form.className   = setFormClassName();
//     submit.value     = submitButtonText();
//     submit.disabled  = !isValid;
//     submit.className = isValid ? 'submit' : 'disabled';
//   }

//   function setFormClassName() {
//     var name = form.className;
//     if(isValid) {
//       return name.replace(/\s?mimi_invalid/, '');
//     } else {
//       if(name.indexOf('mimi_invalid') == -1) {
//         return name += ' mimi_invalid';
//       } else {
//         return name;
//       }
//     }
//   }

//   function submitButtonText() {
//     var invalidFields = document.querySelectorAll('.invalid'),
//         text;
//     if(isValid || invalidFields == undefined) {
//       text = submit.getAttribute('data-default-text');
//     } else {
//       if(invalidFields.length > 1 || invalidFields[0].className.indexOf('checkgroup') == -1) {
//         text = submit.getAttribute('data-invalid-text');
//       } else {
//         text = submit.getAttribute('data-choose-list');
//       }
//     }
//     return text;
//   }

//   function revalidateOnChange() {
//     var fields = form.querySelectorAll(".mimi_field.required");
//     for(var i = 0; i < fields.length; ++i) {
//       var inputs = fields[i].getElementsByTagName('input');
//       for(var j = 0; j < inputs.length; ++j) {
//         inputs[j].onchange = validate;
//       }
//     }
//   }
// })();
