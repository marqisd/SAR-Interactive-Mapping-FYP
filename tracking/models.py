from django.db import models


class trackingPoint(models.Model):
    #ID = models.CharField(max_length=500)
    Lat = models.CharField(max_length=500)
    Lon = models.CharField(max_length=500)

    def __str__(self):
        return self.Lat