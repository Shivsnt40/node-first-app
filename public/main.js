function addData() {
    debugger
    var name = $("#name").val();
    var email = $("#email").val();

    $.ajax({
        url: "http://localhost:3000/test",
        type: "POST",
        crossDomain: true,
        data: {name: name, email: email},
        dataType: "json",
        success: function (result) {
            $("#result").html(result);
        },
        error: function (xhr, status) {
            alert("error");
        }
    });
}