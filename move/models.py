from django.db import models
from core.models import Lab, Reagent


# Create your models here.

class MoveType(models.Model):
    denomination = models.CharField(max_length=30)

    def __str__(self):
        return '%s - %s' % (self.id, self.denomination)


class MoveDetail(models.Model):
    reagent = models.ForeignKey(Reagent, on_delete=models.CASCADE)
    quant = models.DecimalField(max_digits=10, decimal_places=3)
    previous_quant = models.DecimalField(max_digits=10, decimal_places=3, null=True)

    def __str__(self):
        return '%s - %s %s' % (self.reagent.denomination, self.quant, self.reagent.unit.denomination)


class Move(models.Model):
    type = models.ForeignKey(MoveType, null=True, on_delete=models.CASCADE)
    description = models.CharField(null=True, max_length=250)
    lab = models.ForeignKey(Lab, null=True, on_delete=models.CASCADE)
    move_detail = models.ManyToManyField(MoveDetail)
    date_today = models.DateTimeField(auto_now=False, auto_now_add=True)
    date_move = models.DateField()

    def __str__(self):
        return 'Laboratorio: %s - %s - %s' % (self.lab.name, self.type.denomination, self.date_today)
