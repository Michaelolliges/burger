$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
  
      var newburger = {
        burger: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("changed sleep to", newBurger);
         
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=burger]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
      
          location.reload();
        }
      );
    });
  
   
    $(".burger-delete").on("click", function(e){
      console.log("clicked the delete button");
      let id = $(this).data("id");
      console.log(id);
      $.ajax({
        url: "/api/burgers/" + id,
        method: "DELETE"
      }).then(function(data){
        if(data) {
          location.reload();
        }
      });
    });
  });
  