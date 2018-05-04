webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_task__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workbench_workbench__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_personal__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(event) {
        var _this = this;
        this.event = event;
        this.msgNum = '';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_0__task_task__["a" /* TaskPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__workbench_workbench__["a" /* WorkbenchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__personal_personal__["a" /* PersonalPage */];
        this.event.subscribe(__WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* Constants */].TODOTASK_NUM_ACTION, function (arg) { return _this.msgNum = arg; });
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="1">\n\n  <ion-tab tabsHideOnSubPages="true" [root]="tab1Root" tabTitle="任务" tabIcon="briefcase" tabBadge="{{ msgNum }}" tabBadgeStyle="danger"> </ion-tab>\n\n  <ion-tab tabsHideOnSubPages="true" [root]="tab2Root" tabTitle="工作台" tabIcon="desktop"></ion-tab>\n\n  <!-- <ion-tab tabsHideOnSubPages="true" [root]="tab3Root" tabTitle="个人" tabIcon="person"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_record_device_record__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceDetailPage = (function (_super) {
    __extends(DeviceDetailPage, _super);
    function DeviceDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceDetail = {};
        _this.parts = [];
        return _this;
    }
    DeviceDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.httpService.get("deviceDetails/" + this.navParams.get('deviceId') + "/info").subscribe(function (data) { return _this.checkoutDeviceDetailParam(data); }, function () { return console.log("success"); });
    };
    DeviceDetailPage.prototype.checkoutDeviceDetailParam = function (data) {
        var regA = new RegExp("\"", "g");
        this.deviceDetail = data;
        this.deviceDetail.paramData = data.paramData.replace(regA, '').replace("{", '').replace("}", '');
        this.parts = this.deviceDetail.parts;
    };
    DeviceDetailPage.prototype.getDeviceRecord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__device_record_device_record__["a" /* DeviceRecordPage */], { "deviceId": this.navParams.get('deviceId') });
    };
    return DeviceDetailPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BasePage */]));
DeviceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-device-detail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\device-detail\device-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      设备明细\n\n    </ion-title>\n\n    <span float-right class="iontitleright" (click)="getDeviceRecord()">维修记录</span>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="devicedetail">\n\n  <div class="boxgray"></div>\n\n  <ion-list class="device devicedetail">\n\n    <ion-item class="ionItemBorderBottom">\n\n      责任部门\n\n      <ion-note item-right> {{ deviceDetail.dutyOrgName }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom" no-lines>\n\n      使用部门\n\n      <ion-note item-right> {{ deviceDetail.userOrgName }} </ion-note>\n\n    </ion-item>\n\n    <div class="boxgray"></div>\n\n\n\n    <ion-item class="ionItemBorderBottom">\n\n      设备系统\n\n      <ion-note item-right> {{ deviceDetail.type }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      设备名称\n\n      <ion-note item-right> {{ deviceDetail.deviceCodeName }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      设备编号\n\n      <ion-note item-right> {{ deviceDetail.coding }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom" no-lines>\n\n      设备型号\n\n      <ion-note item-right> {{ deviceDetail.model }} </ion-note>\n\n    </ion-item>\n\n    <div class="boxgray"></div>\n\n\n\n    <ion-item class="ionItemBorderBottom">\n\n      出厂编号\n\n      <ion-note item-right> {{ deviceDetail.initCoding }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      制造厂家\n\n      <ion-note item-right> {{ deviceDetail.factory }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      制造日期\n\n      <ion-note item-right> {{ deviceDetail.initTime }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      启用时间\n\n      <ion-note item-right> {{ deviceDetail.enableTime }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      安装地点\n\n      <ion-note item-right> {{ deviceDetail.installLocation }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      使用年限\n\n      <ion-note item-right> {{ deviceDetail.useYears }} </ion-note>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      设备现状\n\n      <ion-badge item-right> {{ deviceDetail.statusGuo }} </ion-badge>\n\n    </ion-item>\n\n    <div class="fromlistwrap" *ngIf=" deviceDetail.paramData && deviceDetail.paramData != \'\' ">\n\n      <div class="fromlist">\n\n        <div>\n\n          <span float-left>本体参数</span>\n\n        </div>\n\n      </div>\n\n      <div class="txt">\n\n        <div>\n\n          <p> {{ deviceDetail.paramData }}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="boxgray"></div>\n\n    <div class="fushu" *ngIf=" parts.length != \'0\' ">\n\n      附属设备，主要零部件及参数\n\n    </div>\n\n    <div class="fromlistwrap" *ngFor="let part of parts" style="margin-top: 0;">\n\n      <div class="fromlist">\n\n        <div>\n\n          <span float-left>{{part.name}}</span>\n\n        </div>\n\n      </div>\n\n      <div class="txt">\n\n        <div style="border-bottom: 1px solid #ededed;padding-bottom: 10px;">\n\n          <p> 厂商: {{part.factory}}; 额定电压: {{part.ratedV}}; 额定电流: {{part.ratedI}}; 产地: {{part.origin}}; 出厂编号: {{part.initCoding}};\n\n            额定容量: {{part.ratedC}}; 出厂日期: {{part.initTime}};</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\device-detail\device-detail.html"*/
    })
], DeviceDetailPage);

//# sourceMappingURL=device-detail.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind_inspect_detail_bind_inspect_detail__ = __webpack_require__(270);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BindInspectPage = (function (_super) {
    __extends(BindInspectPage, _super);
    function BindInspectPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.approvedList = [];
        return _this;
    }
    BindInspectPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.httpService.get("wechatUserManage/unApprovedList").subscribe(function (data) { return _this.approvedList = data; }, function () { return console.log("success"); });
    };
    BindInspectPage.prototype.gotodetail = function (approve) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bind_inspect_detail_bind_inspect_detail__["a" /* BindInspectDetailPage */], { "approve": approve });
    };
    return BindInspectPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
BindInspectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-bind-inspect',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\bind-inspect\bind-inspect.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      绑定房屋审核\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content > \n\n  <ion-list>\n\n      <div class="boxgray"></div>\n\n    <ion-item *ngFor="let approve of approvedList" (click)="gotodetail(approve)" style="padding-top: 10px;padding-bottom: 10px;">\n\n      <div item-left>\n\n        <img src="{{approve.headImgUrl}}" style="width: 50px;height: 50px;">\n\n      </div>\n\n      <h4 style="display: flex;justify-content: space-between;    margin-bottom: 10px;"> <span>{{approve.username}}</span> <span>{{approve.regTime | slice:0:7}}</span> </h4>\n\n      <p>{{approve.address}}</p>\n\n    </ion-item>\n\n  </ion-list> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\bind-inspect\bind-inspect.html"*/
    })
], BindInspectPage);

//# sourceMappingURL=bind-inspect.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login__ = __webpack_require__(78);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BasicInfoPage = (function (_super) {
    __extends(BasicInfoPage, _super);
    function BasicInfoPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.basicInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].PERSONALINFO));
        _this.applyInfo = {};
        return _this;
    }
    BasicInfoPage.prototype.ionViewWillEnter = function () {
        // this.getLoginInfo();
    };
    BasicInfoPage.prototype.applyLeave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '离职申请',
            message: "确认提交离职申请？",
            inputs: [
                {
                    name: 'comment',
                    placeholder: '申请说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.apply(data, "2");
                    }
                }
            ]
        });
        prompt.present();
    };
    BasicInfoPage.prototype.applyRise = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '转正申请',
            message: "确认提交转正申请？",
            inputs: [
                {
                    name: 'comment',
                    placeholder: '申请说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.apply(data, "1");
                    }
                }
            ]
        });
        prompt.present();
    };
    BasicInfoPage.prototype.apply = function (data, type) {
        var _this = this;
        var param = { comment: { comment: data.comment } };
        this.httpService.put("employee/" + this.applyInfo.id + "/" + type, param).subscribe(function (data) { return _this.getLoginInfo(); }, function (Error) { return console.log(""); }, function () { return console.log(""); });
    };
    BasicInfoPage.prototype.getLoginInfo = function () {
        var _this = this;
        this.httpService.get('employee/app/materialsOut/find').subscribe(function (data) { return _this.applyInfo = data; });
    };
    BasicInfoPage.prototype.outPhone = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].AUTH);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].PERSONALINFO);
        this.doPush(__WEBPACK_IMPORTED_MODULE_3__auth_login_login__["a" /* LoginPage */]);
    };
    return BasicInfoPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
BasicInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-basic-info',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\basic-info\basic-info.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      账户设置\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list class="device devicedetail">\n\n        <div class="boxgray"></div>\n\n    <ion-item class="ionItemPhone " >\n\n      <ion-thumbnail item-right>\n\n          <img src="{{basicInfo.headImage}}" style=" border: 2px solid #4A90e2;height: 60px; width: 60px;border-radius: 50%;" >\n\n      </ion-thumbnail>\n\n    头像\n\n    </ion-item>\n\n    <ion-item > \n\n      姓名\n\n        <ion-note item-right  class="ion-normal-color"> {{basicInfo.userName}} </ion-note>\n\n      </ion-item>\n\n      <ion-item no-lines> \n\n      性别\n\n        <ion-note item-right  class="ion-normal-color">  {{basicInfo.gender==\'M\'?"男":"女"}} </ion-note>\n\n      </ion-item>\n\n      <div class="boxgray"></div>\n\n    <ion-item > \n\n    公司名称\n\n      <ion-note item-right  class="ion-normal-color">  {{basicInfo.propertyName}} </ion-note>\n\n    </ion-item>\n\n    <ion-item > \n\n    所属项目\n\n      <ion-note item-right  class="ion-normal-color">  {{basicInfo.projectName}} </ion-note>\n\n    </ion-item>\n\n    <ion-item no-lines> \n\n    地址\n\n      <ion-note item-right  class="ion-normal-color">  {{basicInfo.address}} </ion-note>\n\n    </ion-item>\n\n   <!-- <ion-item *ngIf=" applyInfo.status == \'-1\' ">\n\n       <ion-badge item-right> 申请中...</ion-badge>\n\n    </ion-item> \n\n    <ion-item *ngIf=" applyInfo.status != \'-1\' ">\n\n      <button ion-button icon-left clear item-right *ngIf=" applyInfo.status != \'2\' " (click)="applyRise()" >\n\n        <ion-icon name="trending-up"></ion-icon>\n\n         转正申请\n\n      </button>\n\n      <button ion-button icon-left clear item-right  (click)="applyLeave()" >\n\n        <ion-icon name="warning"></ion-icon>\n\n         离职申请\n\n      </button>\n\n    </ion-item>  -->\n\n  </ion-list>\n\n  <button ion-button (click)="outPhone()" full class="commonSubmitBtn">退出登录</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\basic-info\basic-info.html"*/
    })
], BasicInfoPage);

//# sourceMappingURL=basic-info.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalMaterialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_detail_material_detail__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalMaterialPage = (function (_super) {
    __extends(PersonalMaterialPage, _super);
    function PersonalMaterialPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startDate = new Date().toISOString();
        _this.endDate = new Date().toISOString();
        _this.revert = -1;
        _this.materials = [];
        return _this;
    }
    PersonalMaterialPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    PersonalMaterialPage.prototype.confirmMenu = function () {
        var _this = this;
        if (new Date(this.endDate).getTime() < new Date(this.startDate).getTime()) {
            this.showToast("请选择正确的时间区间", 1500);
            return;
        }
        var param = {
            revert: this.revert == -1 ? '' : this.revert,
            start: this.startDate.substr(0, 10),
            end: this.endDate.substr(0, 10)
        };
        this.httpService.get('materialsOut/find', param).subscribe(function (data) { return _this.querySuccess(data); }, function (error) { return _this.queryError(); }, function () { return _this.closeWaitLoading(); });
    };
    PersonalMaterialPage.prototype.querySuccess = function (data) {
        this.materials = data;
        this.closeWaitLoading();
        this.menuCtrl.close();
    };
    PersonalMaterialPage.prototype.queryError = function () {
        this.closeWaitLoading();
        this.showToast("查询失败，请检查网络连接！", 2000);
    };
    PersonalMaterialPage.prototype.changeColor = function (item) { this.revert = item; };
    PersonalMaterialPage.prototype.getDetail = function (material) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__material_detail_material_detail__["a" /* MaterialDetailPage */], { 'materialId': material.id });
    };
    return PersonalMaterialPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BasePage */]));
PersonalMaterialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-personal-material',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\personal-material\personal-material.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      个人物资\n\n    </ion-title>\n\n    <span float-right class="iontitleright" menuToggle>筛选</span>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-nav #mycontent></ion-nav>\n\n <!--  <ion-item>\n\n      <ion-icon name="ionitron" item-right  menuToggle ></ion-icon>\n\n      点击图标或左滑去选择查询条件 \n\n  </ion-item> -->\n\n  <!-- <ion-list>  \n\n      <ion-item *ngFor="let material of materials"> \n\n            {{ material.materialsTypeName }} \n\n            <p> 物品名 {{ material.materialsName }} ; 领用日期 {{ material.stockOutTime }}</p>\n\n          <ion-badge item-left>{{ material.num }} {{ material.materialsUnit }}</ion-badge>\n\n          <ion-icon name="more" item-right (click)="getDetail(material)"  ></ion-icon>\n\n      </ion-item> \n\n  </ion-list> -->\n\n  <ion-list style="padding-top: 14px;">\n\n      <ion-item *ngFor="let material of materials" (click)="getDetail(material)" class="shebeilist">\n\n      <!--   {{ device.deviceCodeName }}\n\n        <p> 安装地点：{{ device.installLocation }} </p>\n\n        <p> 型号：{{ device.model }} </p> -->\n\n        <span style="padding-left: 0;">{{ material.materialsName }} <span style="font-size: 1.4rem;color:#999;">{{ material.materialsTypeName }}</span> </span>\n\n        <button  ion-button >{{ material.num }}{{ material.materialsUnit }}</button>\n\n        <p> 领用日期{{ material.stockOutTime  }} </p> \n\n      </ion-item>\n\n    </ion-list>\n\n  <ion-menu side="right" [content]="mycontent"  ng-hide="true">\n\n      <ion-content>\n\n          <div class="noradios">\n\n            <ion-item>\n\n                <ion-label>开始时间</ion-label>\n\n                <ion-datetime  displayFormat="YYYY-MM-DD"  [(ngModel)]="startDate" cancelText="取消" doneText="确认" ></ion-datetime>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label>结束时间</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD"   [(ngModel)]="endDate" cancelText="取消" doneText="确认" ></ion-datetime>\n\n              </ion-item> \n\n              <ion-item>\n\n                <ion-badge item-end color="{{ revert == -1 ? \'blue\' : \'light\' }}" (click)="changeColor(-1)" >全部</ion-badge>\n\n                <ion-badge item-end color="{{ revert == 0 ? \'blue\' : \'light\' }}" (click)="changeColor(0)" >交回</ion-badge>\n\n                <ion-badge item-end color="{{ revert == 1 ? \'blue\' : \'light\' }}" (click)="changeColor(1)" >不交回</ion-badge>\n\n                <span>状态</span>\n\n              </ion-item> \n\n          </div> \n\n          <ion-footer class="devicefooter">\n\n              <div>\n\n                  <button ion-button (click)="confirmMenu()" class="commonSubmitBtn smallbutton" style="background: #4A90e2;">确认</button>\n\n                <button ion-button (click)="closeMenu()" class="commonSubmitBtn smallbutton" style="color:#000;background: #fff;">取消</button>\n\n              </div>\n\n            </ion-footer>\n\n        <!--   <ion-footer>\n\n              <button ion-button outline icon-right (click)="closeMenu()" style="width: 47%;">取消</button>\n\n              <button ion-button icon-right class="commonSubmitBtn" (click)="confirmMenu()"  style="width: 47%;"> 确认</button> \n\n          </ion-footer> -->\n\n      </ion-content>\n\n  </ion-menu>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\personal-material\personal-material.html"*/
    })
], PersonalMaterialPage);

//# sourceMappingURL=personal-material.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_manage_leave_manage__ = __webpack_require__(79);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaveApplyPage = (function (_super) {
    __extends(LeaveApplyPage, _super);
    function LeaveApplyPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.applyType = '';
        _this.applyStart = new Date().toISOString();
        _this.applyEnd = new Date().toISOString();
        _this.applyDates = '';
        _this.applyNote = '';
        _this.leaveTypes = [];
        _this.nowDate = new Date().toISOString();
        _this.startMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
        _this.endMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
        return _this;
    }
    LeaveApplyPage.prototype.ionViewWillEnter = function () {
        this.getRepairTypes();
    };
    LeaveApplyPage.prototype.getRepairTypes = function () {
        var _this = this;
        this.httpService.get('qingJiaSetting').subscribe(function (data) {
            _this.leaveTypes = data;
            console.log(data);
            if (data) {
                _this.applicantsGroupId = data[0].userId;
            }
        }, function () { return console.log("success"); });
    };
    LeaveApplyPage.prototype.applyLeave = function () {
        var _this = this;
        if (!this.applyType || this.applyType === '') {
            this.showToast("请选择请假类别", 1500);
            return;
        }
        if (!this.applyStart || this.applyStart === '') {
            this.showToast("请选择开始时间", 1500);
            return;
        }
        if (!this.applyEnd || this.applyEnd === '') {
            this.showToast("请选择结束时间", 1500);
            return;
        }
        if (new Date(this.applyEnd).getTime() < new Date(this.applyStart).getTime()) {
            this.showToast("请选择正确的时间区间", 1500);
            return;
        }
        if (!this.applyDates || this.applyDates === '' || !(/^[0-9]+(\.5+)?$/.test(this.applyDates))) {
            this.showToast("请认真填写请假天数", 1500);
            return;
        }
        if (!this.applyNote || this.applyNote === '') {
            this.showToast("请填写请假事由", 1500);
            return;
        }
        var userApply = {
            applicantsGroupId: this.applicantsGroupId,
            startDate: this.applyStart.substr(0, 10),
            endDate: this.applyEnd.substr(0, 10),
            num: this.applyDates,
            note: this.applyNote,
            type_id: this.applyType
        };
        this.httpService.post('qingJia', userApply).subscribe(function (data) { return _this.applyLeaveSuccess(); }, function (error) { return _this.applyLeaveError(); });
    };
    LeaveApplyPage.prototype.applyLeaveSuccess = function () {
        this.showToast("申请成功", 2000);
        this.doPush(__WEBPACK_IMPORTED_MODULE_2__leave_manage_leave_manage__["a" /* LeaveManagePage */]);
    };
    LeaveApplyPage.prototype.applyLeaveError = function () {
        this.showToast("申请失败，请检查网络连接！", 2000);
    };
    return LeaveApplyPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
LeaveApplyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-leave-apply',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\leave-apply\leave-apply.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      请假申请\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>请假类别</ion-label>\n\n      <ion-select [(ngModel)]="applyType" cancelText="取消" okText="确定" type="text">\n\n        <ion-option value="{{leaveType.id}}" *ngFor="let leaveType of leaveTypes"> {{leaveType.typeName}} </ion-option>\n\n      </ion-select>\n\n      <p item-right class="yesok"></p>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>开始时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" min="{{nowDate}}" max="{{startMaxDate}}" [(ngModel)]="applyStart" cancelText="取消"\n\n        doneText="确认"></ion-datetime>\n\n      <p item-right class="yesok"></p>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>结束时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" min="{{nowDate}}" max="{{startMaxDate}}" [(ngModel)]="applyEnd" cancelText="取消"\n\n        doneText="确认"></ion-datetime>\n\n      <p item-right class="yesok"></p>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>请假天数</ion-label>\n\n      <ion-input type="text" [(ngModel)]="applyDates" placeholder="请假天数为 0.5 * n" style="text-align: right;"></ion-input>\n\n    </ion-item>\n\n    <div class="fromlistwrap">\n\n      <div class="fromlist">\n\n        <div>\n\n          <span float-left>请假理由</span>\n\n        </div>\n\n      </div>\n\n      <div class="txt" style="padding-top: 0;">\n\n        <div>\n\n          <ion-textarea placeholder="请假事由" rows="8" [(ngModel)]="applyNote"></ion-textarea>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!--  <ion-item class="ionItemBorderBottom">\n\n      <ion-label>开始时间</ion-label>\n\n      <ion-datetime  displayFormat="YYYY-MM-DD" min="{{nowDate}}" max="{{startMaxDate}}" [(ngModel)]="applyStart" cancelText="取消" doneText="确认" ></ion-datetime>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>结束时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" min="{{nowDate}}" max="{{endMaxDate}}" [(ngModel)]="applyEnd"  cancelText="取消" doneText="确认" ></ion-datetime>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>请假天数</ion-label>\n\n      <ion-input type="text" [(ngModel)]="applyDates" placeholder="请假天数为 0.5 * n" ></ion-input>\n\n      <ion-icon name="time" item-left></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom" > \n\n      <ion-textarea placeholder="请假事由"  rows="8" [(ngModel)]="applyNote"></ion-textarea>\n\n      <ion-icon name="paper" item-left></ion-icon>\n\n    </ion-item> -->\n\n  </ion-list>\n\n  <button ion-button (click)="applyLeave()" class="commonSubmitBtn smallbutton" style="background: #4A90e2;width: 90%;margin-left: 5%;border-radius: 5px;">提交</button>\n\n  <!-- <button ion-button (click)="applyLeave()" full class="commonSubmitBtn" >提交</button>  -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\leave-apply\leave-apply.html"*/
    })
], LeaveApplyPage);

//# sourceMappingURL=leave-apply.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_notice_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BasePage = (function () {
    function BasePage(navCtrl, navParams, httpService, noticeService, storage, alertCtrl, viewCtrl, menuCtrl, event, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.noticeService = noticeService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.event = event;
        this.loadingCtrl = loadingCtrl;
        this.loader = this.loadingCtrl.create({ content: "" });
    }
    BasePage.prototype.ionViewDidLoad = function () {
    };
    BasePage.prototype.showLoading = function (contentStr, durationTime) {
        this.noticeService.showLoading(contentStr, durationTime);
    };
    BasePage.prototype.hideLoading = function () {
        this.noticeService.hideLoading();
    };
    BasePage.prototype.showAlert = function (titleStr, subtitleStr) {
        this.noticeService.showAlert(titleStr, subtitleStr);
    };
    BasePage.prototype.showToast = function (msg, durationTime) {
        this.noticeService.showToast(msg, durationTime);
    };
    BasePage.prototype.handleErr = function (error) {
        var obj = null;
        if (error) {
            obj = error.json();
        }
        this.showToast(obj.errorMessage || '服务器内部异常，请稍后重试');
    };
    BasePage.prototype.doAskPush = function (message, closeButtonText, showCloseButton, page) {
        var _this = this;
        var toast = this.noticeService.getToastCtrl().create({
            message: message,
            showCloseButton: showCloseButton,
            duration: 3000,
            closeButtonText: closeButtonText
        });
        toast.onDidDismiss(function (data, role) {
            if (role == "close") {
                _this.navCtrl.push(page);
            }
        });
        toast.present();
    };
    BasePage.prototype.doPush = function (page) {
        this.navCtrl.push(page);
    };
    BasePage.prototype.pushAndRemovePage = function (pushPage, removeStep, paramObj) {
        var _this = this;
        this.navCtrl.push(pushPage, paramObj).then(function () {
            if (removeStep) {
                for (removeStep; removeStep > 0; removeStep--) {
                    console.log("removeStep=" + removeStep);
                    _this.navCtrl.remove(removeStep);
                }
            }
            else {
                var index = _this.viewCtrl.index;
                _this.navCtrl.remove(index);
            }
        });
    };
    BasePage.prototype.openWaitLoading = function () {
        this.loader.present();
    };
    BasePage.prototype.closeWaitLoading = function () {
        this.loader.dismiss();
    };
    BasePage.prototype.openWaitLoadingTime = function (content, times) {
        var lodading = this.loadingCtrl.create({
            content: content ? content : "",
            duration: times ? times : 3000
        });
        lodading.present();
    };
    return BasePage;
}());
BasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
        template: '<h1>BasePage</h1>',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1__common_notice_service__["a" /* NoticeService */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
], BasePage);

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.AUTH = 'auth_key';
Constants.PERSONALINFO = 'personalInfo';
Constants.TODOTASK_NUM_ACTION = 'updateMsgNum';
Constants.REFRESH_MATTER_ACTION = 'refreshMatter';
// production env settings
Constants.IS_DEV = true;
Constants.BASE_URL = Constants.IS_DEV ? '' : 'http://mojinshi.com/api/web/v1/';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TaskPage = (function (_super) {
    __extends(TaskPage, _super);
    function TaskPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.task = 'todo';
        _this.todoList = [];
        _this.doingList = [];
        _this.finishList = [];
        _this.todoPushPage = __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__["a" /* TodotaskPage */];
        _this.finishPushPage = __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__["a" /* TaskdetailPage */];
        _this.doingPushPage = __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__["a" /* TaskdetailPage */];
        _this.todoTaskNum = '';
        _this.list = [
            { 'thing': 'todo', 'isclass': true, 'name': '待办' },
            { 'thing': 'doing', 'isclass': false, 'name': '进行中' },
            { 'thing': 'finish', 'isclass': false, 'name': '已完成' }
        ];
        return _this;
    }
    TaskPage.prototype.ionViewWillEnter = function () {
        this.getTodoList();
        this.getDoingList();
        this.getFinishList();
    };
    TaskPage.prototype.ionViewDidLeave = function () {
        this.todoList = [];
        this.doingList = [];
        this.finishList = [];
        this.todoTaskNum = '';
    };
    TaskPage.prototype.getTodoList = function () {
        var _this = this;
        var url = 'task/todotasks';
        this.filterTaskType(this.httpService.get(url))
            .subscribe(function (res) {
            // console.log(this.todoList,res)
            _this.todoList = _this.orderCreateTimeDesc(res);
            _this.todoTaskNum = _this.parseBadageNum(_this.todoList);
            _this.event.publish(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].TODOTASK_NUM_ACTION, _this.parseBadageNum(_this.todoList));
        });
    };
    TaskPage.prototype.getDoingList = function () {
        var _this = this;
        var url = 'task/inprogresstasks';
        this.filterTaskType(this.httpService.get(url))
            .subscribe(function (res) { return _this.doingList = _this.orderCreateTimeDesc(res); });
    };
    TaskPage.prototype.getFinishList = function () {
        var _this = this;
        var url = 'task/completedtasks';
        this.filterTaskType(this.httpService.get(url))
            .subscribe(function (res) { return _this.finishList = _this.orderCreateTimeDesc(res); });
    };
    TaskPage.prototype.parseBadageNum = function (arr) {
        return arr.length == 0 ? '' : arr.length;
    };
    TaskPage.prototype.filterTaskType = function (observable) {
        return observable
            .flatMap(function (i) { return i; })
            .filter(function (j) { return j['type'] == 'qingJia' || j['type'] == 'repairFormDetail'; })
            .toArray();
    };
    TaskPage.prototype.onSegmentChange = function () {
        switch (this.task) {
            case 'todo':
                this.todoList = [];
                this.getTodoList();
                break;
            case 'doing':
                this.doingList = [];
                this.getDoingList();
                break;
            case 'finish':
                this.finishList = [];
                this.getFinishList();
                break;
        }
    };
    TaskPage.prototype.segemt = function (index, key) {
        //jquery(this).addClass("activeborder").siblings().removeClass("activeborder");
        //let that = this;
        this.list.forEach(function (element) {
            element.isclass = false;
        });
        this.list[index].isclass = true;
        switch (key) {
            case 'todo':
                this.todoList = [];
                this.getTodoList();
                break;
            case 'doing':
                this.doingList = [];
                this.getDoingList();
                break;
            case 'finish':
                this.finishList = [];
                this.getFinishList();
                break;
        }
    };
    TaskPage.prototype.orderCreateTimeDesc = function (comments) {
        var result = [];
        if (comments && comments.length > 0) {
            result = comments.slice(0);
            result.sort(function (p, v) {
                return new Date(v.createTime).getTime() - new Date(p.createTime).getTime();
            });
        }
        return result;
    };
    return TaskPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BasePage */]));
TaskPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
        selector: 'page-task',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\task\task.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      任务\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <div class="renwu">\n\n    <div *ngFor="let item of list;let i = index;" [ngClass]="{\'activeborder\':item.isclass}" (click)="segemt(i,item.thing)">{{item.name}}</div>\n\n  </div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="wrap" *ngIf="list[0].isclass">\n\n    <div class="list" *ngFor="let item of todoList" [navPush]="todoPushPage" [navParams]="item">\n\n      <div class="listbody">\n\n        <div class="bodyleft">\n\n          <img src="assets/images/profile_small.jpg" alt="">\n\n          <div>\n\n            <p>{{item.reporter}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.keeperPhone}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.phone}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.location}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.address}}</p>\n\n          </div>\n\n        </div>\n\n        <div class="bodyright">\n\n          <button ion-button>{{item.typeName}}</button>\n\n        </div>\n\n      </div>\n\n      <div class="listbody">\n\n        <div class="txt" *ngIf="item.type==\'qingJia\'">{{ item.taskObject.note}}</div>\n\n        <div class="txt" *ngIf="item.type==\'repairFormDetail\'">{{ item.taskObject.description}}</div>\n\n        <div class="txttime">{{ item.taskObject.createTime }}</div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="wrap" *ngIf="list[1].isclass">\n\n    <div class="list" *ngFor="let item of doingList" [navPush]="doingPushPage" [navParams]="item">\n\n      <div class="listbody">\n\n        <div class="bodyleft">\n\n          <img src="assets/images/profile_small.jpg" alt="">\n\n          <div>\n\n            <p>{{item.reporter}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.keeperPhone}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.phone}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.location}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.address}}</p>\n\n          </div>\n\n        </div>\n\n        <div class="bodyright">\n\n          <button ion-button>{{item.typeName}}</button>\n\n        </div>\n\n      </div>\n\n      <div class="listbody">\n\n        <div class="txt" *ngIf="item.type==\'qingJia\'">{{ item.taskObject.note}}</div>\n\n        <div class="txt" *ngIf="item.type==\'repairFormDetail\'">{{ item.taskObject.description}}</div>\n\n        <div class="txttime">{{ item.taskObject.createTime }}</div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="wrap" *ngIf="list[2].isclass">\n\n    <div class="list" *ngFor="let item of finishList" [navPush]="finishPushPage" [navParams]="item">\n\n      <div class="listbody">\n\n        <div class="bodyleft">\n\n          <img src="assets/images/profile_small.jpg" alt="">\n\n          <div>\n\n            <p>{{item.reporter}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.keeperPhone}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.phone}}</p>\n\n            <p *ngIf="item.type==\'repairFormDetail\'">{{item.taskObject.location}}</p>\n\n            <p *ngIf="item.type==\'qingJia\'">{{item.taskObject.type.user.address}}</p>\n\n          </div>\n\n        </div>\n\n        <div class="bodyright">\n\n          <button ion-button>{{item.typeName}}</button>\n\n        </div>\n\n      </div>\n\n      <div class="listbody">\n\n        <div class="txt" *ngIf="item.type==\'qingJia\'">{{ item.taskObject.note}}</div>\n\n        <div class="txt" *ngIf="item.type==\'repairFormDetail\'">{{ item.taskObject.description}}</div>\n\n        <div class="txttime">{{ item.taskObject.createTime }}</div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\task\task.html"*/
    })
], TaskPage);

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_photo_viewer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskdetailPage = (function () {
    function TaskdetailPage(navCtrl, navParams, photoViewer, httpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.httpService = httpService;
        this.comments = [];
        this.isRepair = false;
        this.isQingjia = false;
        this.pageTitle = '任务详情';
        this.msgDetail = this.navParams.data;
        this.taskObject = this.msgDetail.taskObject;
        if (this.msgDetail.type == 'qingJia') {
            this.isQingjia = true;
            this.pageTitle = '请假详情';
            var qingjiaUrl = 'qingJia/' + this.taskObject.id + '/detail';
            this.httpService.get(qingjiaUrl)
                .subscribe(function (res) { _this.comments = _this.orderCreateTimeDesc(res.comments); });
        }
        else {
            this.isRepair = true;
        }
    }
    TaskdetailPage.prototype.previewImg = function (imagePath) {
        this.photoViewer.show(imagePath);
    };
    TaskdetailPage.prototype.orderCreateTimeDesc = function (comments) {
        var result = [];
        if (comments && comments.length > 0) {
            result = comments.slice(0);
            result.sort(function (p, v) {
                return new Date(v.createTime).getTime() - new Date(p.createTime).getTime();
            });
        }
        return result;
    };
    return TaskdetailPage;
}());
TaskdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-taskdetail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\task\taskdetail\taskdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ pageTitle }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="isRepair">\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修时间</span>\n\n        <span float-right>{{ taskObject.createTime }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修状态</span>\n\n        <span float-right>{{ taskObject.status }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修单位</span>\n\n        <span float-right>{{ taskObject.location }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修人</span>\n\n        <span float-right>{{ taskObject.keeperName }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修类型</span>\n\n        <span float-right>{{ taskObject.demandTypeValue }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>描述</span>\n\n      </div>\n\n    </div>\n\n    <div class="txt">\n\n      <div>\n\n        <p> {{ taskObject.description }}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-content *ngIf="isQingjia">\n\n  <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n      <ion-col col-12>审批信息</ion-col>\n\n      <div>\n\n        <ul class="comment-pipeline">\n\n          <li [ngClass]="{\'now\':first}" *ngFor="let item of comments;let first=first;">\n\n            <div class="date">\n\n              <div class="day">{{item.createTime | slice:5:10}}</div>\n\n              <div class="time">{{item.createTime | slice:11:16}}</div>\n\n            </div>\n\n            <div class="comment">{{ item.user.userName }}\n\n              <br/>{{item.comment}}</div>\n\n          </li>\n\n          <li class="now" *ngIf="comments <= 0">\n\n            <div class="date">\n\n              <div class="day">刚刚</div>\n\n            </div>\n\n            <div class="comment">\n\n              暂无信息\n\n            </div>\n\n          </li>\n\n        </ul>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>申请人</span>\n\n        <span float-right>{{ msgDetail.reporter }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>申请时间</span>\n\n        <span float-right>{{ taskObject.createTime }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假类型</span>\n\n        <span float-right>{{ taskObject.type.types }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>开始时间</span>\n\n        <span float-right>{{ taskObject.startDate }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>结束时间</span>\n\n        <span float-right>{{ taskObject.endDate }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假天数</span>\n\n        <span float-right>{{ taskObject.num }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假理由</span>\n\n      </div>\n\n    </div>\n\n    <div class="txt">\n\n      <div>\n\n        <p> {{ taskObject.note }}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\task\taskdetail\taskdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_0__common_http_service__["a" /* HttpService */]])
], TaskdetailPage);

//# sourceMappingURL=taskdetail.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodotaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_notice_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodotaskPage = (function () {
    function TodotaskPage(navCtrl, navParams, photoViewer, httpService, noticeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.httpService = httpService;
        this.noticeService = noticeService;
        this.comment = {};
        this.isRepair = false;
        this.isQingjia = false;
        this.qingjiaComments = [];
        this.msgDetail = this.navParams.data;
        this.taskObject = this.msgDetail.taskObject;
        if (this.msgDetail.type == 'qingJia') {
            this.isQingjia = true;
            var qingjiaUrl = 'qingJia/' + this.taskObject.id + '/detail';
            this.httpService.get(qingjiaUrl)
                .subscribe(function (res) { return _this.qingjiaComments = res.comments; });
        }
        else {
            this.isRepair = true;
        }
    }
    TodotaskPage.prototype.handleRepair = function () {
        var _this = this;
        var comment = this.comment;
        if (!this.comment.comment) {
            this.noticeService.showToast('备注信息不能为空');
            return;
        }
        this.noticeService.showLoading('正在提交，请稍后...');
        this.assign().subscribe(function () {
            var command = { 'status': "IN_PROGRESS" };
            _this.complete({ comment: comment, command: command });
        });
        this.noticeService.hideLoading();
    };
    TodotaskPage.prototype.previewImg = function (imagePath) {
        this.photoViewer.show(imagePath);
    };
    TodotaskPage.prototype.handleQingjia = function (handleType) {
        var _this = this;
        // 1：accept 0：reject
        var comment = this.comment;
        if (!comment.comment) {
            this.noticeService.showToast('审批意见不能为空');
            return;
        }
        this.noticeService.showLoading('正在提交，请稍后...');
        this.assign().subscribe(function () {
            var command = { 'review_result': handleType };
            _this.complete({ comment: comment, command: command });
        });
        this.noticeService.hideLoading();
    };
    TodotaskPage.prototype.assign = function () {
        var url = 'task/' + this.taskObject.id + '/assign';
        var comment = this.comment;
        return this.httpService.put(url, { 'comment': comment });
    };
    TodotaskPage.prototype.complete = function (requestBody) {
        var _this = this;
        var completeUrl = 'task/' + this.taskObject.id + '/complete';
        this.httpService.put(completeUrl, requestBody)
            .subscribe(function () { return _this.navCtrl.pop(); });
    };
    return TodotaskPage;
}());
TodotaskPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
        selector: 'page-todotask',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\task\todotask\todotask.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>任务详情</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="isRepair">\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修时间</span>\n\n        <span float-right>{{ taskObject.createTime }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修状态</span>\n\n        <span float-right>{{ taskObject.status }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修单位</span>\n\n        <span float-right>{{ taskObject.location }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>报修人</span>\n\n        <span float-right>{{ taskObject.keeperName }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>描述</span>\n\n      </div>\n\n    </div>\n\n    <div class="txt">\n\n      <div>\n\n        <p> {{ taskObject.description }}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap fromlistwrappadding">\n\n    <ion-textarea rows="7" placeholder="备注信息" [(ngModel)]="comment.comment" style="padding-top: 3px;padding-bottom: 3px"></ion-textarea>\n\n  </div>\n\n  <ion-card *ngIf="taskObject.comments">\n\n    <ion-list>\n\n      <ion-item *ngFor=" let comment of taskObject.comments ">\n\n        <div>\n\n          <p> {{ comment.comment }} </p>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngIf=" taskObject.images.length > 0 ">\n\n    <ion-list margin>\n\n      <ion-item *ngFor="let imagePath of taskObject.images ">\n\n        <img src="{{ imagePath }} " (click)="previewImg(imagePath) " />\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf="isRepair">\n\n  <button ion-button (click)="handleRepair()" class="commonSubmitBtn smallbutton" style="width:100%;background: #4A90e2;">我来处理</button>\n\n</ion-footer>\n\n<ion-content *ngIf="isQingjia">\n\n  <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n      <ion-col col-12>审批信息</ion-col>\n\n      <div>\n\n        <ul class="comment-pipeline">\n\n          <li [ngClass]="{\'now\':first}" *ngFor="let item of comments;let first=first;">\n\n            <div class="date">\n\n              <div class="day">{{item.createTime | slice:5:10}}</div>\n\n              <div class="time">{{item.createTime | slice:11:16}}</div>\n\n            </div>\n\n            <div class="comment">{{ item.user.userName }}\n\n              <br/>{{item.comment}}</div>\n\n          </li>\n\n          <li class="now" *ngIf="!comments">\n\n            <div class="date">\n\n              <div class="day">刚刚</div>\n\n            </div>\n\n            <div class="comment">\n\n              暂无信息\n\n            </div>\n\n          </li>\n\n        </ul>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>申请人</span>\n\n        <span float-right>{{ msgDetail.reporter }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>申请时间</span>\n\n        <span float-right>{{ taskObject.createTime }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假类型</span>\n\n        <span float-right>{{ taskObject.type.types }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>开始时间</span>\n\n        <span float-right>{{ taskObject.startDate }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>结束时间</span>\n\n        <span float-right>{{ taskObject.endDate }}</span>\n\n      </div>\n\n    </div>\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假天数</span>\n\n        <span float-right>{{ taskObject.num }}</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left>请假理由</span>\n\n      </div>\n\n    </div>\n\n    <div class="txt">\n\n      <div>\n\n        <p> {{ taskObject.note }}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="fromlistwrap fromlistwrappadding fromlistwraplast">\n\n    <ion-textarea rows="7" placeholder="审批意见" [(ngModel)]="comment.comment" style="padding-top: 3px;padding-bottom: 3px"></ion-textarea>\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="isQingjia">\n\n  <div *ngIf="isQingjia">\n\n    <button ion-button (click)="handleQingjia(1)" class="commonSubmitBtn smallbutton" style="background: #4A90e2;">同意</button>\n\n    <button ion-button (click)="handleQingjia(0)" class="commonSubmitBtn smallbutton" style="background: #f53d3d;">驳回申请</button>\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\task\todotask\todotask.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1__common_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_0__common_notice_service__["a" /* NoticeService */]])
], TodotaskPage);

//# sourceMappingURL=todotask.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matter_matter__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_search_device_search__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_list_device_list__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bind_inspect_bind_inspect__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_basic_info_basic_info__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_management_device_management__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_personal_material_personal_material__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__personal_leave_manage_leave_manage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_constants__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var WorkbenchPage = (function (_super) {
    __extends(WorkbenchPage, _super);
    function WorkbenchPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.basicInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_10__common_constants__["a" /* Constants */].PERSONALINFO));
        _this.items = [
            {
                icon: "assets/images/work/me-device.png",
                replace: "设备管理",
                page: __WEBPACK_IMPORTED_MODULE_4__device_list_device_list__["a" /* DeviceListPage */]
            }, {
                icon: "assets/images/work/me-bind.png",
                replace: "绑定审核",
                page: __WEBPACK_IMPORTED_MODULE_5__bind_inspect_bind_inspect__["a" /* BindInspectPage */]
            }, {
                icon: "assets/images/work/me-afl.png",
                replace: "请假管理",
                page: __WEBPACK_IMPORTED_MODULE_9__personal_leave_manage_leave_manage__["a" /* LeaveManagePage */]
            }, {
                icon: "assets/images/work/me-goods.png",
                replace: "个人物资",
                page: __WEBPACK_IMPORTED_MODULE_8__personal_personal_material_personal_material__["a" /* PersonalMaterialPage */]
            }, {
                icon: "assets/images/work/me-work.png",
                replace: "工作管理",
                page: __WEBPACK_IMPORTED_MODULE_7__device_management_device_management__["a" /* DeviceManagementPage */]
            }, {
                icon: "assets/images/work/me-search.png",
                replace: "设备搜索",
                page: __WEBPACK_IMPORTED_MODULE_3__device_search_device_search__["a" /* DeviceSearchPage */]
            }
        ];
        _this.itemList = {
            icon: "list",
            name: "设备列表",
            page: __WEBPACK_IMPORTED_MODULE_4__device_list_device_list__["a" /* DeviceListPage */]
        };
        _this.itemBind = {
            icon: "link",
            name: "绑定审核",
            page: __WEBPACK_IMPORTED_MODULE_5__bind_inspect_bind_inspect__["a" /* BindInspectPage */]
        };
        _this.itemSearch = {
            icon: "search",
            name: "设备搜索",
            page: __WEBPACK_IMPORTED_MODULE_3__device_search_device_search__["a" /* DeviceSearchPage */]
        };
        _this.itemMatter = {
            icon: "bookmarks",
            name: "报事",
            page: __WEBPACK_IMPORTED_MODULE_0__matter_matter__["a" /* MatterPage */]
        };
        return _this;
    }
    WorkbenchPage.prototype.ionViewWillEnter = function () {
        // this.getBasicInfo()
    };
    WorkbenchPage.prototype.getBasicInfo = function () {
        var _this = this;
        var date = new Date().getTime();
        this.httpService.get("user/info?timestamp=" + date).subscribe(function (data) {
            if (!data.headImage || data.headImage === null || data.headImage === '') {
                data.headImage = 'assets/images/default_avatar.jpg';
            }
            _this.infodata = data;
        }, function (error) { return _this.showToast("获取基本信息失败", 2000); });
    };
    WorkbenchPage.prototype.gotoItem2 = function () {
        this.doPush(__WEBPACK_IMPORTED_MODULE_6__personal_basic_info_basic_info__["a" /* BasicInfoPage */]);
    };
    WorkbenchPage.prototype.gotoItem = function (item) {
        if (item.page == null) {
            this.showToast("待处理", 2000);
        }
        else {
            this.doPush(item.page);
        }
    };
    return WorkbenchPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BasePage */]));
WorkbenchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-workbench',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\workbench.html"*/'<ion-content class="card-background-page">\n\n  <div class="fromlistwrap" style="margin-top: 0;">\n\n    <div class="fromlist">\n\n      <div>\n\n        <span float-left></span>\n\n        <span float-right style="line-height: 55px;">\n\n          <ion-icon name="ios-settings-outline" item-right class="ion-icon-normal-color workionic" (click)="gotoItem2()"></ion-icon>\n\n        </span>\n\n      </div>\n\n    </div>\n\n    <div class="worktop">\n\n      <span float-left *ngIf="basicInfo">\n\n        <img src="{{basicInfo.headImage}}" alt="">\n\n      </span>\n\n      <span float-left *ngIf="!basicInfo">\n\n        <img src="assets/images/default_avatar.jpg" alt="">\n\n      </span>\n\n      <span float-left>\n\n        <p *ngIf="basicInfo">{{basicInfo.userName}}</p>\n\n        <p *ngIf="basicInfo">{{basicInfo.propertyName}}</p>\n\n        <p *ngIf="!basicInfo">获取失败</p>\n\n        <p *ngIf="!basicInfo">获取失败</p>\n\n      </span>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="div-background standard-space-top">\n\n    <ion-grid>\n\n      <ion-row class="menu">\n\n        <ion-col col-4 *ngFor="let item of items;let i = index" (click)="gotoItem(item)">\n\n          <div>\n\n            <img src="{{ item.icon }}">\n\n            <p class="item-text">\n\n              {{ item.replace }}\n\n            </p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="fromlistwrap" style="background: none;">\n\n    <!-- <img src="assets/images/work/new.jpg" alt=""> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\workbench.html"*/
    })
], WorkbenchPage);

//# sourceMappingURL=workbench.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_notice_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matter_detail_matter_detail__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatterPage = (function () {
    function MatterPage(httpService, navCtrl, modalCtrl, event, noticeService) {
        var _this = this;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.event = event;
        this.noticeService = noticeService;
        this.matterList = [];
        this.resource = 'matter';
        this.searchInput = '';
        this.pageNum = 1;
        this.pageSize = 10;
        this.hasMoreData = false;
        event.subscribe(__WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* Constants */].REFRESH_MATTER_ACTION, function (arg) { return _this.ionViewDidLoad(); });
    }
    MatterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pageNum = 1;
        this.getMatterList(1)
            .subscribe(function (res) { return _this.matterList = res.data; });
    };
    MatterPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.hasMoreData = true;
        this.pageNum = 1;
        setTimeout(function () {
            refresher.complete();
        }, 3000);
        this.getMatterList(1)
            .subscribe(function (res) {
            _this.matterList = res.data;
            refresher.complete();
        });
    };
    MatterPage.prototype.getMatterList = function (pageNum) {
        var _this = this;
        this.noticeService.showLoading('');
        var pageInfo = { 'pageNum': pageNum, 'pageSize': this.pageSize };
        return this.httpService.get(this.resource, pageInfo)
            .do(function (data) {
            var totalpages = Math.ceil(data.totalNumbers / _this.pageSize);
            _this.hasMoreData = pageNum < totalpages;
        })
            .finally(function () { return _this.noticeService.hideLoading(); });
    };
    MatterPage.prototype.onInputChange = function (event) {
        var _this = this;
        this.hasMoreData = false;
        var keywords = { 'keywords': this.searchInput };
        this.httpService.get(this.resource, keywords)
            .subscribe(function (res) { return _this.matterList = res.data; });
    };
    MatterPage.prototype.onCancel = function (event) {
        this.searchInput = '';
        this.ionViewDidLoad();
    };
    MatterPage.prototype.addMatter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__matter_detail_matter_detail__["a" /* MatterDetailPage */], null);
        modal.present();
    };
    MatterPage.prototype.itemDetail = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__matter_detail_matter_detail__["a" /* MatterDetailPage */], item);
        modal.present();
    };
    MatterPage.prototype.loadMore = function () {
        var _this = this;
        this.pageNum++;
        this.getMatterList(this.pageNum)
            .subscribe(function (res) {
            res.data.forEach(function (element) {
                _this.matterList.push(element);
            });
        });
    };
    return MatterPage;
}());
MatterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
        selector: 'page-matter',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\matter\matter.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      报事\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="请稍等...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-searchbar placeholder="请输入报事内容关键字" [(ngModel)]="searchInput" (ionCancel)="onCancel($event)"\n\n    (change)="onInputChange($event)" debounce="2000">\n\n  </ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of matterList" (click)="itemDetail(item)">\n\n      <h2>{{ item.houseInfo.location }}</h2>\n\n      <ion-badge float-right color="{{ item.status | matterTag:\'color\' }}"> {{ item.status | matterTag }} </ion-badge>\n\n      <p> {{ item.createTime }}</p>\n\n      <h3>{{ item.content }}</h3>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div *ngIf="hasMoreData" padding-horizontal>\n\n    <button ion-button (click)="loadMore()" color="primary" block class="commonSubmitBtn">加载更多</button>\n\n  </div>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="addMatter()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\matter\matter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_0__common_notice_service__["a" /* NoticeService */]])
], MatterPage);

//# sourceMappingURL=matter.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_notice_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatterDetailPage = (function () {
    function MatterDetailPage(navCtrl, navParams, viewCtrl, httpService, noticeService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.noticeService = noticeService;
        this.events = events;
        this.isAdd = true;
        this.comment = '';
        this.resource = 'matter';
        this.matter = { 'typeId': '', 'content': '', 'houseId': '' };
        this.matterTypes = [];
        this.houseList = [];
        this.item = navParams.data;
        if (this.item.id) {
            this.isAdd = false;
        }
        this.getMatterTypes();
    }
    MatterDetailPage.prototype.dismiss = function () {
        this.noticeService.hideLoading();
        this.viewCtrl.dismiss();
    };
    MatterDetailPage.prototype.acceptMatter = function () {
        var _this = this;
        if (this.comment.length == 0 || this.comment == '') {
            this.noticeService.showToast('请输入处理内容');
            return;
        }
        this.noticeService.showLoading('正在处理报事...');
        var accept = {};
        accept['comment'] = this.comment;
        accept['id'] = this.item.id;
        var url = this.resource + '/accept';
        this.httpService.put(url, accept)
            .subscribe(function () {
            _this.dismiss();
            _this.sendRefreshEvent();
        });
    };
    MatterDetailPage.prototype.addMatter = function (item) {
        var _this = this;
        if (item.content.length == 0 || item.content == '') {
            this.noticeService.showToast('请输入报事内容');
            return;
        }
        if (item.houseId == '') {
            this.noticeService.showToast('请选择报事单位');
            return;
        }
        if (item.typeId == '') {
            this.noticeService.showToast('请选择报事类型');
            return;
        }
        this.noticeService.showLoading('正在保存报事...');
        this.httpService.post(this.resource, item)
            .subscribe(function () {
            _this.dismiss();
            _this.sendRefreshEvent();
        });
    };
    MatterDetailPage.prototype.getMatterTypes = function () {
        var _this = this;
        var url = this.resource + '/types';
        this.httpService.get(url)
            .subscribe(function (res) { return _this.matterTypes = res; });
    };
    MatterDetailPage.prototype.getHouseByKeywords = function (keywords) {
        var _this = this;
        if (!keywords) {
            return;
        }
        this.noticeService.showLoading('正在获取房屋数据');
        var url = 'house';
        var qInfo = { 'keywords': keywords };
        this.httpService.get(url, qInfo)
            .finally(function () { return _this.noticeService.hideLoading(); })
            .subscribe(function (res) {
            _this.houseList = res;
        });
    };
    MatterDetailPage.prototype.onInputChange = function (event) {
        this.getHouseByKeywords(this.searchInput);
    };
    MatterDetailPage.prototype.sendRefreshEvent = function () {
        this.events.publish(__WEBPACK_IMPORTED_MODULE_0__common_constants__["a" /* Constants */].REFRESH_MATTER_ACTION);
    };
    return MatterDetailPage;
}());
MatterDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
        selector: 'page-matter-detail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\matter\matter-detail\matter-detail.html"*/'<ion-content class="main-view">\n\n  <div class="overlay" (click)="dismiss()"></div>\n\n\n\n  <ion-scroll class="modal_content" scrollY="true" *ngIf="!isAdd" padding>\n\n    <h2 text-center>{{ item.houseInfo.location }}</h2>\n\n    <ion-badge float-right color="{{ item.status | matterTag:\'color\' }}"> {{ item.status | matterTag }} </ion-badge>\n\n    <p> {{ item.createTime }} </p>\n\n    <b>报事类型 : {{ item.type.type }} </b>\n\n    <p>报事详情 : {{ item.content }}</p>\n\n\n\n    <div *ngIf="item.status == 0">\n\n      <ion-textarea rows="3" placeholder="请输入处理内容" [(ngModel)]="comment"></ion-textarea>\n\n      <button ion-button color="primary" block class="commonSubmitBtn" (click)="acceptMatter()">处理报事</button>\n\n    </div>\n\n\n\n    <div *ngIf="item.status == 1">\n\n      <p>处理备注 : {{ item.comment }}</p>\n\n      <button ion-button (click)="dismiss()" color="primary" block class="commonSubmitBtn">确定</button>\n\n    </div>\n\n  </ion-scroll>\n\n\n\n  <ion-scroll class="modal_content" scrollY="true" *ngIf="isAdd" padding>\n\n\n\n    <h2 text-center>新增报事</h2>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>报事单位</ion-label>\n\n        <ion-input type="text" placeholder="请输入关键字" (change)="onInputChange($event)" [(ngModel)]="searchInput"></ion-input>\n\n        <ion-select [(ngModel)]="matter.houseId" cancelText="取消" okText="确认">\n\n          <ion-option *ngIf="houseList?.length == 0" value="notice" [disabled]="true">请先输入关键字选择报事单位</ion-option>\n\n          <ion-option value="{{ house.roomId }}" *ngFor="let house of houseList">{{ house.location }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>报事类型</ion-label>\n\n        <ion-select [(ngModel)]="matter.typeId" cancelText="取消" okText="确认">\n\n          <ion-option value="{{ type.id }}" *ngFor="let type of matterTypes">{{ type.type }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-textarea rows="3" placeholder="请输入处理内容" [(ngModel)]="matter.content"></ion-textarea>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <button ion-button color="primary" block class="commonSubmitBtn" (click)="addMatter(matter)">新增报事</button>\n\n\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\matter\matter-detail\matter-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__common_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__common_notice_service__["a" /* NoticeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], MatterDetailPage);

//# sourceMappingURL=matter-detail.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_detail_device_detail__ = __webpack_require__(136);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceSearchPage = (function (_super) {
    __extends(DeviceSearchPage, _super);
    function DeviceSearchPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.devices = [];
        return _this;
    }
    DeviceSearchPage.prototype.searchDevice = function (ev) {
        var _this = this;
        var val = ev.target.value;
        this.httpService.get('deviceDetails?keywords=' + val).subscribe(function (data) { return _this.checkSearchData(data); }, function () { return console.log("success"); });
    };
    DeviceSearchPage.prototype.checkSearchData = function (data) {
        this.devices = data;
    };
    DeviceSearchPage.prototype.getDeviceDetail = function (device) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__device_detail_device_detail__["a" /* DeviceDetailPage */], { "deviceId": device.id });
    };
    return DeviceSearchPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
DeviceSearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-device-search',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\device-search\device-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      设备搜索\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n   <ion-searchbar (ionInput)="searchDevice($event)" style="padding: 0;border:0;background: none;"  placeholder="输入名称 , 型号 , 编码进行搜索" type="text" spellcheck = "false"></ion-searchbar>\n\n    <ion-list style="padding-top: 14px;">\n\n        <ion-item *ngFor="let device of devices" (click)="getDeviceDetail(device)" class="shebeilist">\n\n          <span>{{ device.deviceCodeName }}</span>\n\n          <button  ion-button >{{ device.installLocation }}</button>\n\n          <p> 型号：{{ device.model }} </p> \n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\device-search\device-search.html"*/
    })
], DeviceSearchPage);

//# sourceMappingURL=device-search.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DeviceRecordPage = (function (_super) {
    __extends(DeviceRecordPage, _super);
    function DeviceRecordPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deviceDetailId = " ";
        _this.startDate = new Date().toISOString();
        _this.endDate = new Date().toISOString();
        _this.records = [];
        _this.isAddRecord = true;
        _this.repairType = 0;
        _this.repairDate = new Date().toISOString();
        _this.repairLog = "";
        _this.repairName = "";
        _this.currentPage = 0;
        _this.totalRow = 0;
        _this.number = 3;
        _this.queryParam = {};
        return _this;
    }
    DeviceRecordPage.prototype.ionViewWillEnter = function () {
        this.deviceDetailId = this.navParams.get('deviceId');
    };
    DeviceRecordPage.prototype.queryRecord = function () {
        if (new Date(this.endDate).getTime() < new Date(this.startDate).getTime()) {
            this.showToast("请选择正确的时间区间", 1500);
            return;
        }
        this.isAddRecord = false;
        this.currentPage = 0;
        this.totalRow = 0;
        var param = {
            currentPage: this.currentPage,
            number: this.number,
            deviceDetailsId: this.deviceDetailId,
            startDate: this.startDate.substr(0, 10),
            endDate: this.endDate.substr(0, 10)
        };
        this.queryParam = param;
        this.query(param);
    };
    DeviceRecordPage.prototype.changeDate = function (event) {
        if (new Date(this.endDate).getTime() < new Date(this.startDate).getTime()) {
            this.showToast("请选择正确的时间区间", 1500);
            return;
        }
        this.isAddRecord = false;
        this.currentPage = 0;
        this.totalRow = 0;
        var param = {
            currentPage: this.currentPage,
            number: this.number,
            deviceDetailsId: this.deviceDetailId,
            startDate: this.startDate.substr(0, 10),
            endDate: this.endDate.substr(0, 10)
        };
        this.queryParam = param;
        this.query(param);
    };
    DeviceRecordPage.prototype.query = function (param) {
        var _this = this;
        this.httpService.get("deviceMaintainRecord/record", param).subscribe(function (data) { return _this.querySuccess(data); }, function () { return console.log("success"); });
    };
    DeviceRecordPage.prototype.querySuccess = function (data) {
        this.records = data.records;
        this.currentPage = data.currentPage + 1;
        this.totalRow = data.totalRow;
    };
    DeviceRecordPage.prototype.addRecord = function () {
        this.isAddRecord = true;
    };
    DeviceRecordPage.prototype.changeColor = function (type) {
        this.repairType = type;
    };
    DeviceRecordPage.prototype.addRecordInfo = function () {
        var _this = this;
        if (!this.repairName || this.repairName === '') {
            this.showToast("请填写维修项目名称", 1500);
            return;
        }
        if (!this.repairLog || this.repairLog === '') {
            this.showToast("请填写维修记录", 1500);
            return;
        }
        this.openWaitLoading();
        var record = {
            deviceDetailsId: this.deviceDetailId,
            maintainLog: this.repairLog,
            maintainTime: this.repairDate.substr(0, 10),
            maintainType: this.repairType,
            projectType: this.repairName
        };
        this.httpService.post("deviceMaintainRecord", record).subscribe(function (data) { return _this.addRecordSuccess(data); }, function (error) { return _this.closeWaitLoading(); }, function () { return console.log("success"); });
    };
    DeviceRecordPage.prototype.addRecordSuccess = function (data) {
        this.queryRecord();
        this.repairType = 0;
        this.repairDate = new Date().toISOString();
        this.repairLog = "";
        this.repairName = "";
        this.closeWaitLoading();
    };
    DeviceRecordPage.prototype.swipeLeftEvent = function (e) {
        if (e.direction == 2 && this.records.length != '0') {
            var pages = (this.totalRow / this.number) + (this.totalRow % this.number > 0 ? 1 : 0);
            if (this.currentPage <= pages - 1) {
                this.queryParam.currentPage = this.currentPage;
                this.query(this.queryParam);
            }
            else {
                this.showToast("没有更多记录了", 1500);
            }
        }
    };
    DeviceRecordPage.prototype.swipeRightEvent = function (e) {
        if (e.direction == 4 && this.records.length != '0') {
            if (this.currentPage < 2) {
                this.showToast("已是首页", 1500);
            }
            else {
                this.currentPage -= 2;
                this.queryParam.currentPage = this.currentPage;
                this.query(this.queryParam);
            }
        }
    };
    return DeviceRecordPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
DeviceRecordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-device-record',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\device-record\device-record.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      维修记录\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <div class="renwu">\n\n    <div [ngClass]="{\'activeborder\':isAddRecord}" (click)="addRecord()">新增</div>\n\n    <div [ngClass]="{\'activeborder\':!isAddRecord}" (click)="queryRecord()">查询</div>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content class="decicerecord">\n\n  <button ion-button (click)="addRecord()" style="width: 48%;" clear>\n\n    <ion-icon name="add"></ion-icon> 新增 </button>\n\n  <button ion-button (click)="queryRecord()" style="width: 47%;" clear>\n\n    <ion-icon name="search"></ion-icon> 查询 </button>\n\n\n\n\n\n  <div *ngIf="!isAddRecord" (swipeleft)="swipeLeftEvent($event)" (swiperight)="swipeRightEvent($event)">\n\n    <ion-item>\n\n      <ion-label>开始时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="startDate" cancelText="取消" doneText="确认" (ngModelChange)="changeDate($event)"></ion-datetime>\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>结束时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="endDate" cancelText="取消" doneText="确认" (ngModelChange)="changeDate($event)"></ion-datetime>\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-card *ngIf=" records.length == \'0\' ">\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          此时间段内没有维修记录，更改时间区间进行查看\n\n        </ion-card-title>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let record of records">\n\n      <ion-item class="ionItemBorderBottom">\n\n        <span float-left>维修项目</span>\n\n        <span float-right>{{record.projectType}}</span>\n\n      </ion-item>\n\n      <ion-item class="ionItemBorderBottom">\n\n        <span float-left>维修时间</span>\n\n        <span float-right>{{record.maintainTime}}</span>\n\n      </ion-item>\n\n      <div class="fromlistwrap">\n\n        <div class="fromlist">\n\n          <div style="border: 0;">\n\n            <span float-left>维修内容</span>\n\n          </div>\n\n        </div>\n\n        <div class="txt">\n\n          <div>\n\n            <p> {{ record.maintainLog }}</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <ion-row no-padding>\n\n        <ion-col>\n\n          <button ion-button clear small icon-left color="dark">\n\n            <ion-icon name=\'star\'></ion-icon>\n\n            实施人 : {{record.maintainUserName}}\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button clear small icon-left color="dark">\n\n            <ion-icon name=\'star\'></ion-icon>\n\n            填表/审核 : {{record.auditorName}}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-row padding *ngIf=" records.length != \'0\' ">\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          第{{currentPage}}页\n\n        </ion-note>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          左右滑动翻页\n\n        </ion-note>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          共{{totalRow}} 条\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n\n\n  <div *ngIf="isAddRecord">\n\n    <ion-item class="ionItemBorderBottom" no-lines>\n\n      <ion-label>维修类型</ion-label>\n\n      <ion-select [(ngModel)]="repairType" cancelText="取消" okText="确认">\n\n        <ion-option value="0">部分维修</ion-option>\n\n        <ion-option value="1">整体维修</ion-option>\n\n      </ion-select>\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <div class="boxgray"></div>\n\n    <ion-item class="ionItemBorderBottom">\n\n      <ion-label>维修时间</ion-label>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="repairDate" cancelText="取消" doneText="确认"></ion-datetime>\n\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n\n    </ion-item>\n\n    <ion-item class="ionItemBorderBottom" no-lines>\n\n      <ion-label>维修项目</ion-label>\n\n      <ion-input type="text" placeholder="请填写维修项目" [(ngModel)]="repairName" item-right style="text-align: right;"></ion-input>\n\n    </ion-item>\n\n    <div class="boxgray"></div>\n\n    <ion-item class="ionItemBorderBottom" no-lines>\n\n      <ion-label>维修记录备注</ion-label>\n\n    </ion-item>\n\n    <div class="fromlistwrap fromlistwrappadding fromlistwraplast" style="margin-top: 0;">\n\n      <ion-textarea rows="7" placeholder="维修记录备注" [(ngModel)]="repairLog" style="margin-top: 0;padding-top: 3px;padding-bottom: 3px"></ion-textarea>\n\n    </div>\n\n    <button ion-button (click)="addRecordInfo()" full class="commonSubmitBtn">保存</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\device-record\device-record.html"*/
    })
], DeviceRecordPage);

//# sourceMappingURL=device-record.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_detail_device_detail__ = __webpack_require__(136);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceListPage = (function (_super) {
    __extends(DeviceListPage, _super);
    function DeviceListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elsectlist = [];
        _this.deviceMenus = [];
        _this.showDeviceFlag = {};
        _this.devices = [];
        return _this;
    }
    DeviceListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.httpService.get("deviceCode").subscribe(function (data) { _this.getDeviceTreeSuccess(data); _this.elsectlist = data[0].children; }, function () { return console.log("success"); });
    };
    DeviceListPage.prototype.getDeviceTreeSuccess = function (data) {
        this.showDeviceFlag = {
            flag: this.deviceMenus.length + 1,
            id: data[0].id,
            name: data[0].name,
            children: data[0].children,
        };
        this.deviceMenus.push(this.showDeviceFlag);
    };
    DeviceListPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    DeviceListPage.prototype.addDeviceMenu = function (child) {
        this.showDeviceFlag = {
            flag: this.deviceMenus.length + 1,
            id: child.id,
            name: child.name,
            children: child.children,
        };
        this.deviceMenus.push(this.showDeviceFlag);
    };
    DeviceListPage.prototype.removeDeviceMenu = function (child) {
        var _this = this;
        var flag = child.flag;
        var removeList = [];
        this.deviceMenus.forEach(function (element) {
            if (flag <= element.flag) {
                removeList.push(element);
            }
        });
        removeList.forEach(function (element) {
            _this.deviceMenus.splice(_this.deviceMenus.indexOf(element), 1);
        });
        this.showDeviceFlag = {
            flag: this.deviceMenus.length + 1,
            id: child.id,
            name: child.name,
            children: child.children,
        };
        this.deviceMenus.push(this.showDeviceFlag);
    };
    DeviceListPage.prototype.confirmMenu = function () {
        var _this = this;
        this.httpService.get('deviceDetails?deviceCodeId=' + this.showDeviceFlag.id).subscribe(function (data) { return _this.devices = data; }, function (error) { return _this.menuCtrl.close(); }, function () { return _this.menuCtrl.close(); });
    };
    DeviceListPage.prototype.getDeviceDetail = function (device) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__device_detail_device_detail__["a" /* DeviceDetailPage */], { "deviceId": device.id });
    };
    DeviceListPage.prototype.switch = function (item) {
        console.log(item);
        console.log(1);
    };
    return DeviceListPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
DeviceListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-device-list',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\device-list\device-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      设备管理\n\n    </ion-title>\n\n    <span float-right class="iontitleright" menuToggle>筛选</span>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="device">\n\n  <ion-nav #myDeviceContent></ion-nav>\n\n  <ion-list style="padding-top: 14px;">\n\n    <ion-item *ngFor="let device of devices" (click)="getDeviceDetail(device)" class="shebeilist">\n\n      <span>{{ device.deviceCodeName }}</span>\n\n      <button  ion-button >{{ device.installLocation }}</button>\n\n      <p> 型号：{{ device.model }} </p> \n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-menu side="right" [content]="myDeviceContent">\n\n    <ion-content>\n\n\n\n      <div>\n\n        <ion-item *ngFor="let deviceMenu of deviceMenus" (click)="removeDeviceMenu( deviceMenu )">\n\n          <ion-icon name="list" float-left></ion-icon>\n\n          <span float-right> {{ deviceMenu.name}} </span>\n\n        </ion-item>\n\n     \n\n            <ion-col *ngFor="let child of showDeviceFlag.children">\n\n              <button  ion-button  small  icon-left (click)="addDeviceMenu(child)" style="margin-top: 10px;">\n\n                {{child.name}}\n\n              </button>\n\n            </ion-col>\n\n            <ion-col *ngIf=" showDeviceFlag.children && showDeviceFlag.children.length == \'0\' " style="padding-left:18px;line-height: 45px;">\n\n              没有下级菜单\n\n            </ion-col>\n\n\n\n      </div>\n\n      <ion-footer class="devicefooter">\n\n          <div>\n\n              <button ion-button (click)="confirmMenu()" class="commonSubmitBtn smallbutton" style="background: #4A90e2;">确认</button>\n\n            <button ion-button (click)="closeMenu()" class="commonSubmitBtn smallbutton" style="color:#000;background: #fff;">取消</button>\n\n          </div>\n\n        </ion-footer>\n\n    </ion-content>\n\n  </ion-menu>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\device-list\device-list.html"*/
    })
], DeviceListPage);

//# sourceMappingURL=device-list.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindInspectDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bind_inspect__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BindInspectDetailPage = (function (_super) {
    __extends(BindInspectDetailPage, _super);
    function BindInspectDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showmodel = false;
        _this.approve = {};
        _this.blueflag = false;
        _this.houseKeeperList = [];
        _this.wechaBasetUrl = 'wechatUserManage/';
        _this.appBaseUrl = 'app/bing/';
        return _this;
    }
    BindInspectDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.approve = this.navParams.get('approve');
        this.httpService.get("wechatUserManage/getKeeperByPhone?phone=" + this.approve.phone).subscribe(function (result) {
            if (result != '') {
                _this.applyKeeper = result;
            }
        });
        this.httpService.get("wechatUserManage/getKeepersByHouseId?houseId=" + this.approve.houseId).subscribe(function (data) {
            _this.houseKeeperList = data;
            if (_this.houseKeeperList.length > 0) {
                for (var key in _this.houseKeeperList) {
                    if (_this.houseKeeperList[key]['isProprietor'] == 1) {
                        _this.currentBindKeeper = _this.houseKeeperList[key];
                    }
                }
            }
        }, function () { return console.log("success"); });
    };
    BindInspectDetailPage.prototype.approveAndUpdateUser = function (keeperId) {
        var message = "确定更新<b>" + this.approve.username + "</b>(" + this.approve.phone + ")的身份信息吗?";
        this.showConfirm(message, 1, keeperId);
    };
    BindInspectDetailPage.prototype.approveUser = function () {
        var message = "确定通过<b>" + this.approve.username + "</b>(" + this.approve.phone + ")的身份校验吗?";
        this.showConfirm(message, 2);
    };
    BindInspectDetailPage.prototype.rejectUser = function () {
        var message = "确定驳回<b>" + this.approve.username + "</b>(" + this.approve.phone + ")的身份校验吗?";
        this.showConfirm(message, 3);
    };
    BindInspectDetailPage.prototype.showConfirm = function (message, flag, keeperId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '绑定提示?',
            message: message,
            buttons: [
                {
                    text: '取消',
                    handler: function () { }
                },
                {
                    text: '确认',
                    handler: function () {
                        _this.openWaitLoading();
                        switch (flag) {
                            case 1:
                                _this.confirmAgreeApproveAndUpdateUser(keeperId);
                                break;
                            case 2:
                                _this.confirmAgreeApproveUser();
                                break;
                            case 3:
                                _this.confirmAgreeRejectUser();
                                break;
                            default:
                                _this.closeWaitLoading();
                                break;
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    BindInspectDetailPage.prototype.confirmAgreeApproveAndUpdateUser = function (keeperId) {
        var _this = this;
        var date = new Date();
        var time = date.toISOString().slice(0, 10) + " " + date.toString().slice(16, 24);
        var approveTime = { approveTime: time };
        this.approve = Object.assign(this.approve, approveTime);
        if (this.approve.initType === 'APP') {
            this.httpService.put(this.appBaseUrl + "approveAndUpdate", this.approve).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
        else {
            this.httpService.put(this.wechaBasetUrl + "approveAndUpdate?oldKeeperId=" + keeperId.id, this.approve).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
    };
    BindInspectDetailPage.prototype.confirmAgreeApproveUser = function () {
        var _this = this;
        var date = new Date();
        var time = date.toISOString().slice(0, 10) + " " + date.toString().slice(16, 24);
        var approveTime = { approveTime: time };
        this.approve = Object.assign(this.approve, approveTime);
        var keeperParams = this.applyKeeper == undefined ? "" : this.applyKeeper.id;
        if (this.approve.initType === 'APP') {
            this.httpService.put(this.appBaseUrl + "approve?newKeeperId=" + keeperParams, this.approve).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
        else {
            this.httpService.put(this.wechaBasetUrl + "approve?newKeeperId=" + keeperParams, this.approve).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
    };
    BindInspectDetailPage.prototype.confirmAgreeRejectUser = function () {
        var _this = this;
        if (this.approve.initType === 'APP') {
            this.httpService.put(this.appBaseUrl + "reject", { phone: this.approve.phone }).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
        else {
            this.httpService.put(this.wechaBasetUrl + "reject", { openId: this.approve.openId }).subscribe(function (data) { return _this.success(); }, function (error) { return _this.error(); }, function () { return console.log("success"); });
        }
    };
    BindInspectDetailPage.prototype.error = function () {
        this.closeWaitLoading();
        this.showToast("操作失败！", 2000);
    };
    BindInspectDetailPage.prototype.success = function () {
        this.closeWaitLoading();
        this.showToast("操作成功", 2000);
        this.pushAndRemovePage(__WEBPACK_IMPORTED_MODULE_0__bind_inspect__["a" /* BindInspectPage */], 2, undefined);
    };
    BindInspectDetailPage.prototype.showModel = function () {
        this.showmodel = true;
        console.log(this.approve);
        console.log(this.currentBindKeeper);
    };
    BindInspectDetailPage.prototype.hideModel = function () {
        this.showmodel = false;
    };
    BindInspectDetailPage.prototype.addblud = function () {
        this.blueflag = !this.blueflag;
    };
    BindInspectDetailPage.prototype.appok = function () {
        this.showmodel = false;
        if (this.blueflag == true) {
            this.approveUser();
        }
        else {
            this.approveAndUpdateUser(this.currentBindKeeper);
        }
    };
    return BindInspectDetailPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BasePage */]));
BindInspectDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-bind-inspect-detail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\bind-inspect\bind-inspect-detail\bind-inspect-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      绑定房屋审核\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bindhouse">\n\n  <ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <img src="{{approve.headImgUrl}}" class="headImg">\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          用户:\n\n          <b>{{approve.nickName}}</b>\n\n          <br> (姓名:\n\n          <b>{{approve.username}}</b>,手机号码:\n\n          <b>{{approve.phone}}</b>) 正申请注册为房屋:\n\n          <b> {{approve.address}}</b>的\n\n          <b style="color: #488aff;">{{approve.isProprietor == "1" ? "业主" : (approve.isProprietor == "0" ? "家属" : "租户")}}</b>.\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n  <ion-item style="margin-top: 13px;">\n\n    <p> 房屋信息</p>\n\n  </ion-item>\n\n  <ion-item *ngIf=" houseKeeperList.length == 0">\n\n      <h4>该套房屋目前没有和任何业主绑定.</h4> \n\n    </ion-item>\n\n  <ion-item *ngFor="let houseKeeper of houseKeeperList" >\n\n    <h4 style="display: flex;justify-content: space-between;    margin-bottom: 10px;">\n\n      <span> {{houseKeeper.name}}\n\n        <ion-badge item-right> {{houseKeeper.isProprietor == "1" ? "业主" : (houseKeeper.isProprietor == "0" ? "家属" : "租户")}} </ion-badge>\n\n      </span>\n\n      <span style="color: #999;">{{houseKeeper.updateTime | slice:0:10}}</span>\n\n    </h4>\n\n    <p style="color: #999;"> {{houseKeeper.phone}}</p>\n\n  </ion-item>\n\n  <ion-grid >\n\n    <!-- <ion-row>\n\n        <ion-col col-12>\n\n            该套房屋目前绑定的业主或者租户有:\n\n        </ion-col> \n\n      </ion-row>\n\n    </ion-grid> \n\n    <ion-card  *ngFor="let houseKeeper of houseKeeperList" >\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{houseKeeper.name}}  {{houseKeeper.phone}}\n\n          <ion-badge item-right> {{houseKeeper.isProprietor == "1" ? "业主" : (houseKeeper.isProprietor == "0" ? "家属" : "租户")}} </ion-badge> \n\n        </ion-card-title>\n\n        <p>\n\n          入伙时间 : {{houseKeeper.updateTime}} \n\n        </p>\n\n        <button ion-button clear color="secondary" (click)="approveAndUpdateUser(houseKeeper.keeperId)" >\n\n            <ion-icon name=\'checkmark\'></ion-icon>\n\n            通过审核并更新业主信息\n\n        </button>\n\n      </ion-card-content>\n\n    </ion-card> \n\n    <ion-grid *ngIf=" houseKeeperList.length > 0">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n             如果该业主已经进行过入伙操作但没有绑定过微信,请更新该业主的信息.<br>\n\n             或者\n\n             <button ion-button clear color="secondary"  (click)="approveUser()"  >\n\n                <ion-icon name=\'checkmark\'></ion-icon>\n\n                通过审核并设置为新的业主\n\n            </button> \n\n        </ion-col> \n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid *ngIf=" houseKeeperList.length <= 0">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n            该套房屋目前没有和任何业主绑定.\n\n        </ion-col> \n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid>\n\n      <ion-row  class ="rowBorder">\n\n        <ion-col col-12>\n\n           <p>用户注册信息通过验证后,可以在IN社区微信端进行缴费,报修,积分兑换商品等操作.</p>\n\n           <p>请仔细核对用户提交的相关信息是否正确.</p> \n\n        </ion-col> \n\n      </ion-row>\n\n      <ion-row *ngIf=" houseKeeperList.length <= 0">\n\n        <ion-col col-5></ion-col>\n\n        <ion-col col-7>\n\n            <button ion-button outline color="danger" (click)="rejectUser()">\n\n                <ion-icon name=\'close\'></ion-icon>\n\n                驳回申请\n\n            </button>\n\n            <button ion-button color="secondary" (click)="approveUser()">\n\n                <ion-icon name=\'checkmark\'></ion-icon>\n\n                通过验证\n\n            </button>             \n\n        </ion-col> \n\n      </ion-row> -->\n\n    <!--   <ion-row *ngIf=" houseKeeperList.length > 0">\n\n        <ion-col col-8></ion-col>\n\n        <ion-col col-4>\n\n            <button ion-button outline color="danger" (click)="rejectUser()">\n\n                <ion-icon name=\'close\'></ion-icon>\n\n                驳回申请\n\n            </button>         \n\n        </ion-col> \n\n      </ion-row> -->\n\n      <p class="bingtitle"> 如果该业主已经进行过入伙操作但没有绑定过微信,请选择<b style="color: #4A90e2;">更新业主信息</b>没有请选择<b style="color: #4A90e2;">设置新业主</b></p>\n\n    <p class="bingtitle">用户注册信息通过验证后,可以在IN社区微信端进行缴费,报修,积分兑换商品等操作.</p>\n\n    <p class="bingtitle">请仔细核对用户提交的相关信息是否正确.</p>\n\n  </ion-grid>\n\n</ion-content> \n\n<div id="model" *ngIf="showmodel"   >\n\n  <div class="modelwrap">\n\n    <div class="modelheader">通过审核</div>\n\n    <div class="modelbody">\n\n      <p [ngClass]="{\'blue\':!blueflag}"  (click)="addblud(0)" *ngIf="applyKeeper == undefined  && currentBindKeeper && (currentBindKeeper.phone == undefined || currentBindKeeper.phone == \'\') && approve.isProprietor == 1">更新业主信息  <span class="yes" *ngIf="!blueflag" ></span>  </p>\n\n      <p [ngClass]="{\'blue\':blueflag}" (click)="addblud(1)" *ngIf="currentBindKeeper && currentBindKeeper.phone != \'\' && approve.isProprietor == 1">设置新业主 <span class="yes" *ngIf="blueflag" ></span></p>\n\n      <p [ngClass]="{\'blue\':blueflag}" (click)="addblud(1)" *ngIf="!currentBindKeeper || approve.isProprietor != \'1\'">通过验证 <span class="yes" *ngIf="blueflag" ></span></p>\n\n    </div>\n\n    <div class="modelfooter">\n\n      <p (click)="hideModel()">取消</p>\n\n      <p (click)="appok()">确认</p>\n\n    </div>\n\n  </div>\n\n</div>\n\n<ion-footer>\n\n    <div class="bindfooter">\n\n      <button ion-button (click)="rejectUser()" class="commonSubmitBtn smallbutton" style="color:#000;background: #fff;">\n\n        <img class="footerimg" src="assets/images/work/ic-audit-reject@2x.png">&nbsp;&nbsp;驳回申请</button>\n\n      <button ion-button  (click)="showModel()" class="commonSubmitBtn smallbutton" style="color:#000;background: #fff;border-right: 1px solid #ededed!important;">\n\n        <img class="footerimg" src="assets/images/work/ic-audit-pass@2x.png">&nbsp;&nbsp;通过审核\n\n      </button>\n\n    </div>\n\n  </ion-footer>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\bind-inspect\bind-inspect-detail\bind-inspect-detail.html"*/
    })
], BindInspectDetailPage);

//# sourceMappingURL=bind-inspect-detail.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceManagementPage = (function (_super) {
    __extends(DeviceManagementPage, _super);
    function DeviceManagementPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.applyInfo = {};
        _this.basicInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].PERSONALINFO));
        return _this;
    }
    DeviceManagementPage.prototype.ionViewWillEnter = function () {
        this.getLoginInfo();
        this.getgroupTree();
    };
    DeviceManagementPage.prototype.applyLeave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '离职申请',
            message: "确认提交离职申请？",
            inputs: [
                {
                    name: 'comment',
                    placeholder: '申请说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.apply(data, "2");
                    }
                }
            ]
        });
        prompt.present();
    };
    DeviceManagementPage.prototype.applyRise = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '转正申请',
            message: "确认提交转正申请？",
            inputs: [
                {
                    name: 'comment',
                    placeholder: '申请说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.apply(data, "1");
                    }
                }
            ]
        });
        prompt.present();
    };
    DeviceManagementPage.prototype.applySyq = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '试用期申请',
            message: "确认提交试用期申请？",
            inputs: [
                {
                    name: 'comment',
                    placeholder: '申请说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.apply(data, "0");
                    }
                }
            ]
        });
        prompt.present();
    };
    DeviceManagementPage.prototype.apply = function (data, type) {
        var _this = this;
        var param = { comment: { comment: data.comment } };
        this.httpService.put("userApply/" + this.applyInfo.id + "/" + type + "/" + this.groupid, param).subscribe(function (data) { _this.getLoginInfo(); _this.showToast("申请成功", 2000); }, function (Error) { console.log(""); _this.showToast("申请失败", 2000); }, function () { return console.log(""); });
    };
    DeviceManagementPage.prototype.getgroupTree = function () {
        var _this = this;
        this.applyInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* Constants */].PERSONALINFO));
        this.httpService.get('groupTree/group/userGroups?userId=' + this.applyInfo.id).subscribe(function (data) { return _this.groupid = data[0].id; });
    };
    DeviceManagementPage.prototype.getLoginInfo = function () {
        var _this = this;
        this.httpService.get('user/info?timestamp=' + this.basicInfo.phone).subscribe(function (data) { return _this.applyInfo = data; });
    };
    return DeviceManagementPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
DeviceManagementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-device-management',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\workbench\device-management\device-management.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      工作管理\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="decicerecord">\n\n  <ion-item *ngIf=" applyInfo.status == \'-1\' ">\n\n    申请状态\n\n    <ion-badge item-right> 申请中...</ion-badge>\n\n  </ion-item>\n\n  <ion-item *ngIf=" applyInfo.status == \'0\' || applyInfo.status == \'3\'" (click)="applySyq()">\n\n    试用期申请\n\n    <ion-icon name="arrow-forward" item-right></ion-icon>\n\n  </ion-item>\n\n  <ion-item *ngIf=" applyInfo.status == \'1\' " (click)="applyRise()">\n\n    转正申请\n\n    <ion-icon name="arrow-forward" item-right></ion-icon>\n\n  </ion-item>\n\n  <ion-item *ngIf=" applyInfo.status == \'1\' || applyInfo.status == \'2\'" (click)="applyLeave()" no-lines>\n\n    离职申请\n\n    <ion-icon name="arrow-forward" item-right></ion-icon>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\workbench\device-management\device-management.html"*/
    })
], DeviceManagementPage);

//# sourceMappingURL=device-management.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialDetailPage = (function (_super) {
    __extends(MaterialDetailPage, _super);
    function MaterialDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = {};
        return _this;
    }
    MaterialDetailPage.prototype.ionViewWillEnter = function () {
        var materialId = this.navParams.get('materialId');
        this.getMaterialsOutById(materialId);
    };
    MaterialDetailPage.prototype.getMaterialsOutById = function (materialId) {
        var _this = this;
        this.httpService.get("materialsOut/getMeterial/" + materialId).subscribe(function (data) { return _this.getMaterialSuccess(data); }, function () { return console.log(""); });
    };
    MaterialDetailPage.prototype.getMaterialSuccess = function (data) {
        this.material = data;
    };
    MaterialDetailPage.prototype.showApplyPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '物资归还申请',
            inputs: [
                {
                    name: 'comment',
                    placeholder: '归还说明'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        _this.promptCancel();
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        _this.material.status = '-1';
                        _this.promptApply(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    MaterialDetailPage.prototype.promptCancel = function () { };
    MaterialDetailPage.prototype.promptApply = function (data) {
        var _this = this;
        var param = { comment: { comment: data.comment } };
        this.httpService.put("materialsOut/find/" + this.material.id, param).subscribe(function (data) { return _this.applySuccess(); }, function (Error) { return _this.material.status = '0'; }, function () { return console.log(""); });
    };
    MaterialDetailPage.prototype.applySuccess = function () {
        this.getMaterialsOutById(this.material.id);
    };
    return MaterialDetailPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
MaterialDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-material-detail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\personal-material\material-detail\material-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>领用物资明细</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n      <p>物资类型</p>\n\n    <ion-note item-right> <p>{{ material.materialsTypeName }} </p></ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>物资名称</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.materialsName}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>物资型号</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.materialsModelName}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>领用数量</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.num}}{{material.materialsUnit}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>领用时间</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.stockOutTime}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>领用类型</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.type == "0" ? "个人物品" : "普通物资"}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item>\n\n<p>是否交回</p>\n\n    \n\n    <ion-note item-right>\n\n      <p>{{material.revert == "0" ? "交回" : "不交回"}}</p>\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf=" material.status == \'-1\' ">\n\n    <ion-badge item-right>归还审批中...</ion-badge>\n\n  </ion-item>\n\n  <ion-item *ngIf=" material.status == \'1\' && material.revert == \'0\' ">\n\n    <button ion-button icon-left clear item-right (click)="showApplyPrompt()">\n\n      <ion-icon name="redo"></ion-icon>\n\n      交回\n\n    </button>\n\n  </ion-item>\n\n  <ion-item *ngIf=" material.status == \'3\'">\n\n    <ion-badge item-right>已交回</ion-badge>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\personal-material\material-detail\material-detail.html"*/
    })
], MaterialDetailPage);

//# sourceMappingURL=material-detail.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaveDetailPage = (function () {
    function LeaveDetailPage(navParams) {
        this.navParams = navParams;
        this.msgDetail = navParams.get('myParam');
        console.log(this.msgDetail);
    }
    return LeaveDetailPage;
}());
LeaveDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-leave-detail',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\leave-detail\leave-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      请假详情\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="leavedetail">\n\n  <ion-list style="padding-top: 14px;">\n\n    <ion-item>\n\n      <p>请假类型</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.type_name}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>审批状态</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.status}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>请假天数</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.num}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>开始时间</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.startDate}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>结束时间</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.endDate}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item no-lines>\n\n      <p>申请时间</p>\n\n      <ion-note item-right>\n\n        <p>{{msgDetail.createTime}}</p>\n\n      </ion-note>\n\n    </ion-item>\n\n    <div class="fromlistwrap">\n\n      <div class="fromlist">\n\n        <div>\n\n          <span float-left>请假理由</span>\n\n        </div>\n\n      </div>\n\n      <div class="txt">\n\n        <div>\n\n          <p> {{ msgDetail.note }}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n  \n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\leave-detail\leave-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], LeaveDetailPage);

//# sourceMappingURL=leave-detail.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personal_material_personal_material__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_constants__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonalPage = (function () {
    function PersonalPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.basicInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* Constants */].PERSONALINFO));
        this.items = [{
                icon: "contact",
                name: "基本信息",
                entry: __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__["a" /* BasicInfoPage */]
            }, {
                icon: "pricetag",
                name: "请假申请",
                entry: __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__["a" /* LeaveApplyPage */]
            }, {
                icon: "pricetags",
                name: "请假管理",
                entry: __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__["a" /* LeaveManagePage */]
            }, {
                icon: "cube",
                name: "个人物资",
                entry: __WEBPACK_IMPORTED_MODULE_6__personal_material_personal_material__["a" /* PersonalMaterialPage */]
            }, {
                icon: "md-exit",
                name: "退出登录",
                entry: null
            }];
    }
    PersonalPage.prototype.gotoItem = function (item) {
        if (item.entry == null) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* Constants */].AUTH);
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* Constants */].PERSONALINFO);
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.push(item.entry);
        }
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\personal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      个人中心\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="userInfo" text-center>\n\n      <ion-grid>\n\n          <ion-row>\n\n              <ion-col>\n\n                  <img class="user_img"  src="{{basicInfo.headImage}}"   >\n\n              </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col text-center padding>\n\n                  {{basicInfo.userName}} \n\n              </ion-col>\n\n          </ion-row> \n\n      </ion-grid>	\n\n  </div>\n\n  <ion-card class="cardPadding"> \n\n    <ion-list>\n\n      <button ion-item *ngFor="let item of items;let i = index" (click) = "gotoItem(item)" >\n\n        <ion-icon name={{item.icon}} item-start  class="iconPadding" ></ion-icon>  {{ item.name }}\n\n      </button>\n\n    </ion-list> \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\personal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_auth_auth_module__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_task_task_module__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_personal_personal_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_workbench_workbench_module__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_notice_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage_es2015__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_base_base__["a" /* BasePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage_es2015__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                backButtonText: ''
            }),
            __WEBPACK_IMPORTED_MODULE_10__pages_auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_task_task_module__["a" /* TaskModule */],
            __WEBPACK_IMPORTED_MODULE_12__pages_personal_personal_module__["a" /* PersonalModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_workbench_workbench_module__["a" /* WorkbenchModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_base_base__["a" /* BasePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__common_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_15__common_notice_service__["a" /* NoticeService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_http_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, httpService, event) {
        var _this = this;
        this.httpService = httpService;
        this.event = event;
        this.rootPage = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* Constants */].AUTH) ? __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */] : __WEBPACK_IMPORTED_MODULE_5__pages_auth_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleLightContent(); //using light style here because we overrided toolbar style to dark colour in app.scss
            splashScreen.hide();
            _this.updateTaskNum();
        });
    }
    MyApp.prototype.updateTaskNum = function () {
        var _this = this;
        var url = 'task/todotasks';
        this.httpService.get(url)
            .flatMap(function (i) { return i; })
            .filter(function (j) { return j['type'] == 'qingJia' || j['type'] == 'repair'; })
            .toArray()
            .subscribe(function (res) {
            _this.event.publish(__WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* Constants */].TODOTASK_NUM_ACTION, res.length == 0 ? '' : res.length);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__common_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].BASE_URL;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.set('App-Version', '1.0');
    }
    HttpService.prototype.getHttpHeaders = function () {
        var item = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].AUTH);
        this.headers.set('Authorization', 'Bearer ' + item);
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.options.search = null;
    };
    /**
     * para 为可选参数，传入 obj 可转为http get时所需拼接参数
     * eg : url = https://abc.xyz , para = { id : 1 }
     * requestPath = https://abc.xyz?id=1
     */
    HttpService.prototype.get = function (url, para) {
        this.getHttpHeaders();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        for (var key in para) {
            if (para.hasOwnProperty(key)) {
                var value = para[key];
                params.set(key, value);
            }
        }
        this.options.search = params;
        return this.http.get(this.BASE_URL + url, this.options)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.post = function (url, body) {
        this.getHttpHeaders();
        return this.http.post(this.BASE_URL + url, body, this.options)
            .map(function (res) {
            if (res.text() != '') {
                return res.json();
            }
        });
    };
    HttpService.prototype.put = function (url, body) {
        this.getHttpHeaders();
        return this.http.put(this.BASE_URL + url, body, this.options)
            .map(function (res) {
            if (res.text() != '') {
                return res.json();
            }
        });
    };
    HttpService.prototype.delete = function (url) {
        this.getHttpHeaders();
        return this.http.delete(this.BASE_URL + url, this.options)
            .map(function (res) {
            if (res.text() != '') {
                return res.json();
            }
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpService);

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeService = (function () {
    function NoticeService(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    NoticeService.prototype.showLoading = function (contentStr, durationTime) {
        this.loader = this.loadingCtrl.create({
            content: contentStr,
            duration: durationTime
        });
        this.loader.present();
    };
    NoticeService.prototype.hideLoading = function () {
        if (this.loader) {
            this.loader.dismiss();
        }
    };
    NoticeService.prototype.showAlert = function (titleStr, subtitleStr) {
        var alert = this.alertCtrl.create({
            title: titleStr,
            subTitle: subtitleStr,
            buttons: ['确定']
        });
        alert.present();
    };
    NoticeService.prototype.showToast = function (msg, durationTime) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: durationTime || 3000
        });
        toast.present();
    };
    NoticeService.prototype.getAlertCtrl = function () {
        return this.alertCtrl;
    };
    NoticeService.prototype.getLoadingCtrl = function () {
        return this.loadingCtrl;
    };
    NoticeService.prototype.getToastCtrl = function () {
        return this.toastCtrl;
    };
    return NoticeService;
}());
NoticeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
], NoticeService);

//# sourceMappingURL=notice.service.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TaskModule = (function () {
    function TaskModule() {
    }
    return TaskModule;
}());
TaskModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__["a" /* TaskdetailPage */],
            __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__["a" /* TodotaskPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__["a" /* TaskdetailPage */],
            __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__["a" /* TodotaskPage */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            __WEBPACK_IMPORTED_MODULE_0__taskdetail_taskdetail__["a" /* TaskdetailPage */],
            __WEBPACK_IMPORTED_MODULE_1__todotask_todotask__["a" /* TodotaskPage */]
        ]
    })
], TaskModule);

//# sourceMappingURL=task.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leave_detail_leave_detail__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_material_personal_material__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_material_material_detail_material_detail__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PersonalModule = (function () {
    function PersonalModule() {
    }
    return PersonalModule;
}());
PersonalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__["a" /* BasicInfoPage */],
            __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__["a" /* LeaveApplyPage */],
            __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__["a" /* LeaveManagePage */],
            __WEBPACK_IMPORTED_MODULE_7__personal_material_personal_material__["a" /* PersonalMaterialPage */],
            __WEBPACK_IMPORTED_MODULE_8__personal_material_material_detail_material_detail__["a" /* MaterialDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__leave_detail_leave_detail__["a" /* LeaveDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__["a" /* BasicInfoPage */],
            __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__["a" /* LeaveApplyPage */],
            __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__["a" /* LeaveManagePage */],
            __WEBPACK_IMPORTED_MODULE_7__personal_material_personal_material__["a" /* PersonalMaterialPage */],
            __WEBPACK_IMPORTED_MODULE_8__personal_material_material_detail_material_detail__["a" /* MaterialDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__leave_detail_leave_detail__["a" /* LeaveDetailPage */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__basic_info_basic_info__["a" /* BasicInfoPage */],
            __WEBPACK_IMPORTED_MODULE_4__leave_apply_leave_apply__["a" /* LeaveApplyPage */],
            __WEBPACK_IMPORTED_MODULE_5__leave_manage_leave_manage__["a" /* LeaveManagePage */],
            __WEBPACK_IMPORTED_MODULE_7__personal_material_personal_material__["a" /* PersonalMaterialPage */],
            __WEBPACK_IMPORTED_MODULE_8__personal_material_material_detail_material_detail__["a" /* MaterialDetailPage */],
            __WEBPACK_IMPORTED_MODULE_6__leave_detail_leave_detail__["a" /* LeaveDetailPage */]
        ]
    })
], PersonalModule);

//# sourceMappingURL=personal.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matter_matter_tag_pipe__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matter_matter_detail_matter_detail__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view_empty_view__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matter_matter__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workbench__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_search_device_search__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_detail_device_detail__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_record_device_record__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__device_list_device_list__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__device_management_device_management__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bind_inspect_bind_inspect__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bind_inspect_bind_inspect_detail_bind_inspect_detail__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var WorkbenchModule = (function () {
    function WorkbenchModule() {
    }
    return WorkbenchModule;
}());
WorkbenchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__matter_matter_tag_pipe__["a" /* MatterTagPipe */],
            __WEBPACK_IMPORTED_MODULE_6__workbench__["a" /* WorkbenchPage */],
            __WEBPACK_IMPORTED_MODULE_7__device_search_device_search__["a" /* DeviceSearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__device_detail_device_detail__["a" /* DeviceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__device_record_device_record__["a" /* DeviceRecordPage */],
            __WEBPACK_IMPORTED_MODULE_10__device_list_device_list__["a" /* DeviceListPage */],
            __WEBPACK_IMPORTED_MODULE_12__bind_inspect_bind_inspect__["a" /* BindInspectPage */],
            __WEBPACK_IMPORTED_MODULE_13__bind_inspect_bind_inspect_detail_bind_inspect_detail__["a" /* BindInspectDetailPage */],
            __WEBPACK_IMPORTED_MODULE_2__empty_view_empty_view__["a" /* EmptyViewPage */],
            __WEBPACK_IMPORTED_MODULE_1__matter_matter_detail_matter_detail__["a" /* MatterDetailPage */],
            __WEBPACK_IMPORTED_MODULE_3__matter_matter__["a" /* MatterPage */],
            __WEBPACK_IMPORTED_MODULE_11__device_management_device_management__["a" /* DeviceManagementPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__workbench__["a" /* WorkbenchPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__workbench__["a" /* WorkbenchPage */],
            __WEBPACK_IMPORTED_MODULE_7__device_search_device_search__["a" /* DeviceSearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__device_detail_device_detail__["a" /* DeviceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__device_record_device_record__["a" /* DeviceRecordPage */],
            __WEBPACK_IMPORTED_MODULE_10__device_list_device_list__["a" /* DeviceListPage */],
            __WEBPACK_IMPORTED_MODULE_12__bind_inspect_bind_inspect__["a" /* BindInspectPage */],
            __WEBPACK_IMPORTED_MODULE_13__bind_inspect_bind_inspect_detail_bind_inspect_detail__["a" /* BindInspectDetailPage */],
            __WEBPACK_IMPORTED_MODULE_2__empty_view_empty_view__["a" /* EmptyViewPage */],
            __WEBPACK_IMPORTED_MODULE_1__matter_matter_detail_matter_detail__["a" /* MatterDetailPage */],
            __WEBPACK_IMPORTED_MODULE_3__matter_matter__["a" /* MatterPage */],
            __WEBPACK_IMPORTED_MODULE_11__device_management_device_management__["a" /* DeviceManagementPage */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__workbench__["a" /* WorkbenchPage */],
            __WEBPACK_IMPORTED_MODULE_7__device_search_device_search__["a" /* DeviceSearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__device_detail_device_detail__["a" /* DeviceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__device_record_device_record__["a" /* DeviceRecordPage */],
            __WEBPACK_IMPORTED_MODULE_10__device_list_device_list__["a" /* DeviceListPage */],
            __WEBPACK_IMPORTED_MODULE_12__bind_inspect_bind_inspect__["a" /* BindInspectPage */],
            __WEBPACK_IMPORTED_MODULE_13__bind_inspect_bind_inspect_detail_bind_inspect_detail__["a" /* BindInspectDetailPage */],
            __WEBPACK_IMPORTED_MODULE_2__empty_view_empty_view__["a" /* EmptyViewPage */],
            __WEBPACK_IMPORTED_MODULE_1__matter_matter_detail_matter_detail__["a" /* MatterDetailPage */],
            __WEBPACK_IMPORTED_MODULE_3__matter_matter__["a" /* MatterPage */],
            __WEBPACK_IMPORTED_MODULE_11__device_management_device_management__["a" /* DeviceManagementPage */]
        ],
        providers: []
    })
], WorkbenchModule);

//# sourceMappingURL=workbench.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatterTagPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MatterTagPipe = (function () {
    function MatterTagPipe() {
    }
    MatterTagPipe.prototype.transform = function (status) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args[0] == 'color') {
            return status == 0 ? 'danger' : 'primary';
            ;
        }
        return status == 0 ? '未处理' : '已处理';
    };
    return MatterTagPipe;
}());
MatterTagPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'matterTag' })
], MatterTagPipe);

//# sourceMappingURL=matter-tag.pipe.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyViewPage = (function () {
    function EmptyViewPage() {
    }
    return EmptyViewPage;
}());
EmptyViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'empty-view',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\empty-view\empty-view.html"*/'<div text-center>\n\n  <h1>Here is empty view .</h1>\n\n  <h2>To be edited</h2>\n\n</div>'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\empty-view\empty-view.html"*/,
    }),
    __metadata("design:paramtypes", [])
], EmptyViewPage);

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loginId = '';
        _this.pwd = '';
        _this.pwflag = true;
        _this.type = "password";
        _this.showline1 = false;
        _this.showline2 = false;
        return _this;
    }
    LoginPage.prototype.ionViewWillEnter = function () { };
    LoginPage.prototype.loginPhone = function () {
        var _this = this;
        if (!this.loginId || this.loginId === '') {
            this.showToast("账号不能为空", 1000);
            return;
        }
        if (!this.pwd || this.pwd === '') {
            this.showToast("密码不能为空", 1000);
            return;
        }
        var user = { "loginId": this.loginId, "password": __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(this.pwd).toString() };
        this.httpService.post("user/login", user).subscribe(function (data) { return _this.loginSuccess(data); }, function (error) { return _this.showToast("账号或密码无效", 2000); });
    };
    LoginPage.prototype.loginSuccess = function (data) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* Constants */].AUTH, data.token);
        this.getBasicInfo();
        // this.pushAndRemovePage(TabsPage);
    };
    LoginPage.prototype.getBasicInfo = function () {
        var _this = this;
        var date = new Date().getTime();
        this.httpService.get("user/info?timestamp=" + date).subscribe(function (data) { _this.setPersonalItem(data); _this.pushAndRemovePage(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]); }, function (error) { _this.showToast("获取基本信息失败", 2000); });
    };
    LoginPage.prototype.setPersonalItem = function (data) {
        if (!data.headImage || data.headImage === null || data.headImage === '') {
            data.headImage = 'assets/images/default_avatar.jpg';
        }
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* Constants */].PERSONALINFO, JSON.stringify(data));
    };
    LoginPage.prototype.forgetPassword = function () {
    };
    LoginPage.prototype.showpassword = function (flag, ps) {
        this.pwflag = flag;
        this.type = ps;
    };
    LoginPage.prototype.showline = function (key) {
        if (key == 1) {
            this.showline1 = true;
            this.showline2 = false;
        }
        else {
            this.showline1 = false;
            this.showline2 = true;
        }
        var logininput = document.getElementsByClassName('scroll-content')[0];
        logininput.style.paddingbottom = 0;
    };
    LoginPage.prototype.hideline = function () {
        this.showline1 = false;
        this.showline2 = false;
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\auth\login\login.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="fffbackground">\n\n      <div class="logo" text-left>\n\n           登录\n\n        </div>\n\n        <div class="logo_user">\n\n          <div class="logo_input" [ngClass]="{\'line\':showline1}" >\n\n            <div>\n\n              <!-- <ion-icon name="ios-phone-portrait" item-left class="ion-icon-normal-color"></ion-icon> -->\n\n              <img src="assets/images/r-phone@2x.png" alt="">\n\n            </div>\n\n            <span class="shu"></span>\n\n            <ion-input placeholder="请输入用户名" [(ngModel)]="loginId" (focus)="showline(1)" (blur)="hideline()"> </ion-input>\n\n          </div>\n\n          <div class="logo_input" [ngClass]="{\'line\':showline2}">\n\n            <div>\n\n              <!-- <ion-icon name="ios-lock-outline" item-left class="ion-icon-normal-color"></ion-icon> -->\n\n              <img src="assets/images/r-pw@2x.png" alt="">\n\n            </div>\n\n            <span class="shu"></span>\n\n            <ion-input type="{{type}}" [(ngModel)]="pwd" placeholder="请输入密码" (focus)="showline(2)" (blur)="hideline()"></ion-input>\n\n            <div *ngIf="pwflag" (click)="showpassword(false,\'text\')">\n\n              <ion-icon name="ios-eye-off-outline" item-left class="ion-icon-normal-color"></ion-icon>\n\n            </div>\n\n            <div *ngIf="!pwflag" (click)="showpassword(true,\'password\')">\n\n              <ion-icon name="ios-eye-outline" item-left class="ion-icon-normal-color"></ion-icon>\n\n            </div>\n\n          </div>\n\n          <button ion-button (click)="loginPhone()" full class="commonSubmitBtn">登录</button>\n\n          <span class="misspass" (click)="forgetPassword()">忘记密码？</span>\n\n      \n\n        </div>\n\n  </div>\n\n  \n\n  <!--<div class="logo_anth">\n\n    <ion-row>\n\n      <ion-col col-9></ion-col>\n\n      <ion-col col-3><button ion-button clear class="ion-normal-color" (click)="forgetPassword()" style="padding-left:5px;">忘记密码?</button></ion-col>\n\n    </ion-row>\n\n  </div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\auth\login\login.html"*/
    })
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_detail_leave_detail__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leave_apply_leave_apply__ = __webpack_require__(140);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeaveManagePage = (function (_super) {
    __extends(LeaveManagePage, _super);
    function LeaveManagePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leaveList = [];
        return _this;
    }
    LeaveManagePage.prototype.ionViewWillEnter = function () {
        this.getLeaveList();
    };
    LeaveManagePage.prototype.getLeaveList = function () {
        var _this = this;
        this.httpService.get('qingJia').subscribe(function (data) { return _this.success(data); }, function () { return console.log("success"); });
    };
    LeaveManagePage.prototype.success = function (data) {
        this.leaveList = data;
    };
    LeaveManagePage.prototype.getDetail = function (leave) {
        /* let alert = this.alertCtrl.create({
          title: leave.type_name,
          subTitle:  "审批状态："+ leave.status,
          message:    "请假天数："+ leave.num   +
                      "<br>结束时间："+ leave.endDate +
                      "<br>开始时间："+leave.startDate +
                      "<br>申请时间："+ leave.createTime +
                      "<br>请假理由:<br>"+ leave.note ,
          buttons: ['确认']
         });
        alert.present(); */
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__leave_detail_leave_detail__["a" /* LeaveDetailPage */], { 'myParam': leave });
    };
    LeaveManagePage.prototype.Qingjia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__leave_apply_leave_apply__["a" /* LeaveApplyPage */]);
    };
    return LeaveManagePage;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BasePage */]));
LeaveManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-leave-manage',template:/*ion-inline-start:"D:\A-magcis\wuyeapp\src\pages\personal\leave-manage\leave-manage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      请假管理\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-list style="padding-top: 14px;">  \n\n        <ion-item *ngFor="let leave of leaveList" (click)="getDetail(leave)" class="shebeilist">\n\n              <span>{{ leave.type_name }}</span>\n\n              <button  ion-button >{{ leave.status }}</button>\n\n              <p> {{ leave.startDate }} ~ {{ leave.endDate }} </p> \n\n            </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <div>\n\n      <button ion-button (click)="Qingjia()" class="commonSubmitBtn smallbutton" style="background: #4A90e2;width: 100%;">请假申请</button>\n\n    </div>\n\n  </ion-footer>\n\n'/*ion-inline-end:"D:\A-magcis\wuyeapp\src\pages\personal\leave-manage\leave-manage.html"*/
    })
], LeaveManagePage);

//# sourceMappingURL=leave-manage.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map