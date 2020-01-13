class Units {
    measurement = new Map();
    constructor() {
        this.measurement.set('FEET', {"value": 30.48, "type": 'LENGTH'})
        this.measurement.set('INCH', {"value": 2.54, "type": 'LENGTH'})
        this.measurement.set('YARD', {"value": 91.44, "type": 'LENGTH'})
        this.measurement.set('CENTIMETER', {"value": 1, "type": 'LENGTH'})
        this.measurement.set('GALLON', {"value": 3785.41, "type": 'VOLUME'})
        this.measurement.set('LITER', {"value": 1000.0, "type": 'VOLUME'})
        this.measurement.set('MILLI_LITRE', {"value": 1.0, "type": 'VOLUME'})
        this.measurement.set('KILOGRAM', {"value": 1000, "type": 'WEIGHT'})
        this.measurement.set('GRAMS', {"value": 1.0, "type": 'WEIGHT'})
        this.measurement.set('TONNES', {"value": 1000000.0, "type": 'WEIGHT'})
        this.measurement.set('CELSIUS', {"value": 1, "type": 'TEMPERATURE'})
        this.measurement.set('FAHRENHEIT', {"value": 1, "type": 'TEMPERATURE'})
    }

    getBaseValue(unit) {
        return this.measurement.get(unit).value;
    }

    getType(unit) {
        return this.measurement.get(unit).type;
    }

}

module.exports = new Units();