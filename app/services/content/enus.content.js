module.exports = {
    'language': 'pt-BR',
    'disclaiMerList': [
        'desenvolvedor web fullstack',
        'proficiente em javascript e ASP.NET',
        'scrum master, agilista',
        `<a href="https://www.google.com.br/maps/place/R.+Anita+Garibalde,+100+-+Alianca,+Ribeir%C3%A3o+Pires+-+SP/@-23.6941924,-46.4343091,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce6c710083d1f7:0x49cad383baff7591!8m2!3d-23.6941973!4d-46.4321204?hl=pt-BR"
            class="icon state-hidden-print"
            target="_blank">
            <i class="glyphicon glyphicon-map-marker"></i>
            ribeirão pires, são paulo
        </a>
        <a href="#"
            class="icon state-hidden-screen"
            target="_blank">
            <i class="glyphicon glyphicon-map-marker"></i>
            ribeirão pires, são paulo
        </a>
        `
    ],
    'aboutMe': {
        'title': 'SOBRE MIM',
        'content': `Minha história com o desenvolvimento de software começou relativamente cedo. Com 15 anos fiz meus 
        primeiros programas em access (shame !), e daí não parei mais. De lá para cá foram dez longos anos e
        uma carreira da qual não me arrependo em, praticamente, nada ! Tenho <strike class="state-hidden-print" id="oldAge"></strike> <span class="dark bold" id="age"></span>
        <span class="state-hidden">
            e trabalhei em diversos lugares e aprendi diversas linguagens, mas o amor da minha vida sempre foi javascript.
            Me considero proficiente em javascript, css, html, c#.net e, nos últimos tempos tenho buscado aprender python e node.js. 
            Em 2015, tive a oportunidade de passar 6 meses na <span class="dark bold">irlanda</span>.
            Foi uma experiência fantástica, e ainda pude me tornar <span class="dark bold">fluente em inglês</span>. 
            Também sou agilista, fissurado por produtividade. Nas horas vagas eu leio, jogo video-game, viajo e 
            me dedico a aprender novas tecnologias.
        </span>`,
        'label': 'ver mais'
    },
    'habilities': {
        'title': 'PRINCIPAIS HABILIDADES',
        'content': [
            {
                'topic': 'Angular 4+',
                'level': 'advanced',
                'levelText': 'avançado'
            },
            {
                'topic': 'Angular.js',
                'level': 'advanced',
                'levelText': 'avançado'
            },
            {
                'topic': 'HTML5 / Web Accessibility',
                'level': 'advanced',
                'levelText': 'avançado'
            },
            {
                'topic': 'CSS3 / Compiladores CSS (SASS / Stylus)',
                'level': 'advanced',
                'levelText': 'avançado'
            },
            {
                'topic': 'ASP.NET (MVC / Web Forms / WCF / Web API), C#',
                'level': 'advanced',
                'levelText': 'avançado'
            },
            {
                'topic': 'Mobile Híbrido (Web View) / Ionic / Sencha Touch',
                'level': 'intermediate',
                'levelText': 'intermediário'
            },
            {
                'topic': 'CSS Animations',
                'level': 'intermediate',
                'levelText': 'intermediário'
            },
            {
                'topic': 'DevOps / Configuração de CI (Team City / Cruise Control.NET)',
                'level': 'basic',
                'levelText': 'básico'
            },
            {
                'topic': 'node.js',
                'level': 'basic',
                'levelText': 'básico'
            },
            {
                'topic': 'python',
                'level': 'basic',
                'levelText': 'básico'
            },
        ]
    },
    'certifications': {
        'title': 'CERTIFICAÇÕES',
        'emitters': [
            /*
            {
                'name': 'Scrum.org',
                'certificates': [
                    {
                        'title': 'scrum master 1.',
                        'address': '#'
                    },
                    {
                        'title': 'scrum master 2.',
                        'address': '#'
                    }
                ]
            },
            */
            {
                'name': 'Microsoft (MCSD Web Developer)',
                'certificates': [
                    {
                        'title': '70-480 - Programando em HTML5 e CSS3.',
                        'address': 'https://www.microsoft.com/pt-br/learning/exam-70-480.aspx'
                    },
                    {
                        'title': '70-486 - Desenvolvendo aplicações ASP.NET.',
                        'address': 'https://www.microsoft.com/pt-br/learning/exam-70-486.aspx'
                    }
                ]
            }
        ]
    },
    'experiences': {
        'title': 'EXPERIÊNCIAS',
        'workplaces': [
            {
                'name': 'BRQ Tecnologia, São Paulo',
                'address': 'http://www.brq.com/',
                'periods': ['novembro / 2016 - atual'],
                'role': 'desenvolvedor frontend',
                'description': `A BRQ é uma consultoria de desenvolvimento de software especializada em atender empresas do setor
                financeiro. Atualmente trabalho prestando serviço para o Itaú Unibanco, tendo como responsabilidades principais desenvolver
                novas funcionalidades para o aplicativo móvel do banco, utilizando com tudo, tecnologias web.`,
                'activities': {
                    'title': 'atividades desenvolvidas',
                    'items': [
                        'interfaces web responsivas utilizando ASP.NET Web Forms',
                        'integração de interface com serviços de backend para buscar e enviar dados',
                        'componentes web reutilizáveisem Angular2',
                        'integração de interfaces web com app nativo em que ela deve ser renderizada'
                    ]
                },
                'deliveries': {
                    'title': 'principais entregas',
                    'items': [
                        'redesign do resgate de poupança do app Itaú',
                        'fluxo de contratação e cancelamento de seguro de vida através do app Itaú'
                    ]
                }
            },
            {
                'name': 'Geosiga, soluções em geoposicionamento, São Paulo',
                'address': 'https://www.geosiga.com.br/',
                'periods': [
                    'novembro / 2014 - novembro / 2015',
                    'julho / 2012 - julho / 2013'
                ],
                'role': 'desenvolvedor fullstack',
                'description': `A Geosiga é uma empresa que trabalha com rastreamento de frotas. Trabalhei na área de desenvolvimento atuando
                tanto em projetos internos como no principal produto da empresa. Utilizava principalmente a tecnologia ASP.NET,
                mas também utilizei javascript para apps mobile híbridos.`,
                'deliveries': {
                    'title': 'principais entregas:',
                    'items': [
                        'software capaz de enviar comandos de bloqueio e desbloqueio para veículos',
                        'construção de api REST para o principal produto da empres',
                        'ambiente de integração continua para o principal produto da empresa',
                        'aplicativo em que o cliente poderia ver a localização do seu veículo'
                    ]
                },
                'activities': {
                    'title': 'atividades desenvolvidas',
                    'items': [
                        'aplicações web com a tecnologia ASP.NET Web Forms, englobando front e backend.',
                        'interfaces em javascript utilizando o framework Sencha Touch para app mobile híbrido.',
                        'aplicações backend utilizando ASP.NET Web API.',
                        'interfaces em javascript utilizando angular.js consumindo APIs REST.',
                        'scripts de banco de dados para consultas, alterações e inclusões utilizando SQL Server.',
                        'ambiente de integração contínua para aplicações ASP.NET utilizando a ferramenta Team City.',
                        'scripts powershell para desempenhar tarefas no ambiente de integração contínua.'
                    ]
                },
            },
            {
                'name': 'OOHM Tecnologia, São Paulo',
                'address': 'http://www.oohm.com/',
                'periods': [
                    'julho / 2013 - julho / 2014',
                ],
                'role': 'desenvolvedor fullstack e scrum master',
                'description': `A OOHM é uma empresa de consultoria em desenvolvimento de software que presta serviço
                para clientes de diferentes ramos incluindo o setor imobiliário, comércio varejista e até
                mesmo um sindicato patronal. No tempo em que estive lá trabalhei com diversos projetos mas o que
                trabalhei por mais tempo foi o e-commerce do sindicado dos comerciantes do ABC, o Mais Lojas ABC,
                que é um marketplace para os comerciantes da região. Utilizei, na maior parte dos projetos
                ASP.NET MVC, mas também trabalhei um pouco com PHP. Trabalhei também como Scrum Master.`,
                'deliveries': {
                    'title': 'principais entregas',
                    'items': [
                        'Scrum Master do projeto Mais Lojas ABC',
                        'suite de testes em PHP para e-commerce da loja de móveis OPA',
                        'desenvolvimento de interfaces e backend para software na área imobiliária'
                    ]
                },
                'activities': {
                    'title': 'atividades desenvolvidas',
                    'items': [
                        'aplicações web com a tecnologia ASP.NET Web Forms, englobando front e backend.',
                        'integração com bancos de dados SQL Server utilizando ORM Entity Framework.',
                        'testes automatizados para interfaces Web utilizando Selenium (.NET e PHP).',
                        'ambiente de integração contínua para aplicações ASP.NET utilizando a ferramenta Cruise Control.NET.',
                        'condução das cerimônias SCRUM (review, planning, daily e retrospectiva) atuando como scrum master.'
                    ]
                }
            }
        ]
    },
    'education': {
        'title': 'EDUCAÇÃO',
        'courses': [
            {
                'name': 'informática para negócios',
                'institution': 'Fatec Mauá',
                'address': 'http://www.fatecmaua.com.br/',
                'status': 'concluído, 2017',
            },
            {
                'name': 'informática para internet',
                'institution': 'Etec Lauro Gomes',
                'address': 'http://www.etelg.com.br/',
                'status': 'concluído, 2012',
            },
            {
                'name': 'eletricista de manutenção',
                'institution': 'Senai A. Jacob Lafer',
                'address': 'https://santoandre.sp.senai.br/',
                'status': 'concluído, 2008',
            }
        ]
    }
};