from django.shortcuts import render

def index(request):
    return render(request, "emersyapp/index.html")

def quickstart(request):
    return render(request, "emersyapp/quick.html")
