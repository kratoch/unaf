from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from user.models import *


# Register your models here.


@admin.register(Condition)
class ViewAdmin(ImportExportModelAdmin):
    pass


@admin.register(Person)
class ViewAdmin(ImportExportModelAdmin):
    pass
