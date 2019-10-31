
# Desafio Backend Delfos IM

Obrigado pela oportunidade de participar do desafio de seleção, abaixo tem uma breve explicação sobre como utilizar a API.

## Teste 1
Utilizei o Django (Framework Python), para criar a API do teste 1. 
### Deploy no Heroku 
Decidi por fazer o deploy no Heroku, para que fosse mais fácil visualizar o que foi feito. Mas uma explicação de como executar o código será feita na próxima sessão.
Deploy da aplicação no Heroku, no link: https://teste1-delfos.herokuapp.com/users/

### Preparando o Ambiente

- Crie uma virtualenv: python3 -m venv myenv (Isso manterá seus pacotes python seguros e organizados para o projeto)
- Dentro da pasta do projeto (teste1), tem um arquivo requirements-dev.txt. Execute este arquivo com: pip install -r requirements-dev.txt. Isso instalará todas as dependências para o projeto ser executado.

### Executando a aplicação
Siga os passos abaixo para executar:

- Entre na pasta do projeto que contém o arquivo manage.py.
- Execute o manage.py: python manage.py runserver

Pronto, agora seu servidor django deve estar rodando. Basta abrir o navegador e usar o link: http://127.0.0.1:8000/

### Descrevendo a API
Como pedido no desafio, criei duas rotas: /users e /analysis.

Mas além dessas, criei também: 

**/analysis/<int:pk>** 
Lista as informações de um Time Series específico por ID.
```json
{
	1: {
		"chart": [
		   {
			"name": "var_1",  
                	"data": [
	                   [ 1506951000000, 153.81 ],
	                ...
                	]
            	   }
                   ...
        	],
        	"table": [
	           { 
		        "var": "var_1", 
		        "sample_time": 1506951000000, 
		        "value": 153.81 
		   },
	           ...
        	]
    	},
    ...
}
```

**/clients** 
Lista todos os clientes cadastrados
```json
[
	{  
	    "client_id":"2015",  
	    "client_name":"Client1",  
	    "client_tag": "client_1"
	},
	
	...
	
	{
	    "client_id":"48",  
	    "client_name":"Client11",  
	    "client_tag": "client11"
	}
	
	...
]
```

**/roles** 
Lista todas as Roles (Funções) dos funcionários
```json
[
	{  
	    "id":"0",  
	    "role_name":"Manager",  
	    "client_id": "2015"
	},
	
	...
	
	{
	    "id":"12",  
	    "role_name":"Worker",  
	    "client_id": "2011"
	}
	
	...
]
```
**/modules** 
Lista todas as Roles (Funções) dos funcionários
```json
[
    {
	"id": 1,
	"name": "Experimental",
	"tag": "experimental",
	"route": "/experimental",
	"group_id": 1,
	"roles": [],
	"clients": []
    },
		
    ...
	
    {
        "id": 4,
        "name": "Overview",
        "tag": "overview",
        "route": "/overview",
        "group_id": 3,
        "roles": [
            1,
            8
        ],
        "clients": [
            2015,
            2011
        ]
    },
 
    ...
]
```

**/groups** 
Lista todas os Grupos
```json
[
    {
        "id": 1,
        "name": "User Management",
        "tag": "user-management",
        "route": "/user-management",
        "hierarchy_level": 0
    },
	
	...
	
    {
        "id": 2,
        "name": "Main",
        "tag": "main",
        "route": "/main",
        "hierarchy_level": 0
    },
	
	...
]
```
	

## Teste 2
Realizei uma pesquisa para me aprofundar mais no teste 2 e escrevi uma pequena redação explicando como funciona todo o processo, desde a captura dos dados pelo sensor, até esses dados serem exibidos no front-end. Explicando quais softwares podem ser usados e ainda apresentando um exemplo.




