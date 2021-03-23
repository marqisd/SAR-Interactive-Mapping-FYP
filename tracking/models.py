from django.db import models


class trackingPoint(models.Model):
    name = models.CharField(max_length=500, default='hello')
    Lat = models.CharField(max_length=500)
    Lon = models.CharField(max_length=500)

    def __str__(self):
        return self.Lat