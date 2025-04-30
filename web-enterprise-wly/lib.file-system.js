import { readFile,writeFile} from 'fs/promises';

async function extractFile() {
    try{
        const data = await readFile('data.txt','utf8');
        console.log('isi file',data);
    }catch (err){
        console.error('erorr membaca file:',err);
    }
    
}

async function writeToFile() {
    try{
        await writeFile('output.txt','halo bro');
        console.log('file berhasil ditulis');
    }catch(err){
        console.error('error menulis filr: ',err);
    }
    
}
extractFile();
writeToFile();