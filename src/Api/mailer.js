import mailerInfo from '../Constants/mailerInfo.json';
import axios from 'axios';

export async function sendMail(mailData) {
	const form = await axios.post('/api/mailer', {
		mailData,
		mailerInfo
    });
    console.log(form, 'here')
}
