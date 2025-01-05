from django.urls import path
from mainapp import views

urlpatterns = [
    path('', views.home, name='home'),

    path('case-studies/', views.case_studies, name='case_studies'),
    path('about_us/', views.about_us, name='about_us'),
    path('key-benefits/', views.key_benefits, name='key_benefits'),
    path('careers/', views.careers, name='careers'),
    path('our_it_solutions/',views.our_it_solutions, name='our_it_solutions'),
    path('contact/', views.contact, name='contact'),
    path('footer/',views.footer, name='footer'),
    
    # Services Read More Pages
    path('data_engg_services/',views.data_engg_services, name='data_engg_services'),
    path('gen_ai_serivces/',views.gen_ai_serivces, name='gen_ai_serivces'),
    path('data_science_services/',views.data_science_services, name='data_science_services'),
    path('data_visu_services/',views.data_visu_services, name='data_visu_services'),

]
