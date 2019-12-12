"use strict";
cc._RF.push(module, '2fd46PBiUdIc6ji0RsIzHl3', 'bullet_0');
// script/bullet/bullet_0.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet0 = /** @class */ (function (_super) {
    __extends(Bullet0, _super);
    function Bullet0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet0.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Bullet0.prototype.setSpeed = function (speed) {
        this.moveSpeed = speed;
    };
    Bullet0.prototype.setDir = function (dirX, dirY) {
        this.moveDir.x = dirX;
        this.moveDir.y = dirY;
    };
    Bullet0.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    Bullet0.prototype.getTag = function () {
        return this.tag;
    };
    Bullet0.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Bullet0 = __decorate([
        ccclass
    ], Bullet0);
    return Bullet0;
}(bulletBase_1.BulletBase));
exports.Bullet0 = Bullet0;

cc._RF.pop();