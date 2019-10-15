# Projeto-1
  
## Requirementos 
* Virtual Environment
* Python3

## Instalação
No diretório teste-1
* Criação virtual enviroment
  * python3 -m venv env (Criação virtual enviroment)

* Ativar virtual environment em: ProjectAllya/tickets
  * source bin/activate
  
* Instalar as depedências do projeto
    * pip install -r requirements.txt
    
No diretório delfos_sim    
  
  * Criar Banco de dados
    * python manage.py migrate --run-syncdb

 * Popular Banco de dados
   * python manage.py shell
   * digite o seguinte comando:
        exec(open('populate_db.py').read())
        quit()
        
  * Iniciar a aplicação:
    * python manage.py runserver
  
## Utilização

Listar usuários
   
   * Acessar o endpoint http://localhost:8000/api/list/user
   
Analysis

   * Acessar o endpoint http://localhost:8000/api/analysis
   
