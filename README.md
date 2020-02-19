
# DevRadar - Semana Omnistack 10
*Aplicação que permite o cadastro de devs via web e localização dos mesmos via aplicação mobile com filtro por tecnologias e localização, utilizando um backend em Node, front web ReactJS e mobile React Native*

![](https://img.shields.io/github/stars/LuPeBreak/DevRadar---Omnistack10) ![](https://img.shields.io/github/forks/LuPeBreak/DevRadar---Omnistack10) ![](https://img.shields.io/github/issues/LuPeBreak/DevRadar---Omnistack10)

## Funcionalidades

- API Backend Node para cadastro de devs
	- API
	- mongoDB ( [Mongoose][8] )
	- Websocket


- Frontend web em react para cadastro de devs
-  Aplicaçao Mobile para pesquisa por devs
	- [SocketIO][9]
	- Integraçao com googlemaps
	- Filtro por tecnologias e distancia

## Requisitos
 - [Node][1]
 - [React][2]
 - [Yarn][3] *( Não obrigatorio )*
 - [MongoDB][4] *( Utilize a versao cloud gratuita ) ( ou mude as configuraçoes para se adaptar ao seu DB)*
 - [Expo][7]
 - [Android Studio ][5]( ou aplicaçao que forneça emulador) ( baixe e configure o emulador.  [como configurar?][6] )
 

## Como iniciar aplicaçao
### Backend
Dentro do diretorio /backend
1. Execute o comando no cmd:
`yarn install`
2. Configure o arquivo .env com o link do seu DB ( o arquivo possui um exemplo )
3. Execute o comando no cmd:
` yarn dev`

### Frontend Web 
Dentro do diretorio /web
1. Execute o comando no cmd:
` yarn install`
2. Execute o comando no cmd:
`yarn start`
3. Cadastre seus devs fornecendo o github e tecnologias

### Mobile
Dentro do diretorio /mobile
1. Execute o comando no cmd:
`yarn install`
2. Execute o comando no cmd:
`yarn start`
3. Inicie o emulador android e configure a localizaçao
4. Clique em Run on Android device/emulator na pagina aberta pelo expo
5. Pesquise pelos devs informando a tecnologia desejada ( *Atençao Camel Case* )


[1]: https://nodejs.org/en/ "Node"
[2]: https://facebook.github.io/react-native/ "React"
[3]: https://yarnpkg.com/ "Yarn"
[4]: https://account.mongodb.com/ "MongoDB"
[5]: https://developer.android.com/studio "Android Studio "
[6]: https://docs.expo.io/versions/latest/workflow/android-studio-emulator/ "como configurar?"
[7]: https://expo.io/learn "Expo"
[8]: https://mongoosejs.com/ "Mongoose"
[9]: https://socket.io/ "SocketIO"
