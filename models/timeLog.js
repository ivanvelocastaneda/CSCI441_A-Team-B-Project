class TimeLog {
    constructor(id, employeeID, timeClockedIn, timeClockedOut) {
        this.id = id;
        this.employeeID = employeeID;
        this.timeClockedIn = timeClockedIn;
        this.timeClockedOut = timeClockedOut;
    }

    update(data) {
        this.id = data.id || this.id;
        this.employeeID = data.employeeID || this.employeeID;
        this.timeClockedIn = data.timeClockedIn || this.timeClockedIn;
        this.timeClockedOut = data.timeClockedOut || this.timeClockedOut;
    }

    getTimeLogged() {
        return {
            timeClockedIn: this.timeClockedIn,
            timeClockedOut: this.timeClockedOut
        };
    }

    updateTimeLogged(newTime) {
        this.timeClockedIn = newTime.timeClockedIn || this.timeClockedIn;
        this.timeClockedOut = newTime.timeClockedOut || this.timeClockedOut;
    }
}
