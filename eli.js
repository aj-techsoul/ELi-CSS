function toast(){
  let body = document.body;
  var script = "<div class='toast result'></div>";
  body.innerHTML += script;
  console.log('Result Toast Added');
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var body = document.body;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

let jspath = "assets/elicss/";
//let jspath = "";
loadScript(jspath+"jquery.min.js");
loadScript(jspath+"swal/sweetalert2.all.min.js");
loadScript(jspath+'eli-forms.js');
loadScript(jspath+"eli-grid.js");
loadScript(jspath+"eli-helpers.js");
loadScript(jspath+"eli-validation.js");
loadScript(jspath+"eli_scripts.js");
toast();
