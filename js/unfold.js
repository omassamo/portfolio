window.onload = function(){
document.getElementById("qresClick").onclick = function(){qresLoad()};

function qresLoad() {
    $.ajax({
    url: 'unfold/qres.html',
    type: 'post',
    success: function(response) {
        $('#qres').append(response);
    }
});
}

// $( "#qresCLick" ).one( "click", function() {
//     $.ajax({
//     url: 'unfold/qres.html',
//     type: 'post',
//     success: function(response) {
//         $('#qres').append(response);;
// });

document.getElementById("pdesClick").onclick = function(){pdesLoad()};

function pdesLoad() {
    $.ajax({
    url: 'unfold/pdes.html',
    type: 'post',
    success: function(response) {
        $('#pdes').append(response);
        // $( "#btn-wrapper" ).hide();
    }
});
}

document.getElementById("ptypesClick").onclick = function(){ptypesLoad()};

function ptypesLoad() {
    $.ajax({
    url: 'unfold/ptypes.html',
    type: 'post',
    success: function(response) {
        $('#ptypes').append(response);
        // $( "#btn-wrapper" ).hide();
    }
});
}

};

