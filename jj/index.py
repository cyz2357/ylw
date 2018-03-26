__author__ = 'Administrator'
from django.http import HttpResponse
from django.template import loader,Context,Template
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.shortcuts import render

def index(request):
    return render(request, 'manager/index.html')
def main(request):
    return render(request, 'manager/mains.html')
def equipment(request):
    return render(request, 'manager/equipment.html')