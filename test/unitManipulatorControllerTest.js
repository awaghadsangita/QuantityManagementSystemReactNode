const chai = require('chai');
const chaiHttp=require('chai-http');
const app=require('../app');
const fs=require('fs');
const testJsonFile='/home/admin1/IdeaProjects/QuantityManagmentSystem/test/testJsonFiles/unitManipulatorJson.json';


let jsonString=fs.readFileSync(testJsonFile);
let testInputArray=JSON.parse(jsonString);
chai.should();
chai.use(chaiHttp);
describe('test for compare api',()=>{
    it('when all units fields are empty should return status 400',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compare[0].unitFieldsEmpty)
            .end((req,res)=>{
                res.should.have.status(400);
                done();
            });
    });
    it('given 1 gallon and 3.78 litres when compare should return status 200',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compareVolume[0].oneLiterAndThreePtSevenEight)
            .end((req,res)=>{
                res.should.have.status(200);
                done();
            });
    });
    it('given 1 litre and 1000 ml when compare should return status 200',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compareVolume[0].oneLitreAndThousandMl)
            .end((req,res)=>{
                res.should.have.status(200);
                done();
            });
    });
    it('given 1 kilogram and 1000 gram when compare should return status 200',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compareWeight[0].oneKgAndThousandGrams)
            .end((req,res)=>{
                res.should.have.status(200);
                done();
            });
    });
    it('given 1 tonne and 1000 kilogram when compare should return status 200',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compareWeight[0].oneTonneAndThousandKilograms)
            .end((req,res)=>{
                res.should.have.status(200);
                done();
            });
    });
    it('given 212 Fahrenheit and 100 Celsius when compare should return status 200',(done)=>{
        chai.request(app)
            .get('/unitManipulator/compare')
            .send(testInputArray.compareTemperature[0].twoTwelveFahrenheitAndHundredCelsius)
            .end((req,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

