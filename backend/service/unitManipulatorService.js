let unit = require('./units');

class UnitManipulatorService {
    convert(units) {
        return new Promise((resolve, reject) => {
            try {
                if (unit.getType(units.unitType) !== unit.getType(units.toWhichUnitType))
                    reject('not convertible unit type');

                let value = (unit.getBaseValue(units.unitType) * units.unitValue) / unit.getBaseValue(units.toWhichUnitType);
                resolve(value);
            } catch (e) {
                reject(e)
            }
        })
    }

    compare(firstUnit, secondUnit) {
        return new Promise((resolve, reject) => {
            try {
                if (unit.getType(firstUnit.unitType) !== unit.getType(secondUnit.unitType))
                    reject('not comparable unit type');

                if (firstUnit.unitType == "FAHRENHEIT")
                    resolve(Math.round((firstUnit.unitValue - 32) * (5 / 9)) == secondUnit.unitValue)

                if (firstUnit.unitType == "CELSIUS")
                    resolve(Math.round((firstUnit.unitValue * (9 / 5)) + 32) == secondUnit.unitValue);

                let isEqual = Math.round(unit.getBaseValue(firstUnit.unitType) * firstUnit.unitValue) == Math.round(unit.getBaseValue(secondUnit.unitType) * secondUnit.unitValue)
                resolve(isEqual);
            } catch (e) {
                reject(e)
            }
        })
    }
}

module.exports = new UnitManipulatorService();