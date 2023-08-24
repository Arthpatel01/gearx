var endpoint = "https://api.web3forms.com/submit";
var __key = '0bd0201e-3d02-4b72-9280-534586f2a48f';
/*var __key = 'ae39cbf8-7448-40e1-8a6d-406b73722594';*/

$('.contact-form-submit-btn').on('click', function () {
    const name = $('.name-input').val()
    const email = $('.email-input').val()
    const subject = $('.subject-input').val()
    const message = $('.message-input').val()

    if (name && email && subject && message) {
        const data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
            'apikey': __key,
        }
        var endpoint = "https://api.web3forms.com/submit";
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

                $('.sent-message').show()
                $('.sent-message').delay(5000).fadeOut(400);
            },
            error: function (error) {
                $('.sent-message').hide()

                $('.error-message').show()
                $('.error-message').delay(5000).fadeOut(400);
            }
        });
    } else {
        $('.sent-message').hide()

        $('.error-message').show()
        $('.error-message').delay(5000).fadeOut(400);
    }
})


$('.get-quote-btn').on('click', function () {
    const form = $(this).closest('form')
    const name = $(this).closest("form").find('.name-input').val()
    const email = $(this).closest("form").find('.email-input').val()
    const phone = $(this).closest("form").find('.phone-input').val()
    const message = $(this).closest("form").find('.message-input').val()

    const part_no = $(this).closest("form").find('.part-no-input').val()
    const city = $(this).closest("form").find('.city-input').val()
    const weight = $(this).closest("form").find('.weight-input').val()
    const dimensions = $(this).closest("form").find('.dimensions-input').val()


    if (name && email && phone && message && part_no && city && weight && dimensions) {
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
        /*var endpoint = "https://formspree.io/f/xjvqwakv";*/
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

                form.find('.sent-message').show()
                form.find('.sent-message').delay(5000).fadeOut(400);
            },
            error: function (error) {
                $('.sent-message').hide()

                form.find('.error-message').show()
                form.find('.error-message').delay(5000).fadeOut(400);
            }
        });
    } else {
        form.find('.sent-message').hide()

        form.find('.error-message').show()
        form.find('.error-message').delay(5000).fadeOut(400);
    }
})

