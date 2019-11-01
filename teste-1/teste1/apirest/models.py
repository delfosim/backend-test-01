from django.db import models
from datetime import datetime

# Create your models here.
class Music(models.Model):

    class Meta:

        db_table = 'music'

    title = models.CharField(max_length=200)
    seconds = models.IntegerField()

    def __str__(self):
        return self.title

class TimeSeries(models.Model):

    class Meta:
        db_table = 'timeseries'

    name = models.CharField(max_length=200)
    analysis = models.TextField()

    
    def __str__(self):
        return self.name

class Client(models.Model):
    client_id = models.IntegerField(primary_key=True)
    client_name = models.CharField(max_length=64)
    client_tag = models.CharField(max_length=64)

    def __str__(self):
        return self.client_name

class Role(models.Model):
    id = models.IntegerField(primary_key=True)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    role_name = models.CharField(max_length=64)

    def __str__(self):
        return self.role_name


class Group(models.Model):
    name = models.CharField(max_length=64)
    tag = models.CharField(max_length=64)
    route = models.CharField(max_length=64)
    hierarchy_level = models.IntegerField()

    def __str__(self):
        return self.name


class User(models.Model):
    id = models.IntegerField(primary_key=True)
    tpid = models.CharField(max_length=64)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    user_name = models.CharField(max_length=64)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=11, blank=True)
    user_type = models.CharField(max_length=11)
    creator_user_id = models.ForeignKey('self', on_delete=models.CASCADE, null=True)
    creation_time = models.DateTimeField(default=datetime.now, blank=True)
    is_confirmed = models.BooleanField()
    is_active = models.BooleanField()

    def __str__(self):
        return self.user_name


class Module(models.Model):
    name = models.CharField(max_length=64)
    tag = models.CharField(max_length=64)
    route = models.CharField(max_length=64)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE)
    roles = models.ManyToManyField(Role, verbose_name='Role', blank=True)
    clients = models.ManyToManyField(Client, verbose_name='Client', blank=True)

    def __str__(self):
        return self.name