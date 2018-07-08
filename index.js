const Discord = require("discord.js");

var prefix = ",,";

var bot = new Discord.Client();

bot.on("ready", function(){
	console.log(`Online: ${new Date()}`);
	bot.user.setActivity(".＊ 粵典﹍×°執字會°°°×．﹏\\");
});

bot.on("message", function(message){
	
	
	//Ignore bots
	if (message.author.bot) return;
	
	//if(message.content.indexOf(prefix) !== 0) return;
	
	if	(message.content.indexOf(prefix) !== 0) {
		//const args1 = message.content.split(/ +/g);
		//const command1 = args1.shift().toLowerCase();
		const command1 = message.content;
		
		var isZousan = command1.includes("早晨");
		var isZousan1 = command1.includes("おはよう");
		var isZoutau = command1.includes("早抖");
		var isZoutau1 = command1.includes("早唞");
		//var isKaty = command1.includes("奇啲");
		var isKaty1 = command1.includes("<@!440547246270971904>");
		var isKaty2 = command1.includes("<@440547246270971904>");
		
		//var isKing = command1.includes("國王");
		var isJohnas = command1.includes("johnas");
		var isHK = command1.includes("香港");
		var isNgaanngaan = command1.includes("顏顏");
		var isNgaanngaan1 = command1.includes("<@!274862591212388352>");
		var isNgaanngaan2 = command1.includes("<@274862591212388352>");
		var isHeitung1 = command1.includes("<@!443635312984588288>");
		var isHeitung2 = command1.includes("<@443635312984588288>");
		
		
		
		//if (isKaty) {
		//	message.channel.send("奇啲 :heartpulse: :heartpulse:");
		//}
		if (isKaty1 || isKaty2) {
			message.channel.send("奇啲 :heartpulse: :heartpulse:");
		}
		if (isNgaanngaan1 || isNgaanngaan2){
			message.channel.send("加油啊顏醫師:heart:");
		}
		//if (isHeitung1 || isHeitung2){
		//	message.channel.send("潛水中請稍候...");
		//}
		//if (isKing) {
		//	message.channel.send(":bow::skin-tone-2::bow::skin-tone-2::bow::skin-tone-2::bow::skin-tone-2:");
		//}
		//if (isHK) {
		//	message.channel.send("I <3 Hong Kong");
		//}
		if (isZousan || isZousan1) {
			message.channel.send("早晨 <3 <3");
		}
		if (isZoutau || isZoutau1) {
			message.channel.send("早抖 <3 <3");
		}
		//if (isJohnas) {
		//	message.channel.send("憨鳩 :rolling_eyes:");
		//}
		
		//1st
		
		
		
		
		
	}
	
	else {
		
		//const args = message.content.slice(prefix.length).trim().split(/ +/g);
		//const command = args.shift().toLowerCase();
		
		var args = message.content.substr(message.content.indexOf(' ')+1);
		const command = message.content.slice(prefix.length).trim().split(/ +/g).shift().toLowerCase();
		console.log("Args: " + args);
		console.log("Command: " + command);
		
		if (command === "say"){
			message.channel.send(args);
		}
		
		
		if (command === "jd") {
			
			args = message.content.slice(prefix.length).trim().split(/ +/g);
			args.shift();
			
			console.log(args);
			console.log(args.length);
			
			if (args.length === 0) {
				var theLink = "畀條粵典隨機覆核嘅 link 你： " + "https://words.hk/zidin/ceoigei/";
				message.channel.send(theLink);
			}
			
			if (args.length === 1) {
				var theLink = "畀條粵典 link 你： " + "https://words.hk/zidin/" + args;
				message.channel.send(theLink);
			}
			
			
			if (args.length > 1) {
				var theWords = args[0];
				for (let i = 1; i < args.length; i++){
					theWords += "+";
					theWords += args[i];
				}
				var theLink = "畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + theWords;
				message.channel.send(theLink);
			}
			
			
		}
		
		if (command === "jds") {
			args = message.content.slice(prefix.length).trim().split(/ +/g);
			args.shift();
			
			if (args.length === 1) {
				var theLink = "畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + args;
				message.channel.send(theLink);
			}
			
			
			if (args.length > 1) {
				var theWords = args[0];
				for (let i = 1; i < args.length; i++){
					theWords += "+";
					theWords += args[i];
				}
				var theLink = "畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + theWords;
				message.channel.send(theLink);
			}
		}
		
		
		
		/*
		if (command === "calc"){
			
			var theAns = eval(args);
			message.channel.send(theAns);
		}
		*/
	}
	console.log("Message: " + message.content);
});



//process.env.BOT_TOKEN


bot.login(process.env.BOT_TOKEN);


