from django import forms

class Calculate(forms.Form):
    phone = forms.CharField(max_length=255, min_length=7, label="ТЕЛЕФОН")
