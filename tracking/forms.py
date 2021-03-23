from django import forms
from .models import *

class trackingForm (forms.ModelForm):
    class Meta:
        model = trackingPoint
        fields = ['Lat','Lon']

        widgets = {
            #'ID':forms.TextInput(),
            'Lat':forms.TextInput(),
            'Lon':forms.TextInput()
        }