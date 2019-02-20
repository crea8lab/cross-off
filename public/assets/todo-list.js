$(document).ready(function(){

  $('form').on('submit', function(){

    const item = $('form input');
    const todo = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/todos',
      data: todo,
      timeout: 5000,
      success: function(data){
        //do something with the data via front-end framework
        location.reload();
      },
      fail: function (xhr, textStatus, thrownError) {
        console.log('failed', textStatus)
      }
    });

    return false;

  });

  $('li').on('click', function(){
      const item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todos/' + item,
        timeout: 5000,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        },
        fail: function(xhr, textStatus, thrownError) {
          console.log(textStatus, thrownError)
        }
      });
  });

});
