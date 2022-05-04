const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready",() => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.guilds.cache.size} canais, em ${client.guilds.cache.size} servidores.`);
    client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/NoyzerZ'} });
});


client.on("guildCreate", guild =>{
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`);

});
client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`serving ${client.guilds.cache.size} servers`);
});

client.on("message", async Message =>{
    if(Message.author.bot) return;
    if(Message.channel.type === "dm") return;

    const args = Message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLocaleLowerCase();

    if(comando === "ping"){
        const m = await Message.channel.send("ping");
        m.edit(`A latência é ${m.createdTimestamp - Message.createdTimestamp}ms. A latência da API é ${Math.round(client.ping)}ms`);
        

    }
    if(comando === "igor gay"){
        const m = await Message.channel.send("igor gay");
        m.edit(`O igor é estremamente ${m.createdAt - Message.createdAt}`);

    }

    
    
    
});

client.login(config.token);

