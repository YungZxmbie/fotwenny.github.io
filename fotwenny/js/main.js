$(document).ready(function(){

    $nav=$('.nav')
    $nav.toggleClass('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse")
    })


})

