let booked_or_not = false;

/* Steps Functionality */

const x = document.querySelectorAll('.tablinks');
for (let i = 0; i < x.length; ++i) {
    x[i].addEventListener('click', function () {
        let tabname = this.dataset.tab;
        let tabcontent = document.getElementById(tabname);

        let allTabButtons = document.querySelectorAll('.tablinks');
        let allTabContent = document.querySelectorAll('.tabcontent');

        allTabContent.forEach((x) => {
            x.style.display = 'none';
        });

        allTabButtons.forEach((x) => {
            x.classList.remove('active');
        });

        tabcontent.style.display = 'block';
        this.classList.add('active');
    })
}
document.querySelector('.tablinks').click();

/*Navbar functionality */

document.querySelector('.header h2').addEventListener('click', () => {
    window.location.href = 'http://www.google.com';
})
document.querySelector('.header .left-header ul').addEventListener('click', () => {
    window.location.href = 'http://www.google.com';
})

/* User menu Code starts here */

const vaccineButtons = document.querySelectorAll('.vaccinetypes');

let date, hospital, vaccineSelected, timing;

/* getting the vaccination type */

vaccineButtons.forEach(button => {
    button.addEventListener('click', () => {
        vaccineSelected = button.value;

        vaccineButtons.forEach(btn => {
            btn.classList.remove('disabled')
        });

        // Set the background color of the clicked button
        button.classList.add('disabled');
    });
});

/* getting the vaccination dates */
const datesButton = document.querySelectorAll('.scrollable-container button');

datesButton.forEach(button => {
    button.addEventListener('click', () => {

        [date, hospital] = button.value.split(',');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        (async () => {
            const result = await swalWithBootstrapButtons.fire({
                title: 'Please Select a Time Slot',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: '<i class="fa-solid fa-calendar-days"></i> 09:00AM - 01:00PM',
                cancelButtonText: '<i class="fa-solid fa-calendar-days"></i> 02:00PM - 06:00PM',
                reverseButtons: true,
                html: '<p id="selections">Selected Time Slots:</p>'
            });

            if (result.isConfirmed) {
                timing = '09:00AM - 01:00PM';
                document.querySelector('#myModal1').style.display = 'block';

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                timing = '02:00PM - 06:00PM';
                document.querySelector('#myModal1').style.display = 'block';
            }
        })();
    })
})

document.querySelector('#close-consent').addEventListener('click', () => {
    document.querySelector('#myModal1').style.display = 'none';
});

document.querySelector('#submit-consent').addEventListener('click', () => {
    document.querySelector('#myModal1').style.display = 'none';
    // Here do the Unlocking of the acknowledgement button

    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your Vaccination Booked Successfully!',
        confirmButtonColor: '#28a745'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Information',
                text: 'Please Download Acknowlegement under Profile Tab.',
                confirmButtonColor: '#007bff'
            });
        }
    });
    document.querySelector('.Acknowledgement').removeAttribute('disabled');
});















