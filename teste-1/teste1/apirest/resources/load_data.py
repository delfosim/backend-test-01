import json

import django

django.setup()

def load_timeseries():
    from apirest.models import TimeSeries
    import json

    json_data = open('assets/analysis.json')   
    timeseries_list = json.load(json_data) # deserialises it
    timeseries_string = json.dumps(timeseries_list)
    json_data.close()

    t = TimeSeries(name='var_1', analysis=timeseries_string)
    t.save()

# Carregando e inserindo no banco os dados de Cliente, Role, User e Module
def load_data():
    from math import isnan
    import pandas as pd
    import dateutil.parser
    from apirest.models import Client, Role, Module, User, Group

    data_client = pd.read_csv('assets/client.csv')
    data_role = pd.read_csv('assets/role.csv')
    data_module = pd.read_csv('assets/module.csv')
    data_module_role = pd.read_csv('assets/module-role.csv')
    data_module_client = pd.read_csv('assets/module-client.csv')

    data_module_role = data_module_role.where((pd.notnull(data_module_role)), None)

    data_module_client = data_module_client.where((pd.notnull(data_module_client)), None)

    data_user = pd.read_csv('assets/user.csv')
    data_group = pd.read_csv('assets/module-group.csv')

    # Populando modelo Cliente
    for row in data_client.to_dict(orient='records'):
        c = Client(client_id = row['client_id'], 
                   client_name = row['client_name'],
                   client_tag = row['client_tag'])
        c.save()

    print (Client.objects.all())

    #Populando modelo Role
    for row in data_role.to_dict(orient='records'):
        c = Client.objects.get(pk=row['client_id'])
        r = Role(id= row['id'],
                   client_id = c, 
                   role_name= row['role_name'])
        r.save()

    for role in Role.objects.all():
        print (role)

    # Populando modelo Group
    for row in data_group.to_dict(orient='records'):
        g = Group(name = row['name'], 
                   tag = row['tag'],
                   route = row['route'],
                   hierarchy_level = row['hierarchy_level'])
        g.save()

    x = 1
    # Populando modelo Module

    for row in data_module.to_dict(orient='records'):
        g = Group.objects.get(pk = row['group_id'])
        m_r = Module(name = row['name'], 
                   tag = row['tag'],
                   route = row['route'],
                   group_id = g)

                
        m_r.save()

        roles = [Role.objects.get(pk=pos[0]) for pos in  data_module_role.loc[data_module_role['module_id'] == x].filter(like='role_id').values.tolist()]
        for role in roles:
            m_r.roles.add(role)

        clients = [Client.objects.get(pk=pos[0]) for pos in data_module_client.loc[data_module_client['module_id'] == x].filter(like='client_id').values.tolist()]
        for client in clients:
            m_r.clients.add(client)


        x += 1

    
    # Populando modelo User
    for row in data_user.to_dict(orient='records'):
        c = Client.objects.get(pk=row['client_id'])
        r = Role.objects.get(pk=row['role_id'])

        # print (type(row['creator_user_id']))

        if (isnan(row['creator_user_id'])):
            user = None
        else:
            print (row['creator_user_id'])
            user = User.objects.get(pk=row['creator_user_id'])

        u = User(id = row['id'],
                   tpid = row['tpid'],
                   client_id = c,
                   user_name = row['user_name'],
                   role_id = r,
                   user_email = row['user_email'],
                   user_phone = row['user_phone'],
                   user_type = row['user_type'],
                   creator_user_id = user,
                   creation_time = dateutil.parser.parse(row['creation_time']),
                   is_confirmed = bool(row['is_confirmed']),
                   is_active = bool(row['is_active']))
        u.save()

load_data()
load_timeseries()
    