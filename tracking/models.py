from django.db import models


class trackingPoint(models.Model):
    name = models.CharField(max_length=500, default='hello')
    Lat = models.CharField(max_length=500)
    Lon = models.CharField(max_length=500)
    status = models.CharField(max_length=500, default='Idle')
    message = models.CharField(max_length=500, default='')
    assignment = models.TextField(default='NA')
    dateTime = models.DateTimeField(auto_now = True)


    def __str__(self):
        return self.name

class projectProfile(models.Model):
    name = models.CharField(max_length=500, default='hello')
    ipp = models.CharField(max_length=500, default='NA')
    searchClass = models.CharField(max_length=500, default='NA')
    notes = models.TextField(default='NA')

    def __str__(self):
        return self.name