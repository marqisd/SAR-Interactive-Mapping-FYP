from django.urls import path

from .views import *

# urlpatterns = [
#     path('', views.tracking),
# ]

urlpatterns = [
    path('', trackingHandler.as_view(),name='tracking'),
]