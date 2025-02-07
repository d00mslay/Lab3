declare enum DocTypes {
    passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    foreignPassport = "\u0417\u0430\u0433\u0440\u0430\u043D\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    other = "\u0418\u043D\u043E\u0435"
}
declare enum Carcasses {
    SEDAN = 0,
    CROSSOVER = 1
}
declare enum CarClasses {
    A = 0,
    B = 1,
    C = 2,
    D = 3
}
interface IOwner {
    surname: string;
    name: string;
    middleName: string;
    dateOfBirth: string;
    typeOfDocument: DocTypes;
    serial: number;
    number: number;
    info(): void;
}
interface IVehicle {
    mark: string;
    model: string;
    year: number;
    VIN: number;
    registrationNumber: number;
    owner: string;
    info(): void;
}
declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _middleName;
    private _dateOfBirth;
    private _typeOfDocument;
    private _serial;
    private _number;
    get surname(): string;
    set surname(surname: string);
    get name(): string;
    set name(name: string);
    get middleName(): string;
    set middleName(middleName: string);
    get dateOfBirth(): string;
    set dateOfBirth(dateOfBirth: string);
    get typeOfDocument(): DocTypes;
    set typeOfDocument(typeOfDocument: DocTypes);
    get serial(): number;
    set serial(serial: number);
    get number(): number;
    set number(number: number);
    constructor(surname: string, name: string, middleName: string, dataOfBirth: string, typeOfDocument: DocTypes, serial: number, number: number);
    info(): void;
}
declare class Vehicle implements IVehicle {
    private _mark;
    private _model;
    private _year;
    private _VIN;
    private _registrationNumber;
    private _owner;
    get mark(): string;
    set mark(mark: string);
    get model(): string;
    set model(model: string);
    get year(): number;
    set year(year: number);
    get VIN(): number;
    set VIN(VIN: number);
    get registrationNumber(): number;
    set registrationNumber(registrationNumber: number);
    get owner(): string;
    set owner(owner: string);
    constructor(mark: string, model: string, year: number, VIN: number, registrationNumber: number);
    info(): void;
}
interface ICar extends IVehicle {
    carcass: Carcasses;
    carClass: CarClasses;
}
interface IMotorbike extends IVehicle {
    body: string;
    isSport: boolean;
}
declare class Car implements ICar {
    private _mark;
    private _model;
    private _year;
    private _VIN;
    private _registrationNumber;
    private _owner;
    private _carcass;
    private _carClass;
    get mark(): string;
    set mark(mark: string);
    get model(): string;
    set model(model: string);
    get year(): number;
    set year(year: number);
    get VIN(): number;
    set VIN(VIN: number);
    get registrationNumber(): number;
    set registrationNumber(registrationNumber: number);
    get owner(): string;
    set owner(owner: string);
    get carcass(): Carcasses;
    set carcass(carcass: Carcasses);
    get carClass(): CarClasses;
    set carClass(carClass: CarClasses);
    constructor(mark: string, model: string, year: number, VIN: number, registrationNumber: number);
    info(): void;
}
declare class Motorbike implements IMotorbike {
    private _mark;
    private _model;
    private _year;
    private _VIN;
    private _registrationNumber;
    private _owner;
    private _body;
    private _isSport;
    get mark(): string;
    set mark(mark: string);
    get model(): string;
    set model(model: string);
    get year(): number;
    set year(year: number);
    get VIN(): number;
    set VIN(VIN: number);
    get registrationNumber(): number;
    set registrationNumber(registrationNumber: number);
    get owner(): string;
    set owner(owner: string);
    get body(): string;
    set body(body: string);
    get isSport(): boolean;
    set isSport(isSport: boolean);
    info(): void;
}
interface IVehicleStorage<T extends IVehicle> {
    creationDate: number;
    storage: Array<T>;
    getVehicles(): Array<T>;
}
declare class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private _creationDate;
    private _storage;
    get creationDate(): number;
    get storage(): Array<T>;
    /** Да, метод является тем же самым, что и выше, но зато по заданию **/
    getVehicles(): Array<T>;
}
