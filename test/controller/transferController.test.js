// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai'); 

// Aplicação
const app = require('../../app');


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
           });

    });




});