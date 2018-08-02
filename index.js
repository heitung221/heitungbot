const Discord = require("discord.js");

const mathjs = require('mathjs');

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
		const author1 = message.author;
		
		//send Time:
		var date = new Date(message.createdTimestamp);
		// Hours part from the timestamp
		var hours = date.getHours();
		// Minutes part from the timestamp
		var minute = date.getMinutes();
		var minutes = "0" + date.getMinutes();
		// Seconds part from the timestamp
		var seconds = "0" + date.getSeconds();
		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		console.log(formattedTime);
		//早起嘅雀仔有蟲食
		
		
		
		console.log("Author: " + author1);
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
		//if (isNgaanngaan1 || isNgaanngaan2){
		//	message.channel.send("加油啊顏醫師:heart:");
		//}
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
			/*
			if (hours > 2 && hours <= 8) {
				message.channel.send("早起嘅雀仔有蟲食，早晨  " + message.author + "  <3 <3");
			}
			
			else if (hours > 11 && hours <= 23) {
				message.channel.send(message.author + "  咁晏仲早晨？");
			}
			else if (hours >= 0 && hours <= 2) {
				message.channel.send(message.author + "  咁晏仲早晨？");
			}
			
			else {
			message.channel.send("早晨  " + message.author + "  <3 <3");
			}
			*/
			message.channel.send("早晨  " + message.author + "  <3 <3");
		}
		if (isZoutau || isZoutau1) {
			message.channel.send("早抖  " + message.author + "  <3 <3");
		}
		//if (isJohnas) {
		//	message.channel.send("憨鳩 :rolling_eyes:");
		//}
		
		//1st
		
		
		
		
		
	}
	
	else {
		
		//const args = message.content.slice(prefix.length).trim().split(/ +/g);
		//const command = args.shift().toLowerCase();
		const author = message.author;
		console.log("Author: " + author);
		
		var args = message.content.substr(message.content.indexOf(' ')+1);
		const command = message.content.slice(prefix.length).trim().split(/ +/g).shift().toLowerCase();
		console.log("Args: " + args);
		console.log("Command: " + command);
		
		
		
		if (command === "say"){
			
			if (message.author == "<@443635312984588288>" || message.author == "<@440547246270971904>" || message.author == "<@354628983394009090>"){
				message.channel.send(args);
			}
			else {
			message.channel.send(message.author + ": " + args);
			}
		}
		
		
		if (command === "jd") {
			
			args = message.content.slice(prefix.length).trim().split(/ +/g);
			args.shift();
			
			console.log(args);
			console.log(args.length);
			
			if (args.length === 0) {
				var theLink = message.author + " 畀條粵典隨機覆核嘅 link 你： " + "https://words.hk/zidin/ceoigei/";
				message.channel.send(theLink);
			}
			
			if (args.length === 1) {
				var theLink = message.author + " 畀條粵典 link 你： " + "https://words.hk/zidin/" + args;
				message.channel.send(theLink);
			}
			
			
			if (args.length > 1) {
				var theWords = args[0];
				for (let i = 1; i < args.length; i++){
					theWords += "+";
					theWords += args[i];
				}
				var theLink = message.author + " 畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + theWords;
				message.channel.send(theLink);
			}
			
			
		}
		
		if (command === "jds") {
			args = message.content.slice(prefix.length).trim().split(/ +/g);
			args.shift();
			
			if (args.length === 1) {
				var theLink = message.author + " 畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + args;
				message.channel.send(theLink);
			}
			
			
			if (args.length > 1) {
				var theWords = args[0];
				for (let i = 1; i < args.length; i++){
					theWords += "+";
					theWords += args[i];
				}
				var theLink = message.author + " 畀條粵典 link 你： " + "https://words.hk/zidin/wan/?q=" + theWords;
				message.channel.send(theLink);
			}
		}
		
		
		
		if (command === "calc"){
			
			var testANS = mathjs.eval('10 cm to inches');
			message.channel.send(testANS);
			
			
			try {
			var theAns = mathjs.eval(args);
			message.channel.send(theAns);
			}
			catch (e) {
				return message.channel.send("我唔知你想我計啲咩... sor...");
			}
			
		}
		
		
	if (command === "g"){
				
				var searchWords = [];
				
				for (let i = 0; i < args.length; i++){
					
					if (args[i] == " "){
						searchWords += "+";
					}
					
					else if (args[i] == "+") {
						searchWords += "%2B";
					}
					else {
					searchWords += args[i];	
					//searchWords += encodeURI(args[i]);
					}
					
				}
			
			message.channel.send("https://www.google.com.hk/search?q=" + searchWords);
		}
		
		if (command === "wiki"){
			argsPiece = message.content.slice(prefix.length).trim().split(/ +/g);
			argsPiece.shift();
			
				var theLink = "https://zh.wikipedia.org/zh-hk/w/index.php?search=";
				/*
				if (args[0] == "," && args[1] == ","){
					theLink = "https://" + argsPiece[0] + ".wikipedia.org/w/index.php?search=";	
				}
				*/
				var searchWords = [];
		
				for (let i = 0; i < args.length; i++){
					
					if (args[i] == " "){
						searchWords += "+";
					}
					
					else if (args[i] == "+") {
						searchWords += "%2B";
					}
					else {
					searchWords += args[i];	
					//searchWords += encodeURI(args[i]);
					}
					
				}
			
			message.channel.send(theLink + searchWords);
		}
		
		if (command.includes("wiki,")){
			
				var theLink = "https://";	
				for (let i = 5; i < command.length; i++){
					theLink += command[i];
				}
				theLink += ".wikipedia.org/w/index.php?search="
				
				
				var searchWords = [];
		
				for (let i = 0; i < args.length; i++){
					
					if (args[i] == " "){
						searchWords += "+";
					}
					
					else if (args[i] == "+") {
						searchWords += "%2B";
					}
					else {
					searchWords += args[i];	
					//searchWords += encodeURI(args[i]);
					}
					
				}
			
			message.channel.send(theLink + searchWords);
		}	
	
	
	}
	console.log("Message: " + message.content);
});



//https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});

//process.env.BOT_TOKEN


bot.login(process.env.BOT_TOKEN);


