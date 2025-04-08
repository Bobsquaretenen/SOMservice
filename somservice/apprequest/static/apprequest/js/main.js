const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriceElement = document.querySelector('#total-price');
const inputs = document.querySelectorAll('input');
const dropdownSeiling = document.querySelectorAll('.dropdown_seiling');
//const phoneInput = document.querySelector('#phone_input');
const buttonWorks = document.querySelectorAll('.button_works');
const closeContact = document.getElementById('close_contact');
const openContacts = document.getElementById('open_contacts');
const checkConfidence = document.getElementById('check_confidence');
const buttonOpen = document.getElementById('button_open');
const openMenu = document.querySelector('#opens_menu');
const menuSection = document.querySelector('#links_drop_sections');

const buttonFirst = document.querySelector('.button_first_images');
const firstImages = document.querySelectorAll('.slider_first_images');
const buttonSecond = document.querySelector('.button_second_images');
const secondImages = document.querySelectorAll('.slider_second_images');
const buttonThird = document.querySelector('.button_third_images');
const thirdImages = document.querySelectorAll('.slider_third_images');
const buttonFourth = document.querySelector('.button_fourth_images');
const fourthImages = document.querySelectorAll('.slider_fourth_images');
const buttonFifth = document.querySelector('.button_fifth_images');
const fifthImages = document.querySelectorAll('.slider_fifth_images');
const buttonSixth = document.querySelector('.button_sixth_images');
const sixthImages = document.querySelectorAll('.slider_sixth_images');
const clouseButtonImage = document.querySelectorAll('.clouse_button_image');

const openFirstImage = document.querySelector('#open_first_images');
const openSecondImage = document.querySelector('#open_second_images');
const openThirdImages = document.querySelector('#open_third_images');
const openFourthImages = document.querySelector('#open_fourth_images');
const openFifthImages = document.querySelector('#open_fifth_images');
const openSixthImages = document.querySelector('#open_sixth_images');
const allImages = document.querySelectorAll('.background_images');

const sliderFirstImages = document.querySelectorAll('.slider_first_images');
const sliderSecondImages = document.querySelectorAll('.slider_second_images');
const sliderThirdImages = document.querySelectorAll('.slider_third_images');
const sliderFourthImages = document.querySelectorAll('.slider_fourth_images');
const sliderFifthImages = document.querySelectorAll('.slider_fifth_images');
const sliderSixthImages = document.querySelectorAll('.slider_sixth_images');
const sliderImages = document.querySelectorAll('.slider_images');
var counterImagesFirst = 0;
var counterImagesSecond = 0;
var counterImagesThird = 0;
var counterImagesFourth = 0;
var counterImagesFifth = 0;
var counterImagesSixth = 0;

const basePrice = 499;


//DropdownSeiling
dropdownSeiling.forEach(dropdown => {
    const selectPoint = dropdown.querySelector('.select_point');
    const arrowDrop = dropdown.querySelector('.arrow_drop');
    const menuOfSeiling = dropdown.querySelector('.menu_of_seiling');
    const optionsSeiling = dropdown.querySelectorAll('.menu_of_seiling li');
    const selectedChois = dropdown.querySelector('.selected_chois');

    selectPoint.addEventListener('click', () => {
        arrowDrop.classList.toggle('arrow_drop_rotation');
        menuOfSeiling.classList.toggle('menu_of_seiling_open');
    });
    optionsSeiling.forEach(options => {
        options.addEventListener('click', () => {
            selectedChois.innerText = options.innerText;
            arrowDrop.classList.remove('arrow_drop_rotation');
            menuOfSeiling.classList.remove('menu_of_seiling_open');
            optionsSeiling.forEach(options =>{
                options.classList.remove('active_seiling');
            });
            options.classList.add('active_seiling');
        });
    });
});
//DropdownSeiling

//OpenContacts//
for (let but of buttonWorks){
    but.addEventListener('click', () =>{
        openContacts.classList.add('open');
    });
}

closeContact.addEventListener('click', () =>{
    openContacts.classList.remove('open');
});
//OpenContacts//

//OpenMenu//
openMenu.addEventListener('click', () =>{
    menuSection.classList.toggle('opens');
});
//OpenMenu//

//OpenImages//
buttonFirst.addEventListener('click', () =>{
    openFirstImage.classList.add('open_img');
    for (let opens_images of firstImages){
        opens_images.classList.add('active_img');
    }
});

buttonSecond.addEventListener('click', () =>{
    openSecondImage.classList.add('open_img');
    for (let opens_images of secondImages){
        opens_images.classList.add('active_img');
    }
});

buttonThird.addEventListener('click', () =>{
    openThirdImages.classList.add('open_img');
    for (let opens_images of thirdImages){
        opens_images.classList.add('active_img');
    }
});

buttonFourth.addEventListener('click', () =>{
    openFourthImages.classList.add('open_img');
    for (let opens_images of fourthImages){
        opens_images.classList.add('active_img');
    }
});

buttonFifth.addEventListener('click', () =>{
    openFifthImages.classList.add('open_img');
    for (let opens_images of fifthImages){
        opens_images.classList.add('active_img');
    }
});

buttonSixth.addEventListener('click', () =>{
    openSixthImages.classList.add('open_img');
    for (let opens_images of sixthImages){
        opens_images.classList.add('active_img');
    }
});

for (let but of clouseButtonImage){
    but.addEventListener('click', () =>{
        for (let all_img of allImages){
            all_img.classList.remove('open_img');
        }
        for (let opens_images of sliderImages){
            opens_images.classList.remove('active_img');
        }
    });
}

//OpenImages//

//SliderImages//

//////////FirstImage//////////

sliderFirstImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightFirst = () =>{
    counterImagesFirst++;
    if (counterImagesFirst >= 3) counterImagesFirst = 0;
    slidersImagesFirst();
}

const onLeftFirst = () =>{
    counterImagesFirst--;
    if (counterImagesFirst <= -1) counterImagesFirst = 2;
    slidersImagesFirst();
}

const slidersImagesFirst = () =>{
    sliderFirstImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesFirst * 100}%)`;
        }
    );
}

//////////SecondImage//////////

sliderSecondImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightSecond = () =>{
    counterImagesSecond++;
    if (counterImagesSecond >= 3) counterImagesSecond = 0;
    slidersImagesSecond();
}

const onLeftSecond = () =>{
    counterImagesSecond--;
    if (counterImagesSecond <= -1) counterImagesSecond = 2;
    slidersImagesSecond();
}

const slidersImagesSecond = () =>{
    sliderSecondImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesSecond * 100}%)`;
        }
    );
}

//////////ThirdImage//////////

sliderThirdImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightThird = () =>{
    counterImagesThird++;
    if (counterImagesThird >= 2) counterImagesThird = 0;
    slidersImagesThird();
}

const onLeftThird = () =>{
    counterImagesThird--;
    if (counterImagesThird <= -1) counterImagesThird = 1;
    slidersImagesThird();
}

const slidersImagesThird = () =>{
    sliderThirdImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesThird * 100}%)`;
        }
    );
}

//////////FourthImage//////////

sliderFourthImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightFourth = () =>{
    counterImagesFourth++;
    if (counterImagesFourth >= 3) counterImagesFourth = 0;
    slidersImagesFourth();
}

const onLeftFourth = () =>{
    counterImagesFourth--;
    if (counterImagesFourth <= -1) counterImagesFourth = 2;
    slidersImagesFourth();
}

const slidersImagesFourth = () =>{
    sliderFourthImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesFourth * 100}%)`;
        }
    );
}

//////////FifthImage//////////

sliderFifthImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightFifth = () =>{
    counterImagesFifth++;
    if (counterImagesFifth >= 3) counterImagesFifth = 0;
    slidersImagesFifth();
}

const onLeftFifth = () =>{
    counterImagesFifth--;
    if (counterImagesFifth <= -1) counterImagesFifth = 2;
    slidersImagesFifth();
}

const slidersImagesFifth = () =>{
    sliderFifthImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesFifth * 100}%)`;
        }
    );
}

//////////SixthImage//////////

sliderSixthImages.forEach(
    (slider_image, index) =>{
        slider_image.style.left =`${index * 100}%`;
    }
);

const onRightSixth = () =>{
    counterImagesSixth++;
    if (counterImagesSixth >= 3) counterImagesSixth = 0;
    slidersImagesSixth();
}

const onLeftSixth = () =>{
    counterImagesSixth--;
    if (counterImagesSixth <= -1) counterImagesSixth = 2;
    slidersImagesSixth();
}

const slidersImagesSixth = () =>{
    sliderSixthImages.forEach(
        (slider_image) => {
            slider_image.style.transform = `translateX(-${counterImagesSixth * 100}%)`;
        }
    );
}

//SliderImages//

/*PhonInput
const phoneNumberClean = input => input.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5').slice(0, 18);
const format = clean => {
const [i, j] = [phoneInput.selectionStart, phoneInput.selectionEnd].map(i =>
clean(phoneInput.value.slice(0, i)).length
);
phoneInput.value = clean(phoneInput.value);
phoneInput.setSelectionRange(i, j);
};
phoneInput.addEventListener("input", () => format(phoneNumberClean));
PhonInput*/

//PhoneInputSecond//
document.addEventListener("DOMContentLoaded", function() {
    var eventCalllback = function(e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
});
//PhoneInputSecond//

//Checkbox

//checkConfidence.addEventListener('click', (check) => {
//    if (check.target.checked){
//        buttonOpen.classList.remove('active_button');
//    } else {
//        buttonOpen.classList.add('active_button');
//    }
//});

//Checkbox

//Calculations
const lampInput = document.querySelector('#lamp-input');
const luminaireInput = document.querySelector('#luminaire-input');
//Calculations

const checkQuantity = document.querySelector('input[name="quantity"]');

const progressBar = document.querySelector('#progress_bar');

squareRange.oninput = function(){
    progressBar.value = squareRange.value;
};

squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function(){
    squareRange.value = parseInt(squareInput.value);
});

function calculate(){
    let totalPrice = basePrice * parseInt(squareInput.value);
    let lampPrice = parseInt(lampInput.value);
    let luminairePrice = parseInt(luminaireInput.value);

    totalPrice += lampPrice * 500;
    if (parseInt(lampInput.value) < 0){
        lampInput.value = 0;
    }
    if (parseInt(lampInput.value) > 250){
        lampInput.value = 250;
    }

    totalPrice += luminairePrice * 200;
    if (parseInt(luminaireInput.value) < 0){
        luminaireInput.value = 0;
    }
    if (parseInt(luminaireInput.value) > 250){
        luminaireInput.value = 250;
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}

for (const input of inputs){
    input.addEventListener('input', function(){
        calculate();
    });
}

