import { EventEmitter } from 'events';

const emitter= new EventEmitter();
emitter.on('kirim_email',(email_address)=>{
    console.info("email berhasil terkirim ke alamat: "+ email_address)
})
function lupapassword(){
    console.log("start forgot password process");
    emitter.emit('kirim_email','wly@gmail.com');
}

lupapassword();