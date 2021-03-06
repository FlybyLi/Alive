(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bullet_3.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '05acdCbX+BGVYm8DF4lebeq', 'bullet_3', __filename);
// script/game/bullet/bullet_3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_3 = /** @class */ (function (_super) {
    __extends(Bullet_3, _super);
    function Bullet_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 收缩方向 */
        _this.scaleDir = 1;
        return _this;
    }
    // 收缩
    Bullet_3.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
        if (this.node.scaleX > 1.3) {
            this.scaleDir = -1;
        }
        else if (this.node.scaleX < 1) {
            this.scaleDir = 1;
        }
        this.node.scale += this.scaleDir * 5 * dt;
    };
    Bullet_3 = __decorate([
        ccclass
    ], Bullet_3);
    return Bullet_3;
}(bulletBase_1.BulletBase));
exports.Bullet_3 = Bullet_3;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bullet_3.js.map
        