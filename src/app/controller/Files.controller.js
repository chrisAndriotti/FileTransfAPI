const { uploadFile, getFile } = require('../../core/services/File.service') 

class FilesController {

   async uploadFile(req, res) {
        try {

            const { params, file, body } = req;

            console.log("TESTE DO BODY ::: ", body)
            
            const result = await uploadFile(params.id_cliente, file);

            console.log(result)

            res.status(201).send({ message : 'Seu arquivo foi salvo com sucesso!' });

        } catch (error) {

            const { message, stack } = error;
            res.status(500).send({ message, stack });
            console.log(message);

        }
    }

    async getFile(req, res) {
        try {

            const {params} = req;

            const result = await getFile(params.file_name);

            res.status(201).send({message : 'Seu arquivo foi encontrado! ',result});

        } catch (error) {

            const { message, stack } = error;

            res.status(500).send({ message, stack });

            console.log(message);

        }
    }
    
}

module.exports = new FilesController();