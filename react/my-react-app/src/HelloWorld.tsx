import Button from "./Button";
import { PropHello } from './HalloWorld.dto'



export default function HelloWorld({name,gender,umur=21}: PropHello){
  return (
    <>
     <h1>Halo {name}</h1>
     <h2>gender saya: {gender}</h2>
     <h2>umur saya: {umur}</h2>

     <h2>Ayo belajar react</h2>
     <Button flag ='Hello'/>
    </>
  );
}
  



