function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson)).catch(error => alert('Something went wrong. Try again later.'));
}

function formListener() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        input = $('#dogAmount').val();
        if (input === "")
            input = 3;
        for (i = 1; i <= input; i++) {
            getDogImage();
        }
    });
}

$(function () {
    formListener();
});