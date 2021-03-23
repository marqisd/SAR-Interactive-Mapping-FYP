from django.shortcuts import render
from .models import trackingPoint
from django.http import HttpResponse, JsonResponse
from django.views.generic import View

# def tracking(request):


class trackingHandler(View):
    def get(self, request):
            return render(request, 'tracking.html')
    def post(self,request):
        if request.is_ajax:
            # ID = request.POST['ID']
            # Lat = request.POST['Lat']
            # Lon = request.POST['Lon']
            # data = trackingPoint(ID=ID,Lat=Lat,Lon=Lon)
            # instance = data.save()
            ID = request.POST.get('ID')
            Lon = request.POST.get('Lon')
            Lat = request.POST.get('Lat')
            new = trackingPoint(name=ID,Lat=Lat,Lon=Lon)
            new.save()
            return JsonResponse({'trackingPoint':ID},status=200)
        else:
            return render(request, 'tracking.html')