class Units{
    measurement=new Map();
    constructor() {
        this.measurement.set('FEET',{"value":30.48,"type":'length'})
        this.measurement.set('INCH',{"value":2.54,"type":'length'})
        this.measurement.set('YARD',{"value":91.44,"type":'length'})
        this.measurement.set('CENTIMETER',{"value":1,"type":'length'})
    }
    getBaseValue(unit){
        return this.measurement.get(unit).value;
    }
    getType(unit){
        return this.measurement.get(unit).type;
    }
}

module.exports=new Units();