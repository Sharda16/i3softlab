from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def about_us(request):
    return render(request, 'about_us.html')

def key_benefits(request):
    return render(request, 'key_benefits.html')

def case_studies(request):
    return render(request, 'case_studies.html')

def our_it_solutions(request):
    return render(request, 'our_it_solutions.html')

def careers(request):
    return render(request, 'careers.html') 

def contact(request):
    return render(request, 'contact.html')

def footer(request):
    return render(request, 'footer.html')


# Services Read More Pages
def data_engg_services(request):
    return render(request, 'services/data_engg_services.html')

def gen_ai_serivces(request):
    return render(request, 'services/gen_ai_serivces.html')

def data_science_services(request):
    return render(request, 'services/data_science_services.html')

def data_visu_services(request):
    return render(request, 'services/data_visu_services.html')





