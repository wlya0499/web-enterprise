import Button from "./Button";

type PropHello = {
  name: string
}

export default function HelloWorld( props: PropHello){
  return (
    <>
     <h1>Halo {props.name}</h1>
     <h2>Ayo belajar react</h2>
     <Button flag ='Hello'/>
    </>
  );
}
  



