const unitManipulatorService = require('../service/unitManipulatorService');

class UnitManipulator {
    convert(req, res) {
        req.checkBody('measurementType', 'should not be empty').notEmpty();
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
                measurementType:req.body.measurementType,
                unitType: req.body.unitType,
                unitValue: req.body.unitValue,
                toWhichUnitType: req.body.toWhichUnitType,

            }
            /**call registration service and handle callback */
            let compareService = unitManipulatorService.convert(units);
            compareService.then(function (data) {
                /** make response array with it's field */
                response.success = true;
                response.content = data;
                /** send response to server */
                res.status(200).send(response)
            }, function (error) {
                /** make response array with it's field */
                response.success = false;
                response.error = error;
                /** send response to server */
                res.status(422).send(response)
            })
        }
    }
}
module.exports=new UnitManipulator();