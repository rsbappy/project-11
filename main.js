// $(document).ready(function(){

// alert("jQuery Loaded");

// });

// $(document).ready(function () {

//     $("button").click(function () {

//         $("h1").toggle(100, function () {

//             alert("djkjfkdj");
//         });
//     });




// });





$(document).ready(function () {
    // make to functions to add and remove the class span

    function add() {
        $('.copied').addClass('bounce-effect')
    }

    function remove() {
        $('.copied').removeClass('bounce-effect')
    }



    //// Call the functions and copy the text on button click

    $('.copy-btn').click(function () {
        $('.text-field').select();
        document.execCommand('copy');
        add();
        setTimeout(remove, 800)

    })
});