from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import psycopg2
from django.template import loader


def mapdemo(request):
    return render(request, 'mapdemo.html')
    
def main(request):
    return render(request, 'main.html')

def landing(request):
    return render(request, 'landing.html')
