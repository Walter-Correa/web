---
title: Endereços de Crash
---

Abaixo uma lista com os mais comuns endereços de crash, os quais podem ser usados para identificar problemas e resolve-los, tal como previnir que ocorram futuramente. A maioria das vezes o crash ocorre por problemas no script. Mas, é seguro mencionar que o SA-MP é deveras estável atualmente.

| FREQUÊNCIA  | ENDEREÇO                 | CAUSE                                                                                                                                                                                                                      | SOLUTION                                                                                                                                                                                                                                                                                                          |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Raro        | 0x00000000               | SA-MP não está inicializando.                                                                                                                                                                                              | Reinstale o jogo, verifique se o modo single-player está funcionando, caso tenha mods remova-os.                                                                                                                                                                                                                  |
| Raro        | 0x006E3D17               | Problemas relacionados com skin. Ocorre na maioria das vezes quando o jogador tenta mudar sua skin em um veículo, ou quando está saindo/entrando em um.                                                                    | Tenha certeza que o player está a pé antes de realizar trocas de skin.                                                                                                                                                                                                                                            |
| Raro        | 0x0058370A               | Difícil de acontecer. Parece ter relações com veículos e a câmera. Ocorre quando o script tenta colocar determinado jogador em um veículo. O veículo que o jogador está sendo teleportado ainda não foi criado/renderizado.| Aguarde algumas centenas de milisegundos ao teleportar um jogador para um veículo recém criado. Outra solução é utilizar o SetCameraBehindPlayer antes de realizar o Teleport.                                                                                                                                    |
| Raro        | 0x0040F64C               | Problema relacionado a permissões no Windows 7 / Vista. Problema no instalador da versão que o Cliente do SA-MP usa.                                                                                                       | Faça o update para o SA:MP 0.3d. Caso o problema ainda ocorra, renomeie a pasta do GTASA.                                                                                                                                                                                                                         |
| Raro        | 0x0059F8B4               | Ocorre quando o cliente do SA-MP tem problemas ao carregar objetos. A maioria das vezes o problema ocorre no arquivo samp.img, quando o mesmo não existe ou está com as permissões incorretas.                             | Reinstale o cliente. Tente executar o instalador como administrador caso esteja usando o Windows Vista / 7.                                                                                                                                                                                                       |
| Raro        | 0x00746929 OU 0x0081214A | Má configuração do lado do cliente.                                                                                                                                                                                        | Cliques...                                                                                                                                                                                                                                                                                                        |
| Frequente   | 0x007F0BF7               | Relacionados a upgrade em veículos. Geralmente causado ao tentar colocar componentes inválidos (EX spoilers em uma moto). Mods do lado do cliente também podem gerar esse opcode.                                          | Há vários scripts no fórum do SA-MP que tem como o objetivo previnir e checar esse erro.                                                                                                                                                                                                                          |
| Frequente   | 0x00544BC8               | Relacionado a objetos. Ocorre tipicamente quando há muitos objetos sendo carregados do lado do cliente (mais do que o computador do mesmo consegue aguentar).                                                              | Uma solução prática seria utilizar um plugin de Handle/streamer. Muitos plugins de streaming tem em sua configuração o tanto de objetos que podem ser carregados para um player de uma vez.                                                                                                                       |
| Frequente   | 0x00415D47               | Relacionado a objetos. Ocorre tipicamente quando há muitas texturas sendo carregadas ao mesmo tempo para o cliente.                                                                                                        | Poblema do tipo Low-level que é difícil de localizar e corrigir. Acho que pode ser algo relativo a colisões, algo randômico, que afeta determinado objeto dependendo das circunstâncias. Tente usar o processo de eliminação para remover o objeto/grupo de objetos que está causando o problema em seu gamemode. |
| Frequente   | 0x00536DF4               | Relacionado a objetos. Ocorre tipicamente quando há muitos objetos texturizados sendo carregados ao mesmo tempo para o cliente.                                                                                            | Veja acima.                                                                                                                                                                                                                                                                                                       |

| MENSAGEM                         | CAUSA                                                                                                                                                                                                                                                                                                                                                                                                                                               | SOLUÇÃO                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Exception 0xC0000005 at 0x5E5815 | Difícil de identificar. O método que esse endereço aponta faz uma carga gigantesca de tarefas. Ele processa o blend de animações baseado na posição atual do PED e em seguida lida com o áudio, o mesmo é executado diretamente após a função que _dá_ as armas... Presumo que ocorra a execução de um evento no script no exato momento que o jogador tenta entrar em um veículo (ex. Receber uma arma, teleportar ou algo parecido).              | -                                                |
| Exception 0x0000005 at 0x534134  | Erro de acesso/permissão Windows 7 / Vista.                                                                                                                                                                                                                                                                                                                                                                                                         | Running SA:MP as administrator appear to fix it. |
| Exception 0xC0000005 at 0x544BC8 | Veja 0x00544BC8.                                                                                                                                                                                                                                                                                                                                                                                                                                    | Veja 0x00544BC8                                  |
| Exception 0xC0000005 at 0x536DF4 | Veja 0x00544BC8.                                                                                                                                                                                                                                                                                                                                                                                                                                    | Veja 0x00544BC8                                  |
| Exception 0xC0000005 at 0x7F120E | Upgrade de veículo inválido.                                                                                                                                                                                                                                                                                                                                                                                                                        | [Veja mais aqui](CommonIssues)                   |