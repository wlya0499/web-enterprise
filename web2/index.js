import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

console.info("ini isi env---->",process.env.TOKEN);
console.Response =await axios.get(process.env.BASE_URL+'/en/character');

