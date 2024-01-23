let button = document.getElementById('button');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let daysResult = document.getElementById('daysResult');
let monthsResult = document.getElementById('monthsResult');
let yearsResult = document.getElementById('yearsResult');
let type = document.querySelectorAll('#type');
let error = document.querySelectorAll('#error');
let thisYear = new Date();

button.addEventListener('click', () => {
    if (day.value == '') {
        for (let i = 0; i < error.length; i++) {
            type[0].style.color = 'var(--light_red)';
            day.style.borderColor = 'var(--light_red)';
            error[0].style.display = 'flex';
            error[0].innerHTML = 'This field is required';
        }
    } else {
        if (day.value > 31) {
            type[0].style.color = 'var(--light_red)';
            day.style.borderColor = 'var(--light_red)';
            error[0].style.display = 'flex';
            error[0].innerHTML = 'Must be a valid day';
        } else {
            type[0].style.color = 'var(--smokey_grey)';
            day.style.borderColor = 'var(--smokey_grey)';
            error[0].style.display = 'none';
            error[0].innerHTML = '';
            daysResult.innerHTML = Math.abs(thisYear.getDate() - day.value);
        }
    }

    if (month.value == '') {
        for (let i = 0; i < error.length; i++) {
            type[1].style.color = 'var(--light_red)';
            month.style.borderColor = 'var(--light_red)';
            error[1].style.display = 'flex';
            error[1].innerHTML = 'This field is required';
        }
    } else {
        if (month.value > 12) {
            type[1].style.color = 'var(--light_red)';
            month.style.borderColor = 'var(--light_red)';
            error[1].style.display = 'flex';
            error[1].innerHTML = 'Must be a valid month';
        } else {
            type[1].style.color = 'var(--smokey_grey)';
            month.style.borderColor = 'var(--smokey_grey)';
            error[1].style.display = 'none';
            error[1].innerHTML = '';
            monthsResult.innerHTML = Math.abs(thisYear.getMonth() + 1 - month.value);
        }
    }

    if (year.value == '') {
        for (let i = 0; i < error.length; i++) {
            type[2].style.color = 'var(--light_red)';
            year.style.borderColor = 'var(--light_red)';
            error[2].style.display = 'flex';
            error[2].innerHTML = 'This field is required';
        }
    } else {
        if (year.value > thisYear.getFullYear()) {
            type[2].style.color = 'var(--light_red)';
            year.style.borderColor = 'var(--light_red)';
            error[2].style.display = 'flex';
            error[2].innerHTML = 'Must be in the past';
        } else {
            type[2].style.color = 'var(--smokey_grey)';
            year.style.borderColor = 'var(--smokey_grey)';
            error[2].style.display = 'none';
            error[2].innerHTML = '';
            yearsResult.innerHTML = thisYear.getFullYear() - year.value;
        }
    }
});