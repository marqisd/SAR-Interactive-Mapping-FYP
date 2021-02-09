from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import psycopg2
from django.template import loader

def mapdemo(request):
    return render(request, 'mapdemo.html')
    
def main(request):
    return render(request, 'main.html')