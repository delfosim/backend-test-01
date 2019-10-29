# Exemplo de Arquitetura

![alt text](imagem.png)

## Explicando a arquitetura acima pela minha visão

![alt text] Existem os nós sensores, que é neles que ficam acoplados os sensores, esse nós podem ser alimentados por baterias pequenas carregadas por placas de energia fotovoltaica ou de outra forma. Esse nós enviam os dados coletados para um nó coordenador, que tem o papel de salvar as informações no banco de dados, via alguma API utilizando algum protocolo UDP, CoAP. Após a coletado de dados e as informações dos sensores estarem salvas no banco de dados, podemos desenvolver uma API, que irá disponibilizar as informações coletadas. Com a API desenvolvida podemos desenvolver uma interface Web ou um aplicativo que irá consumir esses dados e exibi-los.

## Explicando a arquitetura acima pela visão do artigo (Internet of Things for Smart Cities)

A imagem acima demonstra uma exemplo de arquitetura IoT urbana real, é o Padova Smart City, que têm o obetivo desta implementação foi promover a adoção antecipada de dados abertos e de soluções de TIC na administração pública.
A aplicação consiste em um sistema de coleta de dados ambientais e de monitoramento da ilumincação pública, por meio de nós sem fio, equipados com diferentes tipos de sensores, colocados em postes de luz de rua e conecatados à Internet através de uma unidade de gateway. Este sistem permite coletar parâmetros ambientais interessantes, como o nível de CO (monóxido de carbono), temperatura do ar, ruído, vibrações e assim por diante, enquanto fornece um mecanismo simples para verificar o funcionamento correto do sistema de ilumincação pública medindo a intensidade da luz em cada poste. A seguir é descrito em mais detalhes as funções dos dispositivos envolvidos no sistema.

Poste (Luz de rua): É a parte da
folha do sistema, onde os nós da IoT são colocados. Cada rua está geograficamente localizada no mapa da cidade e exclusivamente associada ao nó IoT ligado a ele, de modo que os dados da IoT pode ser reforçado com informações do contexto. O monitoramento do funcionamento correto das lâmpadas é efetuado por meio de sensores de fotômetro (colocar imagem do sensor) que diretamente medem a intensidade da luz emitida pelas lâmpadas (ou, na verdade, qualquer fonte de luz que atinja o sensor) em intervalos de tempo regulares, ou a pedido. Os nós da IoT sem fio também são equipados com sensores de temperatura e umidade, que fornecem dados relativos às condições climáticas, e um nó também é equipado com um sensor de benzeno (C6H6), que monitora a qualidade do ar.

Nós da IoT são geralmente alimentados por baterias pequenas, apesar de que uma conexão a uma rede de baixa
potência é exigida pelo sensor de benzeno. Os nós sensores foram hospedados em um escudo de plástico transparente que protege as peças eletrônicas de fenômenos atmosféricos (como chuva ou neve), permitindo ao mesmo tempo a circulação de ar e luz para a medição correta de umidade, temperatura e intensidade da luz.

Tecnologias da camada de Enlace Constrangido: Os nós da IoT montados nos pólos de rua iluminada formam uma nuvem 6LoWPAN multihop, usando IEEE 802.15.4 na camada de enlace. Funcionalidades de roteamento são
fornecidas pelo protocolo de roteamento para baixo consumo e redes com perdas IPV6. Os nós da IoT recebem endereços IPV6 exclusivos, devidamente compactado de acordo com o padrão 6LoWPAN. Cada nó pode ser individualmente acessível a partir de qualquer lugar da Internet por meio do IPV6 / 6LoWPAN. Alternativamente, cada nó pode publicar as suas próprias características e dados executando um servidor COAP, embora esse recurso não esta implementado no testbed. Em ambos os casos, é necessária uma porta de entrada para ser a ponte com a nuvem 6LoWPAN.

Gateway RSSF (WSN): O gateway tem o papel de interface da tecnologia da camada de enlace limitado usado na nuvem de sensores com as tecnologias tradicionais de WAN usados para fornecer conectividade para os servidores back-end centrais. O gateway (porta de entrada), portanto, desempenha o papel de roteador de borda 6LoWPAN e nó raiz RPL. A conexão com os serviços de back-end é fornecida por tecnologias de comunicação sem restrições comuns, como a fibra óptica neste exemplo especifico.

Proxy HTTP-CoAP: Ele permite a comunicação transparente com dispositivos CoAP. Este serviço é colocado juntamente no quadro de distribuição do gateway no sistema do Padova Smart City, embora também poderá ser colocada em servidores back-end (processos de servidores), tornando-se assim possível controlar varias portas de acesso, utilizando uma única instância de proxy.

Sistema de Banco de Dados: O servidor de banco de dados recolhe o estado dos recursos que ser monitorados em tempo pela comunicação com o servidor HTTP-CoAP, que por sua vez se encarrega de recuperar os dados necessários a partir da fonte adequada. Os dados armazenados no banco de dados são acessíveis através de tecnologias de programação web tradicionais (Web Site, exportação em qualquer formato de dados abertos utilizando linguagens de programação web). Na rede Padova Smart City, o servidor de banco de dados é realizado no Gateway RSSF.

Mesmo que este sistema seja um simples aplicação do conceito de IoT, ainda envolve uma série de diferentes dispositivos e tecnologias. 

Os padrões IETF para IoT incluem uma arquitetura de serviços web para serviços da IoT, o que tem sido amplamente documentado na literatura como
uma abordagem muito promissora e flexível. Na verdade, os serviços webpermitem realizar um sistema flexível e interoperável que pode ser estendido para os nós da IoT, por meio da adocao do paradigma baseado em web conhecido como REST.
Serviços IoT projetados em concordância com o paradigma REST exibem uma semelhança muito forte com os serviços web tradicionais, assim, facilitando
bastante a adoção e uso da IoT por usuários finais e desenvolvedores de serviços, que será capaz de reutilizar facilmente a maior parte do conhecimento adquirido a partir das tecnologias web tradicionais no desenvolvimento de serviços para redes que contêm objetos inteligentes