from django.urls import path
from move.views import *

app_name = 'move'
urlpatterns = [
    path('consumo/', consumption, name='consumption'),
    path('historial/<int:trimester>/', record, name='record'),
    # path('transferencia/', transferencia, name='transferencia'),
    # path('transferencia/<int:transferencia>/', transferencia_request, name='transferencia_request')
]
