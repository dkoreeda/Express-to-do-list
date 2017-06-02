$(document).ready(() => {
  console.log('script loaded');

  $('.new-item').on('submit', e => {
    e.preventDefault();
    // const newItem = {};
    const subject = $('.subject').val();
          content = $('.content').val();

    const newItem = {
      subject,
      content
    }

    $.ajax({
      url: '/api/tasks',
      type: 'POST',
      data: newItem,
      success: response => {
        console.log(response);
        window.location.replace('/tasks/' + response.id);
      },
      error: msg => {
        console.log(msg);
      }
    });

  })

  $('.edit-item').on('submit', e => {
    e.preventDefault();
    const subject = $('.subject').val(),
          content = $('.content').val(),
          id = $('.id').val();

    const editItem = {
      subject,
      content,
      id
    }

    $.ajax({
      url: '/api/tasks/' + id,
      type: 'PUT',
      data: editItem,
      success: response => {
        console.log(response);
        window.location.replace('/tasks/' + response.id);
      },
      error: msg => {
        console.log(msg);
      }
    });

  });

  $('.delete-item').on('click', e => {
    e.preventDefault();
    const id = $('.id').val();
      $.ajax({
        url: '/api/tasks/'+ id,
        type: 'DELETE',
        data: id,
        success: response => {
          console.log(response);
          window.location.replace('/tasks');
        },
        error: msg => {
          console.log(msg);
        }
      });
  });

});
