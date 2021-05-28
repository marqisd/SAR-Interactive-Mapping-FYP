from django import forms

class trackingPoint(form.Forms):
    ID = forms.CharField(max_length=500)
    Lat = forms.CharField(max_length=500)
    Lon = forms.CharField(max_length=500)