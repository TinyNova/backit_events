class Event {
    constructor ({ service, type, payload, eventTs }) {
        this._service = service;
        this._type = type;
        this._payload = payload;
        this._eventTs = eventTs || Date.now();
    }

    toString() {
        return JSON.stringify({
            service: this._service,
            type: this._type,
            payload: this._payload,
            eventTs: this._eventTs
        });
    }

    set service (service) {
        this._service = service;
    }

    set type (type) {
        this._type = type;
    }

    set payload (payload) {
        this._payload = payload;
    }

    set eventTs (eventTs) {
        this._eventTs = eventTs;
    }

    get service () {
        return this._service;
    }

    get type () {
        return this._type;
    }

    get payload () {
        return this._payload;
    }

    get eventTs () {
        return this._eventTs;
    }
}

module.exports = Event;
