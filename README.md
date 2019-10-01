
# Desafio Backend Delfos IM

Olá, obrigado pelo seu interesse em participar de nossa equipe.
A *Delfos Intelligent Maintenance* está sempre buscando por colaboradores dedicados, que amem o que fazem e que sejam capacitados. Por isso, gostariamos que você fizesse este pequeno teste, para podermos te conhecer melhor como profissional!

## Sobre o Desafio
Como backender desejamos que você seja capaz de obter dados de múltiplas fontes, sendo capaz de conformá-los para as mais diversas aplicações da empresa.
Para este desafio você deve realizar aos dois testes abaixo:

## Primeiro Teste
Utilizando linguagens, frameworks e qualquer outra ferramenta de sua escolha forneça uma (ou mais de uma) *Interface de Programação de Aplicativos* (API) que consuma dados das duas fontes listadas na seção abaixo e forneça rotas como às especificadas na mesma seção.

#### Requisitos
- A API deve garantir que o formato da **resposta seguirá o padrão solicitado**, independentemente da forma com que os dados estejam em suas fontes originais;
- A API deve possuir **mensagens de erros amigáveis**;
- A API deve conter **log de erros** que possam ser facilmente localizados;
- Em caso de **perda de conexão** com a fonte de dados, ou quaisquer outros tipos de falha, a API deve ser capaz de **restabelecer a conexão** de forma automática.

#### Input de Dados
Como dito acima, existem duas fontes de dados com as quais a API deve trabalhar, você está livre para prover estes dados à ela da maneira que desejar (armazenando em um banco de dados seja relacional ou seja não relacional, salvando os arquivos internamente na API ou de qualquer outro modo que ache melhor), faça o download utilizando os links abaixo, ou baixando diretamente das pastas deste repositório:

>**Dados de Controle de Usuários**:
>Estes dados possuem informações de controle e gerenciamento de usuário. Várias empresas clientes fictícias estão registradas neles, com seus respectivos usuários, também fictícios, registrados, cada um possuindo alguma posição a ser desempenhada na empresa. As informações aqui contidas são responsáveis por coordenar quais seções (funcionalidades) das nossas aplicações estão disponíveis para quais empresas clientes, e quais usuários destas empresas possuem acesso às seções.

[Client](./assets/client.csv) - Dados sobre as empresas clientes;
[User](./assets/user.csv) - Dados sobre os usuários que trabalham nestas empresas;
[Role](./assets/role.csv) - Dados sobre os cargos das empresas;
[Module](./assets/module.csv) - Dados sobre os módulos criados em nossas aplicações;
[Module / Client](./assets/module-client.csv) - Relação sobre os módulos disponíveis para cada empresa;
[Module / Role](./assets/module-role.csv) - Relação sobre os módulos disponíveis para cada cargo;
[Group](./assets/module-group.csv) - Dados sobre os grupos aos quais os módulos pertencem, *caso estes estejam inseridos em algum grupo*;

>**Dados de Análise**:
>O carro chefe de nossa empresa é fornecer inteligência comercial aos nossos usuários, portanto dados brutos (séries temporais, dados de sensores e outros) são essenciais para nossas aplicações. O arquivo abaixo possui dados de uma série temporal.

[Timeseries](./assets/analysis.json) - Dados de uma análise de série temporal;

#### Output da API
Desejamos as duas rotas abaixo como output da API:

**/users**
Lista os usuários, qual seu cargo na empresa e quais a módulos ele tem acesso. Exemplo:
```json
[
	{  
	    "name":"user1_client_2015",  
	    "role":"Manager",  
	    "modules": [
		    { "id": 9, "description": "Neighboring Devices" },
			{ "id": 10,"description": "Error Predicted Values" }
		 ]  
	},
	
	...
	
	{
		"name": "user1_client_39",
		"role": "Manager",
		"modules": []
	}
	
	...
]
```

**/analisys**
Retorna os dados de análise adaptados para o formato de um gráfico e de uma table, seguindo o seguinte formato:

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

**ATENÇÃO**: utilize os métodos de requisição que desejar, apenas deixe as instruções de como fazer a chamada à API em algum *readme*, ou como complemento deste arquivo. Para podermos testar o resultado final de seu trabalho.

*Sinta-se livre para "se divertir" com os dados que fornecemos, caso deseje explorar suas relações e montar rotas mais complexas além destas. Nós damos muito valor à criatividade e aocarinho dedicado ao produto!*

## Segundo Teste
*Este não é um teste de implementação, porém é tão importante quanto o anterior*.

Com suas palavras, *usando imagens, diagramas, ou quaisquer outras ferramentas*, **descreva como seria a arquitetura de um sistema que atualiza dados vindo de sensores, em tempo real, e sua comunicação com o front-end**. Tente explicar o processo completo do banco ao front-end de forma clara, sem deixar pontas soltas. *Fique à vontade em sugerir quaisquer tecnologias existentes no mercado, ou se quiser fazer alguma pequena implementação como exemplo*.

## Pronto para começar o desafio?
- Faça um "fork" desse repositório na sua conta do Github
- Crie uma branch com o seu nome e sobrenome ex: ```andre-oliveira```
- Na raiz do projeto você deve obrigatoriamente criar duas pastas ```teste-1``` e ```teste-2```, cada uma possuirá respectivamente os testes acima.
- Após completar o desafio, crie um "pull request" nesse repositório comparando a sua branch com a master.
- Receberemos uma notificação do seu pull request, faremos a correção da sua solução e entraremos em contato com o email da conta do github em que foi executada o desafio.
- Adicione instruções claras de como executar localmente o repositório. **Só avaliaremos seu resultado do primeiro teste se pudermos executá-lo**, então tente deixar a execução da API o mais claro possível.

## FAQ

**Preciso necessariamente fazer um fork do projeto?**

Sim, pois nosso processo de correção dos testes leva em conta seus commits e branchs, *caso sejam criadas mais de uma*. Com isso conseguiremos ver a evolução de seu trabalho com o tempo, percebendo valores que não podem ser captados apenas olhando para o resultado final de um trabalho.
*Lembre-se de subir seu código contantemente, a medida que for desenvolvendo o teste, pois facilitará este processo.*

**Devo subir os arquivos do segundo teste neste repositório mesmo não possuindo códigos?**

Sim, pois desejamos centralizar todo o processo de seleção neste fork de repositório. Então suba os arquivos mesmo que seja necessário compactá-los em um arquivo .zip.

**Aonde estão os assets?**

Na pasta **assets**, ou nos links deste *readme* deste projeto estão todos os documentos necessáros para o teste.

**Existe algum padrão de estilo de código, framework ou alguma linguagem especificos a serem utilizados?**

Não, na Delfos somos adeptos a quaisquer novos tipos de tecnologias, frameworks, novas técnicas e ideias, basta que provem ter bom valor. Então sinta-se livre para programar do seu jeito, utilizando suas próprias tecnicas, queremos conhecer mais de você e de sua experiência como profissional!

**Tenho mais dúvidas, com quem posso entrar em contato?**

Entre em contato com André Oliveira (andre.oliveira@delfosim.com). Evie como *subject* do email **Sobre o teste - Backend Delfos IM**.
Sinta-se livre para tirar quaisquer dúvidas, nossa equipe estará disponível o máximo possível para lhe auxiliar.