const { SlashCommandBuilder } = require("discord.js");
const config = require("../../config/config.json");
const { SerialPort} = require("serialport");

const puertoSerial = new SerialPort(
    {
        path: "COM3", // puerto en el que esta el arduino
        baudRate: 9600
    }
);

puertoSerial.on('error', function(err){
    console.log(`Ocurrio un error: ${err.message}`);
}); //si existe un error al abrir el puerto marcara el error

puertoSerial.on("open", function(){
    console.log(`El puerto serial esta abierto en el ${puertoSerial.baudRate}`);
}); // Se abre el puerto

function sendCMD(angulo){
    puertoSerial.write(angulo.toString(), function(err){
        if(err){
            return console.log(`Error al enviar los datos al arduino ${err}`)
        }
        console.log(`Moviendo el servo al angulo${angulo}`)
    }); //funcion para mandar el angulo y escribirlo en el arduino
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("angulo")
    .setDescription("Mueve el angulo del servomotor")
    .addNumberOption(option => 
        option.setName("angulo")
            .setDescription("Numero de angulo a que se movera la mano")
            .setRequired(true)),
    async execute(interaction){
        const angulo1 = interaction.options.getNumber('angulo');
        if(!interaction.user.id == config.ownerId){
            interaction.reply("Solo mi owner puede udar este comando")
        } else {
            if (angulo1 < 0) {
                interaction.reply(`El angulo ${angulo1} es menor a 0 grados`)
            } else if(angulo1 > 180){
                interaction.reply(`El servo no puede moverse a mas de 180 grados`)
            } else {
                try {
                    sendCMD(angulo1)
                    interaction.reply(`El servo se movio a el agulo ${angulo1}`)
                } catch (mal) {
                    console.log(`Error al mover el angulo: ${mal}`)
                    interaction.reply(`Ocurrio un error al mover el servomotor`)
                }
            }
        }
    }

}