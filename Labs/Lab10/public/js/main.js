(function($) {
  const theForm = $("#email-form");
  const theEmail = $("#email-input");
  const theMessage = $("#message-input");
  const theResult = $("#the-result");

  theForm.submit(e => {
    e.preventDefault();
    const formData = {
      email: theEmail.val(),
      message: theMessage.val()
    };
    
    $.ajax({
      type: "POST",
      url: "/",
      data: JSON.stringify(formData),
      contentType: "application/json",
      dataType: "json"
    }).then(function(responseMessage) {
      var replyText = JSON.parse(responseMessage).reply
      theResult.text(replyText);
    })
  });
})(jQuery); // jQuery is exported as $ and jQuery

