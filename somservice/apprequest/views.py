from django.http import HttpResponseNotFound
from django.shortcuts import render

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from .forms import Calculate
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    if request.method == "POST":
        square = request.POST.get('square-input', False)
        phone = request.POST.get('phone-input', False)
        lamps = request.POST.get('lamp-input', False)
        luminaires = request.POST.get('luminaire-input', False)
        price = int(square) * 499 + int(lamps) * 500 + int(luminaires) * 200
        data = {
            'price': price,
            'square': square,
            'phone': phone,
            'lamps': lamps,
            'luminaires': luminaires,
        }
        print(price, phone, square, lamps, luminaires)
        html_body = render_to_string('apprequest/informations_posts.html', data)
        msg = EmailMultiAlternatives(subject='Оставить заявку', to=['vladimirBOBbaganov@yandex.ru', ])
        msg.attach_alternative(html_body, 'text/html')
        msg.send()
    data = {
        'title': "СОМ сервис",
    }
    return render(request, 'apprequest/base.html', context=data)

@csrf_exempt
def information_page(request):
    if request.method == "POST":
        name = request.POST.get('name-contacts', False)
        phone = request.POST.get('phone-number-input', False)
        data = {
            'name': name,
            'phone': phone,
        }
        print(name, phone)
        html_body = render_to_string('apprequest/informations_user_posts.html', data)
        msg = EmailMultiAlternatives(subject='Оставить заявку', to=['vladimirBOBbaganov@yandex.ru', ])
        msg.attach_alternative(html_body, 'text/html')
        msg.send()
    data = {
        'title': 'СОМ сервис'
    }
    return render(request, 'apprequest/base.html', context=data)

def page_not_found(request, exception):
    return HttpResponseNotFound('<h1>Страница ненайдена</h1>')
