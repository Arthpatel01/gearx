var endpoint = "https://api.web3forms.com/submit";
var __key = '0bd0201e-3d02-4b72-9280-534586f2a48f';

$('.contact-form-submit-btn').on('click', function (event) {
    event.preventDefault();
    const form = $(this).closest('form')
    const loadingMessage = form.find('.loading');
    const submitButton = form.find('.contact-form-submit-btn');

    if (form[0].checkValidity() === false) {
        event.stopPropagation();
        form.addClass("was-validated");

    } else {
        //form is valid
        form.removeClass("was-validated");
        loadingMessage.show();
        submitButton.prop('disabled', true);

        const name = $('.name-input').val()
        const email = $('.email-input').val()
        const subject = $('.subject-input').val()
        const message = $('.message-input').val()

        const data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
            'apikey': __key,
        }
        $.ajax({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            url: endpoint,
            method: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            success: function (response) {
                $('.php-email-form').trigger('reset')
                loadingMessage.hide();
                submitButton.prop('disabled', false);
                $('.sent-message').show()
                $('.sent-message').delay(5000).fadeOut(400);
            },
            error: function (error) {
                $('.sent-message').hide()
                loadingMessage.hide();
                submitButton.prop('disabled', false);
                $('.error-message').show()
                $('.error-message').delay(5000).fadeOut(400);
            }
        });

    }
})


$('.get-quote-btn').on('click', function (event) {
    event.preventDefault();
    const form = $(this).closest('form')
    const loadingMessage = form.find('.loading');
    const submitButton = form.find('.get-quote-btn');

    if (form[0].checkValidity() === false) {
        event.stopPropagation();
        form.addClass('was-validated')
    } else {
        //form is validated
        form.removeClass("was-validated")
        loadingMessage.show();
        submitButton.prop('disabled', true);

        const name = $(this).closest("form").find('.name-input').val()
        const email = $(this).closest("form").find('.email-input').val()
        const phone = $(this).closest("form").find('.phone-input').val()
        const message = $(this).closest("form").find('.message-input').val()

        const part_no = $(this).closest("form").find('.part-no-input').val()
        const city = $(this).closest("form").find('.city-input').val()
        const weight = $(this).closest("form").find('.weight-input').val()
        const dimensions = $(this).closest("form").find('.dimensions-input').val()

        const data = {
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Message': message,
            'Part No': part_no,
            'City': city,
            'Weight': weight,
            'Dimensions': dimensions,
            'apikey': __key
        }
        $.ajax({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            url: endpoint,
            method: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            success: function (response) {
                form.trigger('reset')
                loadingMessage.hide();
                submitButton.prop('disabled', false);
                form.find('.sent-message').show()
                form.find('.sent-message').delay(5000).fadeOut(400);
            },
            error: function (error) {
                $('.sent-message').hide()
                loadingMessage.hide();
                submitButton.prop('disabled', false);
                form.find('.error-message').show()
                form.find('.error-message').delay(5000).fadeOut(400);
            }
        });
    }


})


