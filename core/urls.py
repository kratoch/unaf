from django.urls import path
from core.views import *

app_name = 'core'
urlpatterns = [
    path('', index),
    path('menu/', menu, name='menu'),
    path('reactivos/', reagent_stock, name='reagent_stock'),
    path('reactivos/crear', reagent_create, name='reagent_create'),
    path('reactivos/editar<int:r>/', reagent_update, name='reagent_update'),
    path('reactivos/remover<int:r>/', reagent_remove, name='reagent_remove'),
    path('reactivos/remover_seleccionados', reagents_remove_selected, name='reagents_remove_select'),
]