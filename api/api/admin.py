from django.contrib import admin
from .models import Disease, User, Contributor
# Register your models here.

admin.site.register(Disease)
admin.site.register(User)
admin.site.register(Contributor)
