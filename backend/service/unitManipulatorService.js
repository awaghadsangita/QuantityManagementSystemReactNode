let unit = require('./units');

class UnitManipulatorService {
    convert(units) {
        return new Promise((resolve, reject) => {
            try {
                if(unit.getType(units.unitType)!==unit.getType(units.toWhichUnitType))
                    reject('not convertible unit type');

                let value = (unit.getBaseValue(units.unitType) * units.unitValue) / unit.getBaseValue(units.toWhichUnitType);
                resolve(value);
            } catch (e) {
                reject(e)
            }
        })
    }
}

module.exports = new UnitManipulatorService();