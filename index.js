const uuid = require('uuid');

class Event {
    constructor ({ service, type, payload, eventTs, eventId }) {
        this._service = service;
        this._type = type;
        this._payload = payload;
        this._eventTs = eventTs || Date.now();
        this._eventId = eventId || uuid.v4();
    }

    toString() {
        return JSON.stringify({
            service: this._service,
            type: this._type,
            payload: this._payload,
            eventTs: this._eventTs,
            eventId: this._eventId
        });
    }

    toObject() {
        return {
            service: this._service,
            type: this._type,
            payload: this._payload,
            eventTs: this._eventTs,
            eventId: this._eventId
        };
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

    set eventId (eventId) {
        this._eventId = eventId;
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

    get eventId () {
        return this._eventId;
    }
}

module.exports = Event;
