import mailerInfo from "../Constants/mailerInfo.json";
import axios from "axios";

export async function sendMail(mailData) {
  axios.post("api/mailer", {
    mailData,
    mailerInfo
  });
}
