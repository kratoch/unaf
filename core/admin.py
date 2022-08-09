from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from core.models import Lab, Reagent, Unit


@admin.register(Lab)
class ViewAdmin(ImportExportModelAdmin):
    pass


@admin.register(Reagent)
class ViewAdmin(ImportExportModelAdmin):
    pass


@admin.register(Unit)
class ViewAdmin(ImportExportModelAdmin):
    pass
