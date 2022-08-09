from django.db import models

# Create your models here.
from user.models import Person


class Lab(models.Model):
    name = models.CharField(max_length=50)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)

    def __str__(self):
        return '%s - %s' % (self.id, self.name)


class Unit(models.Model):
    denomination = models.CharField(max_length=5, blank=True, null=True)

    def __str__(self):
        return '%s - %s' % (self.id, self.denomination)


class Reagent(models.Model):
    lab = models.ForeignKey(Lab, null=True, blank=True, on_delete=models.CASCADE)
    code = models.CharField(max_length=50, null=True, blank=True)
    denomination = models.CharField(max_length=50, null=True, blank=True)
    unit = models.ForeignKey(Unit, null=True, blank=True, on_delete=models.CASCADE)
    quant = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return '%s - %s (lab: %s)' % (self.code, self.denomination, self.lab.name)


class Notification(models.Model):
    title = models.CharField(null=True, blank=True, max_length=200)
    person = models.ForeignKey(Person, null=True, blank=True, on_delete=models.SET_NULL)
    description = models.CharField(null=True, blank=True, max_length=200)
    date = models.DateTimeField(null=True, blank=True, auto_now=True)
    view = models.BooleanField(default=False)

    def __str__(self):
        return self.title