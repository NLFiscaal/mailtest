const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp-relay.gmail.com', // produktie
	port: 25,
	secure: false,
	// logger: true,
	// debug: true,
	ignoreTLS: true
});

let mail = {
	from: 'victor.maes@nlfiscaal.nl', // sender address
	to: 'meijer.jwm@gmail.com', // list of receivers
	unid: '12345678',
	subject: 'testsubject', // Subject line
	text: 'Dit is plain text', // plain text body
	html: '<div>Dit is <b>bold</b></div>',  // html body
};

transporter.sendMail(mail);
