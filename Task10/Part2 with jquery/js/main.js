$(document).ready(function(){
    // show model
    $(".show-model").click(function(){
        $(".modal").show()
    })


    // close model button one
    $(".close").click(function(){
        $(".modal").hide()
    })

    // close model button two
    $(".close2").click(function(){
        $(".modal").hide()
    })

    // add data
    $(".add").click(function(){
        let data = $("input").val()
        if(data.trim() == 0 || data.length < 3 || data.length > 20){
            alert("Please enter a valid data");
        } else{
            $(".no-task h2").text(data)
            $("input").val("")
            $(".modal").hide()
            $(".delete").show()
        }
    })

    // button delete
    $(".delete").click(function(){
        $(".no-task h2").text("No Data Added yet")
        $(".delete").hide()
    })
})  // document

































































































