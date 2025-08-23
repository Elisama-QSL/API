// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai'); 

// Aplicação
const app = require('../../app');

//Mock
const transferService = require('../../service/transferService')


// Testes
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfer') 
                .send({
                    from: "Carlos",
                    to: "Maria",
                    amount: 1
                });
            
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado')

          
        });

         it('Usando Mocks: Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            //Mockar apenas a função transfer 
            const transferServiceMock = sinon.stub(transferService,'transfer');
            transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'));
            const resposta = await request(app)
                .post('/transfer') 
                .send({
                    from: "Carlos",
                    to: "Maria",
                    amount: 1
                });
            
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado')

            //Resete o Mock
            sinon.restore();
          
        });

        it('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 CREATED', async () => {
            //Mockar apenas a função transfer 
            const transferServiceMock = sinon.stub(transferService,'transfer');
            transferServiceMock.returns({
                from: "Carlos", 
                to: "Maria", 
                amount: 1,
                 date: new Date().toISOString()
            });


            const resposta = await request(app)
                .post('/transfer') 
                .send({
                    from: "Carlos",
                    to: "Maria",
                    amount: 1
            });
            
            expect(resposta.status).to.equal(201);
           // expect(resposta.body).to.have.property('from', 'Carlos');
           // expect(resposta.body).to.have.property("from", "Carlos");
            //expect(resposta.body).to.have.property('to', 'Maria');
            //expect(resposta.body).to.have.property('amount', 1);

            //Resete o Mock
            sinon.restore();
          
        });

    });




});