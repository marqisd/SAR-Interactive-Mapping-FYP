from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import psycopg2
from django.template import loader
from tracking.models import *

def mapdemo(request):
    return render(request, 'mapdemo.html')
    
def main(request):
    trackPoints = trackingPoint.objects.all()
    args={'trackPoints':trackPoints}
    return render(request, 'main.html',args)

def landing(request):
    return render(request, 'landing.html')
