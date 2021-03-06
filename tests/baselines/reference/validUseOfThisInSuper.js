//// [validUseOfThisInSuper.ts]
class Base {
    constructor(public b: Base) {
    }
}
class Super extends Base {
    constructor() {
        super((() => this)()); // ok since this is not the case: The constructor declares parameter properties or the containing class declares instance member variables with initializers.
    }
}

//// [validUseOfThisInSuper.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base(b) {
        this.b = b;
    }
    return Base;
}());
var Super = (function (_super) {
    __extends(Super, _super);
    function Super() {
        var _this = this;
        _super.call(this, (function () { return _this; })()); // ok since this is not the case: The constructor declares parameter properties or the containing class declares instance member variables with initializers.
    }
    return Super;
}(Base));
