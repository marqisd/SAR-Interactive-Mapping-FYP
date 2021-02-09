from django.contrib.gis.admin import OSMGeoAdmin
from .models import Shop
from django.contrib import admin

class ShopAdmin(OSMGeoAdmin):
    list_display = ('name', 'location')

admin.site.register(Shop, ShopAdmin)