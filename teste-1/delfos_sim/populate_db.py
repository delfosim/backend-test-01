import csv
import os
from api_source.models import Client, Role, User, Group, Module, ModuleClient, ModuleRole

CSV_ROOT_PATH = './data_info'
contSuccess = 0

Client.objects.all().delete()
Role.objects.all().delete()
User.objects.all().delete()
Group.objects.all().delete()
Module.objects.all().delete()
ModuleClient.objects.all().delete()
ModuleRole.objects.all().delete()


#import client
file_path = os.path.join(CSV_ROOT_PATH, 'client.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            client = Client(client_id=row[0], client_name=row[1], client_tag=row[2])
            client.save()
print('Importado Cliente')

# import role
file_path = os.path.join(CSV_ROOT_PATH, 'role.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            client = Client.objects.get(pk=row[1])
            role = Role.objects.create(id=row[0], client_id=client, role_name=row[2])
            role.save()
print('Importado Role')

# import user
file_path = os.path.join(CSV_ROOT_PATH, 'user.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            client = Client.objects.get(pk=row[2])
            user = User(id=row[0], tpid=row[1], client_id=client, user_name=row[3], role_id=row[4],
                        user_email=row[5], user_phone=row[6], user_type=row[7], creator_user_id=row[8],
                        creation_time=row[9], is_confirmed=row[10], is_active=row[11])
            user.save()

print('Importado user')

# import group
file_path = os.path.join(CSV_ROOT_PATH, 'module-group.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            group = Group(id=row[0], name=row[1], tag=row[2], route=row[3], hierarchy_level=row[4])
            group.save()

print('Importado Group')


# import module
file_path = os.path.join(CSV_ROOT_PATH, 'module.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            group_id = Group.objects.get(pk=row[4])
            module = Module(id=row[0], name=row[1], tag=row[2], route=row[3], group_id=group_id)
            module.save()
print('Importado Module')

# import module-client
file_path = os.path.join(CSV_ROOT_PATH, 'module-client.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            client = Client.objects.get(pk=row[1])
            module = Module.objects.get(pk=row[2])
            module_client = ModuleClient(id=row[0], client_id=client, module_id=module)
            module_client.save()

print('Importado Module Client')

# import module-role
file_path = os.path.join(CSV_ROOT_PATH, 'module-role.csv')
with open(file_path, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        if spamreader.line_num != 1:
            module = Module.objects.get(pk=row[2])
            module_role = ModuleRole(id=row[0], role_id=row[1], module_id=module)
            module.save()

print('Importado Module Role')
