const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp-relay.gmail.com', // produktie
	port: 25,
	secure: false,
	// logger: true,
	// debug: true,
	ignoreTLS: true
});

// test naar binnen domein, vanaf eigen domein
transporter.sendMail({
	from: '"Redactie NLFiscaal" <redactie@nlfiscaal.nl>', // sender address
	to: 'jeroen.meijer@nlfiscaal.nl', // list of receivers
	unid: '12345678',
	subject: 'testsubject', // Subject line
	text: 'Dit is plain text', // plain text body
	html: '<div>Dit is <b>bold</b></div>',  // html body
});

// test naar buiten domein, vanaf eigen domein
transporter.sendMail({
	from: '"Redactie NLFiscaal" <redactie@nlfiscaal.nl>', // sender address
	to: 'jmeijer@notice.nu', // list of receivers
	unid: '12345678',
	subject: 'testsubject', // Subject line
	text: 'Dit is plain text', // plain text body
	html: '<div>Dit is <b>bold</b></div>',  // html body
});

// test naar buiten domein, vanaf ander domein
transporter.sendMail({
	from: '"Jeroen Meijer" <jmeijer@notice.nu>', // sender address
	to: 'jmeijer.jwm@gmail.com', // list of receivers
	unid: '12345678',
	subject: 'testsubject', // Subject line
	text: 'Dit is plain text', // plain text body
	html: '<div>Dit is <b>bold</b></div>',  // html body
});
