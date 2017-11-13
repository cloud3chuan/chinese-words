"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MyBookService = /** @class */ (function () {
    function MyBookService(http) {
        this.http = http;
        this.myWordsUrl = "api/mywords";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MyBookService.prototype.getMyWords = function () {
        return this.http.get(this.myWordsUrl)
            .toPromise()
            .then(function (response) {
            var mywords = response.json();
            return mywords.map(function (myword) { return myword.word; });
        });
    };
    MyBookService.prototype.addToMyBook = function (id) {
        var body = {
            word: id
        };
        return this.http.post(this.myWordsUrl, body)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    MyBookService.prototype.removeMyWord = function (id) {
        var url = this.myWordsUrl + "/" + id;
        return this.http.delete(url)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    MyBookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MyBookService);
    return MyBookService;
}());
exports.MyBookService = MyBookService;
//# sourceMappingURL=mybook.service.js.map