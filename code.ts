enum DocTypes {
    passport = "Паспорт",
    foreignPassport = "ЗагранПаспорт",
    other = "Иное"
}
enum Carcasses{
    SEDAN, CROSSOVER
}
enum CarClasses{
    A,B,C,D
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

class Owner implements IOwner {
    private _surname: string;
    private _name: string;
    private _middleName: string;
    private _dateOfBirth: string;
    private _typeOfDocument: DocTypes;
    private _serial: number;
    private _number: number;

    get surname() {
        return this._surname;
    }
    set surname(surname: string) {
        this._surname = surname;
    }

    get name() {
        return this._name;
    }
    set name(name: string) {
        this._surname = name;
    }

    get middleName() {
        return this._middleName;
    }
    set middleName(middleName: string) {
        this._middleName = middleName;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(dateOfBirth: string) {
        this._dateOfBirth = dateOfBirth;
    }

    get typeOfDocument() {
        return this._typeOfDocument;
    }
    set typeOfDocument(typeOfDocument: DocTypes) {
        this._typeOfDocument = typeOfDocument;
    }

    get serial() {
        return this._serial;
    }
    set serial(serial: number) {
        this._serial = serial;
    }

    get number() {
        return this._number;
    }
    set number(number: number) {
        this._number = number;
    }

    constructor(surname: string, name: string, middleName: string, dataOfBirth: string, typeOfDocument: DocTypes, serial: number, number: number) {
        this._surname = surname;
        this._name = name;
        this._middleName = middleName;
        this._dateOfBirth = dataOfBirth;
        this._typeOfDocument = typeOfDocument;
        this._serial = serial;
        this._number = number;
    }

    info(): void {
        console.log(this._surname);
        console.log(this._name);
        console.log(this._middleName);
        console.log(this._dateOfBirth);
        console.log(this._typeOfDocument);
        console.log(this._serial);
        console.log(this._number);
    }
}

class Vehicle implements IVehicle {
    private _mark: string;
    private _model: string;
    private _year: number;
    private _VIN: number;
    private _registrationNumber: number;
    private _owner: string;

    get mark() {
        return this._mark;
    }

    set mark(mark: string) {
        this._mark = mark
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model
    }

    get year() {
        return this._year;
    }

    set year(year: number) {
        this._year = year
    }

    get VIN() {
        return this._VIN;
    }

    set VIN(VIN: number) {
        this._VIN = VIN
    }

    get registrationNumber() {
        return this._registrationNumber;
    }

    set registrationNumber(registrationNumber: number) {
        this._registrationNumber = registrationNumber
    }

    get owner() {
        return this._owner;
    }

    set owner(owner: string) {
        this._owner = owner
    }

    constructor (mark: string, model: string, year: number, VIN: number, registrationNumber: number){
        this._mark = mark;
        this._model = model;
        this._year = year;
        this._VIN = VIN;
        this._registrationNumber = registrationNumber;
    }

    info() : void{
        console.log(this._mark);
        console.log(this._model);
        console.log(this._year);
        console.log(this._VIN);
        console.log(this._registrationNumber);
    }
}

interface ICar extends IVehicle{
    carcass: Carcasses;
    carClass: CarClasses;
}

interface IMotorbike extends IVehicle{
    body: string;
    isSport: boolean;
}

class Car implements ICar{
    private _mark: string;
    private _model: string;
    private _year: number;
    private _VIN: number;
    private _registrationNumber: number;
    private _owner: string;

    private _carcass: Carcasses;
    private _carClass: CarClasses;

    get mark(){
        return this._mark;
    }

    set mark(mark:string){
        this._mark = mark;
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get year() {
        return this._year;
    }

    set year(year: number) {
        this._year = year
    }

    get VIN() {
        return this._VIN;
    }

    set VIN(VIN: number) {
        this._VIN = VIN;
    }

    get registrationNumber() {
        return this._registrationNumber;
    }

    set registrationNumber(registrationNumber: number) {
        this._registrationNumber = registrationNumber
    }

    get owner() {
        return this._owner;
    }

    set owner(owner: string) {
        this._owner = owner;
    }
    get carcass(){
        return this._carcass;
    }
    set carcass(carcass: Carcasses){
        this._carcass = carcass;
    }

    get carClass(){
        return this._carClass;
    }
    set carClass(carClass: CarClasses){
        this._carClass = carClass;
    }
    

    constructor (mark: string, model: string, year: number, VIN: number, registrationNumber: number, carcass: Carcasses, carClass: CarClasses){
        this._mark = mark;
        this._model = model;
        this._year = year;
        this._VIN = VIN;
        this._registrationNumber = registrationNumber;
        this._carcass = carcass;
        this._carClass = carClass;
    }

    info() : void{
        console.log(this._mark);
        console.log(this._model);
        console.log(this._year);
        console.log(this._VIN);
        console.log(this._registrationNumber);
        console.log(this._carcass);
        console.log(this._carClass)
    }
}
class Motorbike implements IMotorbike{
    private _mark: string;
    private _model: string;
    private _year: number;
    private _VIN: number;
    private _registrationNumber: number;
    private _owner: string;

    private _body: string;
    private _isSport: boolean;
    get mark(){
        return this._mark;
    }
    set mark(mark:string){
        this._mark = mark;
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get year() {
        return this._year;
    }

    set year(year: number) {
        this._year = year
    }

    get VIN() {
        return this._VIN;
    }

    set VIN(VIN: number) {
        this._VIN = VIN;
    }

    get registrationNumber() {
        return this._registrationNumber;
    }

    set registrationNumber(registrationNumber: number) {
        this._registrationNumber = registrationNumber
    }

    get owner() {
        return this._owner;
    }

    set owner(owner: string) {
        this._owner = owner;
    }

    get body(){
        return this._body;
    }
    set body(body:string){
        this._body = body;
    }

    get isSport(){
        return this._isSport;
    }
    set isSport(isSport:boolean){
        this._isSport = isSport;
    }
    constructor (mark: string, model: string, year: number, VIN: number, registrationNumber: number, body: string, isSport: boolean){
        this._mark = mark;
        this._model = model;
        this._year = year;
        this._VIN = VIN;
        this._registrationNumber = registrationNumber;
        this._body = body;
        this._isSport = isSport;
    }
    info() : void{
        console.log(this._mark);
        console.log(this._model);
        console.log(this._year);
        console.log(this._VIN);
        console.log(this._registrationNumber);
        console.log(this._body);
        console.log(this._isSport)
    }
}

interface IVehicleStorage<T extends IVehicle>{
    creationDate: number;
    storage: Array<T>;
    getVehicles() : Array<T>;
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
    private _creationDate:number = Date.now();
    private _storage: Array<T>;

    get creationDate():number{
        return this._creationDate;
    }

    get storage() : Array<T>{
        return this._storage;
    }
    constructor (storage: Array<T>){
        this._storage = storage;
    }
    /** Да, метод является тем же самым, что и выше, но зато по заданию **/
    getVehicles() : Array<T>{
        return this._storage;
    }

}