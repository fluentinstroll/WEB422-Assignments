$(function(){
    console.log("jQuery working");

    $("#teams-menu").on("click", function(event){
        console.log("Teams menu item clicked")
        event.preventDefault();
        $.ajax({
            url: "https://sleepy-waters-84661.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty()
            .html("<h3>Teams</h3>")
            .append(JSON.stringify(data));
        });
    })

    $("#employees-menu").on("click", function(event){
        console.log("Employees menu item clicked")
        event.preventDefault();
        $.ajax({
            url: "https://sleepy-waters-84661.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty()
            .html("<h3>Employees</h3>")
            .append(JSON.stringify(data));
        });
    })

    $("#projects-menu").on("click", function(event){
        console.log("Projects menu item clicked")
        event.preventDefault();
        $.ajax({
            url: "https://sleepy-waters-84661.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty()
            .html("<h3>pProjects</h3>")
            .append(JSON.stringify(data));
        });
    })

    $("#positions-menu").on("click", function(event){
        console.log("Positions menu item clicked")
        event.preventDefault();
        $.ajax({
            url: "https://sleepy-waters-84661.herokuapp.com/positions",
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty()
            .html("<h3>Positions</h3>")
            .append(JSON.stringify(data));
        });
    })
})
