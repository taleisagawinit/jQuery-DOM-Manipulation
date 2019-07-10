$(document).ready(() => {

    // This was the code I had first: 
    // $("#button1").on('click', e => {
    //     if ($("#two").hasClass("show")) {
    //         $("#two").removeClass("show");
    //         $("#one").addClass("show");
    //     } else {
    //         $("#one").addClass("show")
    //     } 
    //  });

    // $("#button2").on('click', e => {
    //     if ($("#three").hasClass("show")) {
    //         $("#three").removeClass("show");
    //         $("#two").addClass("show");
    //     } else {
    //         $("#one").removeClass("show");
    //         $("#two").addClass("show");
    //     } 
    // });

    // $("#button3").on('click', e => {
    //     $("#two").removeClass("show")
    //     $("#three").addClass("show")
    // });

    //This is the code that I realized is a lot easier:
    $("#button1").on('click', e => {
        $("#one").addClass("show");
        $("#two").removeClass("show");
        $("#three").removeClass("show")
    })

    $("#button2").on('click', e => {
        $("#two").addClass("show");
        $("#one").removeClass("show");
        $("#three").removeClass("show")
    })

    $("#button3").on('click', e => {
        $("#three").addClass("show");
        $("#two").removeClass("show");
        $("#one").removeClass("show")
    })


    
    
    
})