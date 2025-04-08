from django.template.defaulttags import url
from django.urls import path, register_converter
from . import views
from . import converters

register_converter(converters.Converter, 'convert')

urlpatterns = [
    path('', views.index, name='home'),
    path('/', views.information_page, name='homes')
]



