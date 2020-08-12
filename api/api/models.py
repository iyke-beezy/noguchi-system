from django.db import models

# Create your models here.
class Disease(models.Model):
    name: models.CharField(max_length=100, unique=True)
    added: models.DateField(auto_now_add=True)

class User(models.model):
    TYPE = (
        ('co', 'contributor'),
        ('ad', 'admin')
    )
    name: models.CharField(max_length=100, unique=True)
    userType: models.CharField(max_length=2, choices=TYPE)