from datetime import datetime
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from core.models import Notification, Reagent, Lab, Unit
from function.mails import admin_consult_mail
from move.models import MoveDetail, Move
from user.models import Person


def index(request):
    # Create for empty url case
    return HttpResponseRedirect(reverse('core:menu'))


@login_required
def menu(request):
    # Clean session variables for register module
    """request.session['username'] = None
    request.session['password'] = None
    request.session['email'] = None
    request.session['firstName'] = None
    request.session['name'] = None
    request.session['tel'] = None
    request.session['cell'] = None
    request.session['cond'] = None
    request.session['store'] = None"""
    # Clean aux records
    '''for r in RecordAux.objects.all():
        for rr in r.reactivo_record.all():
            rr.delete()
        r.delete()'''
    person = Person.objects.get(user=request.user)
    context = {'person': person}
    if request.POST:
        try:
            admin_consult_mail(request.POST['consult'], person)
            return redirect(reverse('core:menu') + '?consultOk#contact')
        except Exception as e:
            print(e)
    try:
        notifications = Notification.objects.filter(person=person)
        context['notifications'] = notifications
    except Exception as e:
        print(e)
    if request.GET:
        try:
            person.colorTheme = request.GET['theme']
            person.save()
        except Exception as e:
            print(e)
    return render(request, 'core/menu.html', context)


@login_required
def reagent_stock(request):
    global person, notifications, reagents
    person = Person.objects.get(user=request.user)
    try:
        notifications = Notification.objects.filter(person=person)
    except Exception as e:
        print(e)
    try:
        reagents = Reagent.objects.filter(lab=Lab.objects.get(person__user=request.user))
    except Exception as e:
        print(e)
    context = {'reagents': reagents, 'person': person, 'notifications': notifications}
    return render(request, 'core/reagents_stock.html', context)


@login_required
def reagent_create(request):
    if request.POST:
        update = False
        try:
            reagent = Reagent.objects.get(id=request.POST['reagentUpd'])
            update = True
        except Exception as e:
            print(e, 'create reactivo start')
            lab = Lab.objects.get(person__user=request.user)
            reagent = Reagent(lab=lab)
        try:
            reagent.denomination = request.POST['reagentName']
        except Exception as e:
            print(e)
        try:
            reagent.code = request.POST['code']
        except Exception as e:
            print(e)
        try:
            if update and not reagent.quant == float(request.POST['stock'].replace('.', '').replace(',', '.')):
                quant = float(request.POST['stock'].replace('.', '').replace(',', '.'))
                move_detail = MoveDetail(reagent=reagent, previous_quant=reagent.quant, quant=quant)
                move_detail.save()
                if request.POST['description']:
                    description = request.POST['description']
                else:
                    description = 'El usuario %s del laboratorio %s ha modificado el stock del reactivo %s ' \
                                  'de %s %s a %s %s'\
                                  % (reagent.lab.person.user.get_full_name(), reagent.lab.name, reagent.denomination,
                                     str(reagent.quant), reagent.unit.denomination, quant, reagent.unit.denomination)
                move = Move(type_id=3, description=description, lab=reagent.lab, date_move=datetime.today())
                move.save()
                move.move_detail.add(move_detail)
                move.save()
            reagent.quant = float(request.POST['stock'].replace('.', '').replace(',', '.'))
        except Exception as e:
            print(e)
        try:
            reagent.unit = Unit.objects.get(id=request.POST['unit'])
        except Exception as e:
            print(e)
        reagent.save()
        if update:
            return redirect(reverse('core:reagent_stock') + '?updateOk')
        else:
            return redirect(reverse('core:reagent_stock') + '?ok')
    person = Person.objects.get(user=request.user)
    unit = Unit.objects.all()
    context = {'unit': unit, 'person': person}
    return render(request, 'core/reagent_create.html', context)


@login_required
def reagent_update(request, r):
    global reagentUpd
    try:
        reagentUpd = Reagent.objects.get(id=r)
    except Exception as e:
        print(e)
    unit = Unit.objects.all()
    person = Person.objects.get(user=request.user)
    context = {'reagentUpd': reagentUpd, 'unit': unit, 'person': person}
    return render(request, 'core/reagent_create.html', context)


@login_required
def reagent_remove(request, r):
    try:
        reagent = Reagent.objects.get(id=r)
        reagent.delete()
    except Exception as e:
        print(e)
    return HttpResponseRedirect(reverse('core:reagent_stock'))


def reagents_remove_selected(request):
    for r in request.POST.getlist('delete[]'):
        reagent = Reagent.objects.get(id=r)
        reagent.delete()
    return HttpResponseRedirect(reverse('core:reagent_stock'))
