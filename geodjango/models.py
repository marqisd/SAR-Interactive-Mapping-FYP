from django.db import models
#from django.forms import ModelForm

class trackingPoint(models.Model):
    ID = models.CharField(max_length=500)
    Lat = models.CharField(max_length=500)
    Lon = models.CharField(max_length=500)



