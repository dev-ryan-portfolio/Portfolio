import mailerInfo from "../Constants/mailerInfo.json";
import axios from "axios";

axios.defaults.baseURL = "https://contact-mailer-service.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export async function sendMail(mailData) {
    let response = await axios.post("api/mailer", {
        mailData,
        mailerInfo
    });

    return { message: response.data.message };
}
