(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/game/bullet/bullet_2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b3e97Lub9JQK2k96ZfczJr', 'bullet_2', __filename);
// script/game/bullet/bullet_2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var bulletBase_1 = require("./bulletBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet_2 = /** @class */ (function (_super) {
    __extends(Bullet_2, _super);
    function Bullet_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 自旋转
    Bullet_2.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
        this.node.angle += 50 * dt;
    };
    Bullet_2 = __decorate([
        ccclass
    ], Bullet_2);
    return Bullet_2;
}(bulletBase_1.BulletBase));
exports.Bullet_2 = Bullet_2;

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
        //# sourceMappingURL=bullet_2.js.map
        