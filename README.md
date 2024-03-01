#

Controlar el movimiento de un servomotor con un bot de discord

# Bot
Para poder crear un bot, debes de ir a <a href="https://discord.com/login?redirect_to=%2Fdevelopers">Discord developer </a> y crear una aplicacion, una vez que crees la aplicacion debes ir al apartado de bot y activarlo.<br><br>
Una vez que tendas activo el bot debes de activar los intents es necesario para el correcto funcionamiento del bot, una vez que tenga los intents puedes invitarlo a tu servidor con los permisos necesarios, en lo personal lo uso con permisos de administrador<br><br>
El bot cuenta con 2 comandos solamente y estos se ejecutan con slash command, para poder prender el bot debes de ir a <a href="./bot-discord/config/config.json">Config</a> y cambiar token por el token que te aparece en el apartado de bot, ownerId debes de remplazarlo con tu ID, esto es necesario solo si los comandos seran usados por ti, cambiar guildId por la id del servidor donde quieres que se ejecuten los comandos. <br><br>
Una vez que tengas todo eso configurado debes de ejecutar deploy-commands.js para que los slash commands, una vez que se suban los comandos simplemente ejecuta index.js

# Arduino

Desde el IDE de Arduino simplemente se usa el codigo del archivo <a href="serialServo.ino">arduino </a> y cargarlo a la placa 

# Modulos

En el bot de discord se usan varios modulos como discord.js v14 (`npm i discord.js`) para el bot y serialport (`npm i serialport` ) para poder hacer las peticiones al puerto serial en el que esta el arduino

En arduino solo necesitamos el modulo de un servo, se importa con `#include <Servo.h>`

Y listo 