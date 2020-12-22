const fs = require('fs');

class FilesService {

    async uploadFile(cpf, file) {
        console.log('CPF DO CLIENTE: ', cpf);

        return new Promise((resolve,reject) =>{

            const biteArray = new Uint8Array(file.buffer);

            fs.writeFile(`upload/${file.originalname}`, biteArray, (err) => {
                if(!err) return resolve({message: 'CREATED'});

                reject(err);
            });
        });
    }

    async getFile(file_name) {
        return new Promise((resolve,reject) => {

            //const toBase64 = .atob(file_Name);
            
            //Buffer.from(u8).toString('base64');

            fs.readFile(`upload/${file_name}`, function (err, data) {
                if(!err){
                    const toBase64 = Buffer.from(data.buffer,'binary').toString('base64');
                   // const base64Str = toBase64;

                    return resolve({message: `upload/${file_name}`, toBase64});
                } 

                reject(err);
            })

        })
    }
}

module.exports = new FilesService();