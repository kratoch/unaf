from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from move.models import *
# Register your models here.


@admin.register(MoveType)
class ViewAdmin(ImportExportModelAdmin):
    pass


@admin.register(Move)
class ViewAdmin(ImportExportModelAdmin):
    pass


@admin.register(MoveDetail)
class ViewAdmin(ImportExportModelAdmin):
    pass
