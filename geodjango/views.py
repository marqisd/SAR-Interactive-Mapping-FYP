from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import psycopg2
from django.template import loader
from tracking.models import *
import string
import random


def mapdemo(request):
    return render(request, 'mapdemo.html')
    
def details(request):
    if request.method == 'POST':
        form = request.POST
        print(form.get('notes'))
        name = random.choices(string.ascii_uppercase,k=5)
        name = ''.join(name)
        projForm = projectProfile(name=name,ipp=form.get('ipp'),searchClass=form.get('class'),notes=form.get('notes'))
        projForm.save()
        return HttpResponseRedirect('/main/'+name)
    else:
        return render(request, 'details.html')

def main(request,projname):
    is_ajax = request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'
    if is_ajax==True:
        trackPoints = trackingPoint.objects.all()
        print(trackPoints.values_list())
        track_list =  trackPoints.values_list()
        track_list = list(track_list)
        projectData= projectProfile.objects.filter(name=projname)
        return JsonResponse({'data':track_list},status=200,safe=False)
    else:
        trackPoints = trackingPoint.objects.all()
        projectData= projectProfile.objects.filter(name=projname)
        args={'trackPoints':trackPoints,'projData':projectData}
        return render(request, 'main.html',args)

def landing(request):
    if request.method == 'POST':
        form = request.POST
        name =form.get('projCode')
        projectData= projectProfile.objects.filter(name=name)
        if len(projectData) != 0 :
            return HttpResponseRedirect('/main/'+name)
        else:
            return render(request, 'landing.html')
    else:
        return render(request, 'landing.html')
