from django.db import models


# Create your models here.
class Client(models.Model):

    client_id = models.IntegerField('Id', primary_key=True)
    client_name = models.CharField('Nome', max_length=100)
    client_tag = models.CharField('Tag', max_length=30)

    def __str__(self):
        return '{} - {}'.format(self.client_id, self.client_name)


class Role(models.Model):

    id = models.IntegerField('Id', primary_key=True)
    client_id = models.ForeignKey(Client, related_name='clients', on_delete=models.CASCADE)
    role_name = models.CharField('Regra Nome', max_length=30)

    def __str__(self):
        return '{}'.format(self.role_name)


class User(models.Model):

    id = models.IntegerField('Id', primary_key=True)
    tpid = models.CharField('TPID', max_length=120)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='users')
    user_name = models.CharField('Nome Usuário', max_length=100)
    role_id = models.IntegerField('Regra')
    user_email = models.CharField('Email', max_length=100)
    user_phone = models.CharField('Telefone', max_length=30, null=True, blank=True)
    user_type = models.CharField('Tipo', max_length=30)
    creator_user_id = models.CharField('Creator Id', max_length=30, null=True, blank=True)
    creation_time = models.CharField('Data de Criação', max_length=40)
    is_confirmed = models.BooleanField('Confirmado', null=True, blank=True)
    is_active = models.BooleanField('Ativo', null=True, blank=True)

    def __str__(self):
        return '{} - {}'.format(self.id, self.user_name)


class Group(models.Model):

    id = models.IntegerField('Id', primary_key=True)
    name = models.CharField('Nome', max_length=30)
    tag = models.CharField('Tag', max_length=30)
    route = models.CharField('Rota', max_length=100)
    hierarchy_level = models.IntegerField()

    def __str__(self):
        return '{} - {}'.format(self.id, self.tag)


class Module(models.Model):

    id = models.IntegerField('Id', primary_key=True)
    name = models.CharField('Nome', max_length=100)
    tag = models.CharField('Tag', max_length=30)
    route = models.CharField('Rota', max_length=100)
    group_id = models.ForeignKey(Group, related_name='modules', on_delete=models.CASCADE)

    def __str__(self):
        return '{} - {}'.format(self.id, self.name)


class ModuleClient(models.Model):
    id = models.IntegerField('Id', primary_key=True)
    client_id = models.ForeignKey(Client, related_name='modules_client', on_delete=models.CASCADE)
    module_id = models.ForeignKey(Module, related_name='modules_client', on_delete=models.CASCADE)


class ModuleRole(models.Model):
    id = models.IntegerField('Id', primary_key=True)
    role_id = models.IntegerField('Regra')
    module_id = models.ForeignKey(Module, related_name='modules_role', on_delete=models.CASCADE, null=True, blank=True)
