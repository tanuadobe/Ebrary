(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url('https://fonts.googleapis.com/css?family=Raleway:300,700');\n@import 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';\n/* You can add global styles to this file, and also import other style files */\nbody {\n    background:#2E9CE6;\n    margin: 0;\n    font-family: 'Raleway', 'Arial';\n    color:#fff;\n}\nhr {\n    border: 0;\n    clear:both;\n    display:block;\n    width: 96%;               \n    background-color:#2E9CE6;\n    height: 3px;\n  }\n.container, .container-nav {\n    margin: 0 5% 0 5%;\n}\nul {\n    list-style-type:none;\n    margin:0 0 2em 0;\n    padding:0;\n}\n.ul-nav:first-child::first-letter {\n    color: rgb(43, 247, 43);\n    border: 1px gray;\n}\nul li {\n    display:inline;\n    margin-right: 30px;\n    font-size: 1.5em;\n}\nul li a {\n    font-size: 0.7em;\n}\na {\n    color:#fff;\n    text-decoration:none;\n}\n.navbar {\n    background: #57B3F1;\n    padding-top: 10px;\n    width: 100%;\n    height: 105px;\n    margin-bottom: 20px;\n}\n.nav-logo {\n    display: inline;\n    padding: 18px 20px 6.5px 20px;\n    margin: 0;\n}\n.nav-section {\n    display: inline;\n    padding: 18px 20px 6.5px 20px;\n    margin: 0;\n}\n.nav-section:hover {\n    transition: all .2s ease-in;\n    background-color: lightblue;\n}\n.container {\n    display: grid;\n    grid-template-columns: 50% auto;\n    margin-top: 60px;\n    border-radius: 0 0 5px 5px;\n    margin-bottom: 20px;\n}\n.container-nav {\n    display: grid;\n    grid-template-columns: 50% auto;\n    border-radius: 5px 5px 0 0;\n}\n.sticky {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    border-bottom: solid 8px #2E9CE6;\n}\n* {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  font-family: 'Poppins', sans-serif;\n}\n.feather {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n}\n.media-body h1 {\n  font-weight: 300;\n  margin-bottom: 20px;\n}\n.media-body h1 strong {\n  font-weight: 600;\n}\n.media-body p {\n  margin-bottom: 10px;\n  font-weight: 300;\n}\n.media-body p strong {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.px-logo {\n  display: block;\n  clear: both;\n  margin: 0 auto 20px;\n  width: 220px;\n}\n.px-logo a img {\n  width: 100%;\n}\n.displayTable {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #3F51B5;\n}\n.displayTableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\nh3 {\n  text-align: center;\n  font-size: 22px;\n  margin: 0 0 20px;\n}\n.authBlock {\n  margin: 0 auto;\n  max-width: 400px;\n  background: white;\n  padding: 30px 40px 10px;\n  overflow: hidden;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .04);\n}\nlabel {\n  display: block;\n  font-size: 13px;\n  padding-bottom: 5px;\n  font-weight: 600;\n}\n.formGroup {\n  margin-bottom: 20px;\n  float: left;\n  width: 100%;\n}\n.formControl {\n  width: 100%;\n  display: block;\n  padding: 15px 15px 14px;\n  border: 2px solid #e7e7e7;\n  outline: none;\n  font-size: 15px;\n  color: #444444;\n  background: #fcfcfc;\n}\n.formControl:focus {\n  border: 2px solid #d3d3d6\n}\ninput::-webkit-input-placeholder {\n  color: #BBBBBB;\n}\ninput::-moz-placeholder {\n  color: #BBBBBB;\n}\ninput:-ms-input-placeholder {\n  color: #BBBBBB;\n}\ninput:-moz-placeholder {\n  color: #BBBBBB\n}\n.displayTable .btn {\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 0;\n  background: #15CD72;\n  color: #ffffff;\n  cursor: pointer;\n  outline: none;\n}\n.displayTable .btn:hover {\n  opacity: .88;\n}\n.displayTable .btnSecondary {\n  background: #EEEEEE;\n  color: #404040;\n}\n.displayTable .googleBtn {\n  background: #eb5e4c;\n}\n.displayTable .facebookBtn {\n  background: #5d82d1;\n}\n.or {\n  text-align: center;\n  display: block;\n  color: #a0a0a0;\n  background: white;\n  position: relative;\n  margin: 5px 0 0px;\n}\n.orInner {\n  background: white;\n  display: inline-block;\n  z-index: 4;\n  position: relative;\n  padding: 0 12px;\n}\n.or:before {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 11px;\n  width: 100%;\n  height: 1px;\n  background: #e2e2e2;\n}\n.halfWidth {\n  width: 48.5%;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.forgotPassword {\n  text-align: center;\n  margin: -12px 0 15px 0;\n  float: left;\n  width: 100%;\n}\n.forgotPassword span {\n  color: #3C89EF;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px;\n}\n.redirectToLogin {\n  padding: 15px 0 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  color: rgba(255, 255, 255, .6);\n}\n.redirectToLogin .redirect {\n  cursor: pointer;\n  color: #ffffff;\n  text-decoration: underline;\n}\n/* * Sidebar */\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  /* Behind the navbar */\n  padding: 48px 0 0;\n  /* Height of navbar */\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: .5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar .nav-link .feather {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar-heading {\n  font-size: .75rem;\n  text-transform: uppercase;\n}\n.nav-link {\n  padding: 1.5rem 1rem;\n  border-bottom: 1px solid #dde0e2;\n  cursor: pointer;\n}\n.sidebar .nav-link.active,\n.sidebar a:hover,\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  color: #E91E63;\n  background: #efefef;\n}\n/* * Content */\n[role=\"main\"] {\n  padding-top: 48px;\n}\n.dasboard-text {\n  border-left: 1px solid rgb(255, 255, 255, .3);\n  color: rgb(255, 255, 255, .5);\n  display: inline-block;\n  padding: 0 0 0 14px;\n  font-size: 15px;\n  margin-left: 15px;\n  position: relative;\n  top: 30px;\n}\n/* * Navbar */\n.navbar-brand {\n  padding-top: 2.75rem;\n  padding-bottom: 2.75rem;\n}\n.navbar .form-control {\n  padding: .75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .1);\n}\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}\n.form-control:focus {\n  border-color: #00BCD4;\n  box-shadow: none;\n}\n.form-control {\n  font-size: 14px;\n}\n.bg-dark {\n  background-color: #3F51B5 !important;\n}\n.gap-right {\n  margin-right: 10px;\n}\ni {\n  width: 22px;\n  text-align: center;\n  margin-right: 5px;\n}\n.inner-adjust {\n  padding: 0 20px;\n}\n.action-block {\n  cursor: pointer;\n}\n.action-block .fa-edit:hover {\n  color: #009688;\n}\n.action-block .fa-trash-alt:hover {\n  color: #E91E63;\n}\n.btn-primary.focus,\n.btn-primary:focus {\n  box-shadow: none;\n}\n/* Pagination */\nbody pagination-template {\n  padding: 0;\n  margin: 8px 0 0;\n  float: left;\n  width: 100%;\n  text-align: right;\n}\nbody .ngx-pagination li:last-child {\n  margin: 0;\n}\nbody .ngx-pagination .current {\n  background: #055AF9;\n}\n.ngx-pagination a:hover,\n.ngx-pagination button:hover {\n  text-decoration: none;\n}\n/* Error */\n.error {\n  color: red;\n  margin-top: 5px;\n}\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n.btn-success.disabled,\n.btn-success:disabled {\n  cursor: not-allowed;\n}\n/* Nav */\nbody .navbar {\n  padding: 6px 0 !important;\n}\nbody .navbar-brand {\n  background: none;\n}\n.brand-logo {\n  max-width: 85%;\n}\n.pt-3,\n.py-3 {\n  padding-top: 2.4rem !important;\n}\n.sidebar-sticky {\n  padding-top: 1.2rem !important;\n}\n/* Form */\nlabel {\n  font-weight: 500;\n}\n.form-control {\n  padding: 1.375rem .75rem;\n}\n/* Misc */\n.no-data img {\n  max-width: 420px;\n  margin: 20px auto 0;\n}\n.nodata-msg {\n  margin: 25px 0 15px;\n  font-size: 28px;\n  color: #a9a6c5;\n  font-weight: 300;\n  letter-spacing: .2px;\n}\n[role=\"main\"] {\n  padding-top: 65px;\n}\n.preloader {\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -15px;\n}\n.custom-text {\n  font-size: 15px;\n  color: #5f5f5f;\n  letter-spacing: .2px;\n}\n.navbar-dark .navbar-brand {\n  margin-left: 6px;\n}\n.custom-text strong {\n  color: #3a3a3a;\n}\n.mb-3,\n.my-3 {\n  margin-bottom: 1.4rem !important;\n}\n.custom-fa-plus {\n  margin: 0;\n  width: auto;\n}\n.user-image {\n  width: 42px;\n  height: 42px;\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n}\nbody .table thead th {\n  background: #f3f5ff;\n}\n.pricing-header {\n  padding-bottom: 50px;\n}\n.userImage {\n  max-width: 125px;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 1)\n}\n.card {\n  border: none\n}\n.list-group-item {\n  padding: 0 1.25rem 15px;\n  border: none\n}\n.fa-sign-out-alt {\n  position: relative;\n  top: 1px;\n}\n.logOutBtn {\n  cursor: pointer;\n}\n.no-access {\n  text-align: center;\n  font-size: 26px;\n  padding: 70px 0;\n}\n.rounded-circle {\n  max-width: 150px;\n}\n/* Responsive */\n@media(max-width:767px) {\n  .sidebar {\n    position: static;\n    padding: 40px 0 10px;\n    height: auto;\n  }\n\n  [role=\"main\"] {\n    padding-top: 0;\n  }\n\n  .inner-adjust {\n    padding: 0;\n  }\n\n  ul.nav.flex-column {\n    flex-direction: inherit !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1.5rem !important;\n  }\n\n  .brand-logo {\n    max-width: 175px;\n    margin: 0 auto;\n    display: block;\n  }\n\n  .dasboard-text {\n    display: none !important;\n  }\n\n  .sidebar-sticky {\n    padding-top: 1.9rem !important;\n    height: auto;\n  }\n\n  .sidebar-sticky .nav li {\n    width: 50%;\n    text-align: center;\n    border-right: 1px solid #c7ceff;\n  }\n\n  .sidebar-sticky .nav li:last-child {\n    border: none;\n  }\n\n  .no-data img {\n    max-width: 100%;\n    margin-top: 0;\n  }\n\n  .nodata-msg,\n  .h2,\n  h2 {\n    font-size: 1.4rem;\n  }\n\n  .custom-text {\n    font-size: 14px;\n  }\n\n  .navbar-nav {\n    float: right;\n    width: 50%;\n    text-align: right;\n    display: inherit;\n    margin: 0;\n  }\n\n  .navbar-dark .navbar-brand {\n    margin: 0;\n    width: 50%;\n    float: left;\n    display: inherit;\n  }\n\n  .sidebar {\n    padding: 40px 0 0;\n  }\n\n  footer br {\n    display: none;\n  }\n\n  .media {\n    display: block;\n  }\n\n  .rounded-circle {\n    max-width: 150px;\n    margin: 0 auto 20px !important;\n    display: block;\n  }\n\n  b,\n  strong {\n    display: block;\n  }\n\n  .displayTable {\n    background: white\n  }\n\n  .authBlock {\n    box-shadow: none\n  }\n\n  .px-logo {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwLDcwMCcpO1xuQGltcG9ydCAnaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjUuMC9jc3MvYWxsLmNzcyc7XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IzJFOUNFNjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgJ0FyaWFsJztcbiAgICBjb2xvcjojZmZmO1xufVxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGVhcjpib3RoO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6IDk2JTsgICAgICAgICAgICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyRTlDRTY7XG4gICAgaGVpZ2h0OiAzcHg7XG4gIH1cbi5jb250YWluZXIsIC5jb250YWluZXItbmF2IHtcbiAgICBtYXJnaW46IDAgNSUgMCA1JTtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICBtYXJnaW46MCAwIDJlbSAwO1xuICAgIHBhZGRpbmc6MDtcbn1cbi51bC1uYXY6Zmlyc3QtY2hpbGQ6OmZpcnN0LWxldHRlciB7XG4gICAgY29sb3I6IHJnYig0MywgMjQ3LCA0Myk7XG4gICAgYm9yZGVyOiAxcHggZ3JheTtcbn1cbnVsIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cbnVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG59XG5hIHtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogIzU3QjNGMTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmF2LWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHggNi41cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubmF2LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHggNi41cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubmF2LXNlY3Rpb246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRhaW5lci1uYXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgOHB4ICMyRTlDRTY7XG59XG5cblxuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uZmVhdGhlciB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1lZGlhLWJvZHkgaDEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWVkaWEtYm9keSBoMSBzdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWVkaWEtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm1lZGlhLWJvZHkgcCBzdHJvbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHgtbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgd2lkdGg6IDIyMHB4O1xufVxuXG4ucHgtbG9nbyBhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheVRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzRjUxQjU7XG59XG5cbi5kaXNwbGF5VGFibGVDZWxsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLmF1dGhCbG9jayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMzBweCA0MHB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgLjA0KTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybUdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybUNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xufVxuXG4uZm9ybUNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDNkM2Q2XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkI7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkI7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQkJCQkJCO1xufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNCQkJCQkJcbn1cblxuLmRpc3BsYXlUYWJsZSAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQ6ICMxNUNENzI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kaXNwbGF5VGFibGUgLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IC44ODtcbn1cblxuLmRpc3BsYXlUYWJsZSAuYnRuU2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI0VFRUVFRTtcbiAgY29sb3I6ICM0MDQwNDA7XG59XG5cbi5kaXNwbGF5VGFibGUgLmdvb2dsZUJ0biB7XG4gIGJhY2tncm91bmQ6ICNlYjVlNGM7XG59XG5cbi5kaXNwbGF5VGFibGUgLmZhY2Vib29rQnRuIHtcbiAgYmFja2dyb3VuZDogIzVkODJkMTtcbn1cblxuLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4IDAgMHB4O1xufVxuXG4ub3JJbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuXG4ub3I6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgbGVmdDogMDtcbiAgdG9wOiAxMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG59XG5cbi5oYWxmV2lkdGgge1xuICB3aWR0aDogNDguNSU7XG59XG5cbi5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZvcmdvdFBhc3N3b3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IC0xMnB4IDAgMTVweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCBzcGFuIHtcbiAgY29sb3I6ICMzQzg5RUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucmVkaXJlY3RUb0xvZ2luIHtcbiAgcGFkZGluZzogMTVweCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xufVxuXG4ucmVkaXJlY3RUb0xvZ2luIC5yZWRpcmVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiAqIFNpZGViYXIgKi9cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xuICBwYWRkaW5nOiA0OHB4IDAgMDtcbiAgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQHN1cHBvcnRzICgocG9zaXRpb246LXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjpzdGlja3kpKSB7XG4gIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gIH1cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubmF2LWxpbmsge1xuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGUwZTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSxcbi5zaWRlYmFyIGE6aG92ZXIsXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyxcbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyIHtcbiAgY29sb3I6ICNFOTFFNjM7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi8qICogQ29udGVudCAqL1xuW3JvbGU9XCJtYWluXCJdIHtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG59XG5cbi5kYXNib2FyZC10ZXh0IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMCAxNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzBweDtcbn1cblxuLyogKiBOYXZiYXIgKi9cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogMi43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIuNzVyZW07XG59XG5cbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzAwQkNENDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1ICFpbXBvcnRhbnQ7XG59XG5cbi5nYXAtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmkge1xuICB3aWR0aDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmlubmVyLWFkanVzdCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmFjdGlvbi1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1ibG9jayAuZmEtZWRpdDpob3ZlciB7XG4gIGNvbG9yOiAjMDA5Njg4O1xufVxuXG4uYWN0aW9uLWJsb2NrIC5mYS10cmFzaC1hbHQ6aG92ZXIge1xuICBjb2xvcjogI0U5MUU2Mztcbn1cblxuLmJ0bi1wcmltYXJ5LmZvY3VzLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogUGFnaW5hdGlvbiAqL1xuYm9keSBwYWdpbmF0aW9uLXRlbXBsYXRlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5ib2R5IC5uZ3gtcGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6ICMwNTVBRjk7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiBhOmhvdmVyLFxuLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXJyb3IgKi9cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQsXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBOYXYgKi9cbmJvZHkgLm5hdmJhciB7XG4gIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkgLm5hdmJhci1icmFuZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5icmFuZC1sb2dvIHtcbiAgbWF4LXdpZHRoOiA4NSU7XG59XG5cbi5wdC0zLFxuLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMi40cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHBhZGRpbmctdG9wOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSAqL1xubGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMS4zNzVyZW0gLjc1cmVtO1xufVxuXG4vKiBNaXNjICovXG4ubm8tZGF0YSBpbWcge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuXG4ubm9kYXRhLW1zZyB7XG4gIG1hcmdpbjogMjVweCAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNhOWE2YzU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xufVxuXG5bcm9sZT1cIm1haW5cIl0ge1xuICBwYWRkaW5nLXRvcDogNjVweDtcbn1cblxuLnByZWxvYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5jdXN0b20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGxldHRlci1zcGFjaW5nOiAuMnB4O1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5jdXN0b20tdGV4dCBzdHJvbmcge1xuICBjb2xvcjogIzNhM2EzYTtcbn1cblxuLm1iLTMsXG4ubXktMyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWZhLXBsdXMge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4udXNlci1pbWFnZSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuXG5ib2R5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQ6ICNmM2Y1ZmY7XG59XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udXNlckltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMjVweDtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lXG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwYWRkaW5nOiAwIDEuMjVyZW0gMTVweDtcbiAgYm9yZGVyOiBub25lXG59XG5cbi5mYS1zaWduLW91dC1hbHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4ubG9nT3V0QnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tYWNjZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nOiA0MHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBbcm9sZT1cIm1haW5cIl0ge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgLmlubmVyLWFkanVzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIHVsLm5hdi5mbGV4LWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC0zLFxuICAucHktMyB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJyYW5kLWxvZ28ge1xuICAgIG1heC13aWR0aDogMTc1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGFzYm9hcmQtdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwYWRkaW5nLXRvcDogMS45cmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnNpZGViYXItc3RpY2t5IC5uYXYgbGkge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjN2NlZmY7XG4gIH1cblxuICAuc2lkZWJhci1zdGlja3kgLm5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAubm8tZGF0YSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgLm5vZGF0YS1tc2csXG4gIC5oMixcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgLmN1c3RvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMDtcbiAgfVxuXG4gIGZvb3RlciBiciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZWRpYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAucm91bmRlZC1jaXJjbGUge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgYixcbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kaXNwbGF5VGFibGUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlXG4gIH1cblxuICAuYXV0aEJsb2NrIHtcbiAgICBib3gtc2hhZG93OiBub25lXG4gIH1cblxuICAucHgtbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\project Adobe\60_prjt\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map