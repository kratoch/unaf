from datetime import datetime

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from core.models import Notification, Lab, Reagent
from move.models import Move, MoveDetail, MoveType
from user.models import Person


@login_required
def consumption(request):
    global msg, person, notifications
    person = Person.objects.get(user=request.user)
    context = {'person': person}
    try:
        notifications = Notification.objects.filter(person__user=request.user)
    except Exception as e:
        print(e)
    if request.POST:
        lab = Lab.objects.get(person__user=request.user)
        date = datetime.strptime(request.POST['date'], "%d/%m/%Y").strftime("%Y-%m-%d")
        move = Move(lab=lab, type=MoveType.objects.get(id=1), date_move=date)  # tipo_id = 1 ---> Consumo
        try:
            move.description = request.POST['description']
        except Exception as e:
            print(e)
        move.save()
        for i in range(len(request.POST.getlist('item[id][]'))):
            reagent = Reagent.objects.get(id=request.POST.getlist('item[id][]')[i])
            quant = request.POST.getlist('item[quant][]')[i]
            quant = quant.replace('.', '').replace(',', '.')
            move_detail = MoveDetail(reagent=reagent, quant=float(quant))
            move_detail.save()
            move.move_detail.add(move_detail)
            move.save()
            reagent.quant = float(reagent.quant) - float(quant)
            reagent.save()
        return redirect(reverse('move:consumption') + '?ok')
    reagents = Reagent.objects.filter(lab__person__user=request.user)
    context['reagents'] = reagents
    return render(request, 'move/consumption.html', context)

@login_required
def record(request, trimester):
    global msg, person, notifications, moves
    person = Person.objects.get(user=request.user)
    moveType = MoveType.objects.all()
    ordering_by = '-date_move'
    if request.GET:
        if request.GET['ordering_by'] == 'date_move':
            ordering_by = 'date_move'
    try:
        year = request.GET['date']
        request.session['date'] = year
    except Exception as e:
        try:
            year = request.session['date']
        except Exception as e:
            print(e)
            year = datetime.today().strftime('%Y')
    context = {'person': person, 'year': year, 'moveType': moveType, 'ordering_by': ordering_by}
    try:
        notifications = Notification.objects.filter(person__user=request.user)
    except Exception as e:
        print(e)
    if trimester == 0:
        try:
            moves = Move.objects.filter(lab__person=person, date_move__year=year).order_by(ordering_by)
        except Exception as e:
            print(e)
    elif trimester == 1:
        try:
            moves = Move.objects.filter(lab__person=person, date_move__range=[year + '-01-01',
                                                                              year + '-03-31']).order_by(ordering_by)
        except Exception as e:
            print(e)
    elif trimester == 2:
        try:
            moves = Move.objects.filter(lab__person=person, date_move__range=[year + '-04-01',
                                                                              year + '-06-30']).order_by(ordering_by)
        except Exception as e:
            print(e)
    elif trimester == 3:
        try:
            moves = Move.objects.filter(lab__person=person, date_move__range=[year + '-07-01',
                                                                              year + '-09-30']).order_by(ordering_by)
        except Exception as e:
            print(e)
    else:
        try:
            moves = Move.objects.filter(lab__person=person, date_move__range=[year + '-10-01',
                                                                              year + '-12-31']).order_by(ordering_by)
        except Exception as e:
            print(e)
    context['moves'] = moves
    context['trimester'] = trimester
    return render(request, 'move/record.html', context)
