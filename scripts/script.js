function count_(t, e) {
    e.preventDefault();
    let message = "";
    let g100 = t.gram100.value;
    let g200 = t.gram200.value;
    let g20 = t.gram20.value;
    let g5 = t.gram5.value;
    let p1 = t.pazly1.value;
    let p2 = t.pazly2.value;
    let s = t.sert.value;
    let summ = 0;
    if (g100 !== '') {
        message += "\n100 грамм x " + g100 + " = " + g100 * 8 + " BYN";
        summ += g100 * 8;
    }
    if (g200 !== '') {
        message += "\n200 грамм x " + g200 + " = " + g200 * 13 + " BYN";
        summ += g200 * 13;
    }
    if (g20 !== '') {
        message += "\n20 грамм x " + g20 + " = " + g20 * 2 + " BYN";
        summ += g20 * 2.5;
    }
    if (g5 !== '') {
        message += "\n5 грамм x " + g5 + " = " + g5 * 0.6 + " BYN";
        summ += g5 * 0.6;
    }
    if (p1 !== '' && p2 !== '') {
        message += "\nшокопазлы x " + p1 * p2 + " = " + p1 * p2 * 0.85 + " BYN";
        summ += p1 * p2 * 0.85;
    }
    if (s !== '') {
        message += "\nСертификат на " + s + " = " + s + " BYN";
        summ += s * 1;
    }
    if (summ > 4) {
        message += "\nИтого: " + summ + " BYN";
        document.getElementsByName("mes")[0].value = message;
    } else {
        alert("Минимальная стоимость заказа 4 рубля!")
    }
}

function send(t, e){
	e.preventDefault();
	var xmlHttp = new XMLHttpRequest();
	let message = "";
	message += "ФИО: " + t.FIO.value;
	message += "\nСвязь: " + t.Contact.value;
	message += "\n\nСообщение:\n" + t.mes.value;
	theUrl = 'https://api.telegram.org/bot6013506622:AAEL6g6TyC-eIzPIF1ovV284f7fbx25iEvw/sendMessage?chat_id=-1001715391876&parse_mode=Markdown&text=' + encodeURIComponent(message);
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
	t.reset();
	alert("Успешно! Ожидайте ответа)");

}

function posech(){
	var xmlHttp = new XMLHttpRequest();
	theUrl = 'https://api.telegram.org/bot6013506622:AAEL6g6TyC-eIzPIF1ovV284f7fbx25iEvw/sendMessage?chat_id=-1001715391876&parse_mode=Markdown&text=' + "Сайт был посещен!";
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

}
const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 3,
        direction: 'horizontal',
        spaceBetween: 30,
        setWrapperSize: true,
        width: 950,
        grabCursor: true,
        preloadImages: true,
        preventClicks: true,
        rewind: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll > 20) {
        $('div.nav-item-1').css({
            "padding": "40px 10px 35px 10px",
            "background": "rgba(255,255,255,1)"
        })
    }
    else {
        $('div.nav-item-1').css({
            "padding": "23px 10px 15px 10px",
            "background": "none"
        })
    }
});
function goTo(where) {
        document.getElementById(where).scrollIntoView({block: "center", behavior: "smooth"});
}