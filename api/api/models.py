from django.db import models
from django.contrib.auth.models import AbstractUser, Group
# Create your models here.


class Disease(models.Model):
    name = models.CharField(max_length=100, unique=True)
    added = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'disease'
        verbose_name_plural = 'diseases'


class User(AbstractUser):
    TYPE = (
        ('on', 'organization'),
        ('ad', 'admin')
    )
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    userType = models.CharField(max_length=2, choices=TYPE)

    def get_full_name(self):
        return '%s %s' % (self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.username


class Stakeholder(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=50, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'stakeholder'
        verbose_name_plural = 'stakeholders'


class Organization(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    website = models.URLField(unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'organization'
        verbose_name_plural = 'organizations'

# class Contributor(models.Model):
#     username = models.CharField(max_length=100)
#     organization = models.ForeignKey(Organization, on_delete=models.CASCADE)

class Template(models.Model):
    location = models.PointField()
