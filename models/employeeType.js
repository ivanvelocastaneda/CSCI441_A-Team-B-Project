  // written by: Bjarni Jonsson

class EmployeeType {
    constructor(typeID, typeName) {
        this.typeID = typeID;
        this.typeName = typeName;
    }

    update(data) {
        this.typeID = data.typeID || this.typeID;
        this.typeName = data.typeName || this.typeName;
    }

    getTypeName() {
        return this.typeName;
    }
}
