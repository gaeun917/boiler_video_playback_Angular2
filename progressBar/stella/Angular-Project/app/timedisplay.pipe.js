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
/**
 * Created by gaeunlee on 5/3/17.
 */
// pipe = customized filter
// 1. import pipe & pipeTransform
var core_1 = require('@angular/core');
//2. pipe decorator : defining name of pipe
var TimeDisplayPipe = (function () {
    function TimeDisplayPipe() {
    }
    // 3.1 filtering function :transform one number to another
    TimeDisplayPipe.prototype.transform = function (value, args) {
        // 3.3 calculating hr, min, sec
        var hh = Math.floor(value / 3600), mm = Math.floor(value / 60) % 60, ss = Math.floor(value) % 60;
        //3.4 always have two digit numbers
        return hh + ":" + (mm < 10 ? "0" : "")
            + mm + ":" + (ss < 10 ? "0" : "") + ss;
    };
    TimeDisplayPipe = __decorate([
        core_1.Pipe({
            name: 'timeDisplay'
        }), 
        __metadata('design:paramtypes', [])
    ], TimeDisplayPipe);
    return TimeDisplayPipe;
}());
exports.TimeDisplayPipe = TimeDisplayPipe;
//# sourceMappingURL=timedisplay.pipe.js.map