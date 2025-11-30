const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port1 = 3001;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({ email, subject, message }) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "lsu.lost.found@gmail.com",
                pass: "izgplnabuvnmtcov",
            },    
        });

        const mail_configs = {
            from: "lsu.lost.found@gmail.com",
            to: email,
            subject: subject,
            text: message,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({message: 'An error occured while sending'})
            }

            return resolve({ message: "Email sent succesfully" });
        });
    });
}


app.get("/", (req, res) => {
    sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port1, () => {
    console.log('nodemailer is listening at http://localhost:${port1}');
});