const unitManipulatorService = require('../service/unitManipulatorService');

class UnitManipulator {
    convert(req, res) {
        req.checkBody('unitType', 'should not be empty').notEmpty();
        req.checkBody('unitValue', 'should not be empty').notEmpty();
        req.checkBody('toWhichUnitType', 'should not be empty').notEmpty();

        let error = req.validationErrors();
        let response = {}
        if (error) {
            /** make response array with it's field */
            response.suceess = false;
            response.content = error
            /** send response to server */
            res.status(400).send(response)
        } else {
            let units = {
                unitType: req.body.unitType,
                unitValue: req.body.unitValue,
                toWhichUnitType: req.body.toWhichUnitType,
            }
            /**call convert service and handle callback */
            unitManipulatorService.convert(units).then((data) => {
                /** make response array with it's field */
                response.success = true;
                response.content = data;
                /** send response to server */
                res.status(200).send(response)
            }, (error) => {
                /** make response array with it's field */
                response.success = false;
                response.error = error;
                /** send response to server */
                res.status(422).send(response)
            })
        }
    }

    compare(req, res) {
        req.checkBody('firstUnitType', 'should not be empty').notEmpty();
        req.checkBody('firstUnitValue', 'should not be empty').notEmpty();

        req.checkBody('secondUnitType', 'should not be empty').notEmpty();
        req.checkBody('secondUnitValue', 'should not be empty').notEmpty();

        let error = req.validationErrors();
        let response = {}
        if (error) {
            /** make response array with it's field */
            response.suceess = false;
            response.content = error
            /** send response to server */
            res.status(400).send(response)
        } else {
            let firstUnit = {
                unitType: req.body.firstUnitType,
                unitValue: req.body.firstUnitValue,
            }
            let secondUnit = {
                unitType: req.body.secondUnitType,
                unitValue: req.body.secondUnitValue,
            }
            /**call compare service and handle callback */

            unitManipulatorService.compare(firstUnit, secondUnit).then((data) => {
                /** make response array with it's field */
                response.success = true;
                response.content = data;
                /** send response to server */
                res.status(200).send(response)
            }, (error) => {
                /** make response array with it's field */
                response.success = false;
                response.error = error;
                /** send response to server */
                res.status(422).send(response)
            })
        }
    }
}

module.exports = new UnitManipulator();