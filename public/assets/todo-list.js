$(document).ready(function(){

  $('form').on('submit', function(){

    const item = $('form input');
    const todo = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/todos',
      data: todo,
      success: function(data){
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function(){
      const item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todos/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
