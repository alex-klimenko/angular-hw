(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
          \*****************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, ":root {\r\n  --main-width: 1232px;\r\n\r\n  --main-color-A: #374a5d;\r\n  --main-color-B: #697886;\r\n  --main-color-C: #9ba5ae;\r\n  --main-color-D: #cdd2d7;\r\n  --main-color-E: #e1e4e7;\r\n  --main-color-F: #f5f6f7;\r\n  --main-color-H: #b7cb3f;\r\n  --main-color-I: #97b000;\r\n\r\n  --main-bg-color: white;\r\n  --main-title-color: var(--main-color-A);\r\n  --main-text-color: var(--main-color-B);\r\n  --main-a-color: var(--main-color-A);\r\n  --main-a-color-hover: var(--main-color-B);\r\n  --main-a-color-visited: var(--main-color-A);\r\n  --footer-text-color: var(--main-color-F);\r\n  --footer-a-color: var(--main-color-F);\r\n  --footer-a-color-hover: var(--main-color-A);\r\n  --footer-a-color-visited: var(--main-color-F);\r\n\r\n  --button-primary-color-static: var(--main-color-H);\r\n  --button-primary-color-hover: var(--main-color-I);\r\n  --button-primary-color-click: var(--main-color-H);\r\n  --button-outline-primary-color-static: var(--main-bg-color);\r\n  --button-outline-primary-color-hover: var(--main-color-I);\r\n  --button-outline-primary-color-click: var(--main-color-H);\r\n  --button-outline-primary-decore-color-static: var(--main-color-H);\r\n  --button-outline-primary-decore-color-hover: var(--main-color-I);\r\n  --button-outline-primary-decore-color-click: var(--main-color-H);\r\n  --button-outline-secondary-color-static: var(--main-bg-color);\r\n  --button-outline-secondary-color-hover: var(--main-color-D);\r\n  --button-outline-secondary-color-click: var(--main-bg-color);\r\n  --button-outline-secondary-decore-color-static: var(--main-color-D);\r\n  --button-outline-secondary-decore-color-hover: var(--main-color-D);\r\n  --button-outline-secondary-decore-color-click: var(--main-color-D);\r\n\r\n  --caption-color-enable: var(--main-color-B);\r\n  --caption-color-disable: var(--main-color-E);\r\n\r\n  --main-decore-thickness: 2px;\r\n  --main-decore-color: var(--main-color-E);\r\n  --main-footer-bg-color: var(--main-color-C);\r\n\r\n  --main-h1-font: normal 48px \"Baloo Chettan\", sans-serif;\r\n  --main-h2-font: normal 36px \"Baloo Chettan\", sans-serif;\r\n  --main-h3-font: bold 32px \"Kodchasan\", sans-serif;\r\n  --main-h4-font: bold 24px \"Nunito\", sans-serif;\r\n  --main-h5-font: normal 24px \"Nunito\", sans-serif;\r\n  --main-h6-font: bold 18px \"Nunito\", sans-serif;\r\n\r\n  --main-text-font: normal 18px \"Nunito\", sans-serif;\r\n  --caption-font: bold 18px \"Kodchasan\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-bg-color);\r\n  color: var(--main-text-color);\r\n  font: var(--main-text-font);\r\n  margin: 0px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh5 {\r\n  color: var(--main-title-color);\r\n}\r\n\r\nh4,\r\nh6 {\r\n  color: var(--main-text-color);\r\n}\r\n\r\nh1 {\r\n  font: var(--main-h1-font);\r\n}\r\n\r\nh2 {\r\n  font: var(--main-h2-font);\r\n}\r\n\r\nh3 {\r\n  font: var(--main-h3-font);\r\n}\r\n\r\nh4 {\r\n  font: var(--main-h4-font);\r\n}\r\n\r\nh5 {\r\n  font: var(--main-h5-font);\r\n}\r\n\r\nh6 {\r\n  font: var(--main-h6-font);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--main-a-color);\r\n}\r\n\r\na:link {\r\n  color: var(--main-a-color-visited);\r\n}\r\n\r\na:hover {\r\n  color: var(--main-a-color-hover);\r\n}\r\n\r\nbutton {\r\n  min-height: 52px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 26px;\r\n  font: var(--caption-font);\r\n  margin: 0;\r\n  padding: 0 26px;\r\n}\r\n\r\nbutton.primary {\r\n  background-color: var(--button-primary-color-static);\r\n  color: var(--main-bg-color);\r\n}\r\n\r\nbutton.primary:hover {\r\n  background-color: var(--button-primary-color-hover);\r\n}\r\n\r\nbutton.primary:active {\r\n  background-color: var(--button-primary-color-click);\r\n}\r\n\r\nbutton.outline-primary {\r\n  background-color: var(--button-outline-primary-color-static);\r\n  color: var(--caption-font);\r\n  border: var(--button-outline-primary-decore-color-static) solid\r\n    var(--main-decore-thickness);\r\n}\r\n\r\nbutton.outline-primary:hover {\r\n  background-color: var(--button-outline-primary-color-hover);\r\n  color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\nbutton.outline-primary:active {\r\n  background-color: var(--button-outline-primary-color-click);\r\n  color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\nbutton.outline-secondary {\r\n  background-color: var(--button-outline-secondary-color-static);\r\n  color: var(--caption-font);\r\n  border: var(--button-outline-secondary-decore-color-static) solid\r\n    var(--main-decore-thickness);\r\n}\r\n\r\nbutton.outline-secondary:hover {\r\n  background-color: var(--button-outline-secondary-color-hover);\r\n  color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\nbutton.outline-secondary:active {\r\n  background-color: var(--button-outline-secondary-color-click);\r\n  color: var(--caption-font);\r\n  border: var(--button-outline-secondary-decore-color-click) solid\r\n    var(--main-decore-thickness);\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9COztFQUVwQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCOztFQUV2QixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMseUNBQXlDO0VBQ3pDLDJDQUEyQztFQUMzQyx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLDJDQUEyQztFQUMzQyw2Q0FBNkM7O0VBRTdDLGtEQUFrRDtFQUNsRCxpREFBaUQ7RUFDakQsaURBQWlEO0VBQ2pELDJEQUEyRDtFQUMzRCx5REFBeUQ7RUFDekQseURBQXlEO0VBQ3pELGlFQUFpRTtFQUNqRSxnRUFBZ0U7RUFDaEUsZ0VBQWdFO0VBQ2hFLDZEQUE2RDtFQUM3RCwyREFBMkQ7RUFDM0QsNERBQTREO0VBQzVELG1FQUFtRTtFQUNuRSxrRUFBa0U7RUFDbEUsa0VBQWtFOztFQUVsRSwyQ0FBMkM7RUFDM0MsNENBQTRDOztFQUU1Qyw0QkFBNEI7RUFDNUIsd0NBQXdDO0VBQ3hDLDJDQUEyQzs7RUFFM0MsdURBQXVEO0VBQ3ZELHVEQUF1RDtFQUN2RCxpREFBaUQ7RUFDakQsOENBQThDO0VBQzlDLGdEQUFnRDtFQUNoRCw4Q0FBOEM7O0VBRTlDLGtEQUFrRDtFQUNsRCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7Ozs7OztFQU1FLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELDBCQUEwQjtFQUMxQjtnQ0FDOEI7QUFDaEM7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOERBQThEO0VBQzlELDBCQUEwQjtFQUMxQjtnQ0FDOEI7QUFDaEM7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCwwQkFBMEI7RUFDMUI7Z0NBQzhCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLW1haW4td2lkdGg6IDEyMzJweDtcclxuXHJcbiAgLS1tYWluLWNvbG9yLUE6ICMzNzRhNWQ7XHJcbiAgLS1tYWluLWNvbG9yLUI6ICM2OTc4ODY7XHJcbiAgLS1tYWluLWNvbG9yLUM6ICM5YmE1YWU7XHJcbiAgLS1tYWluLWNvbG9yLUQ6ICNjZGQyZDc7XHJcbiAgLS1tYWluLWNvbG9yLUU6ICNlMWU0ZTc7XHJcbiAgLS1tYWluLWNvbG9yLUY6ICNmNWY2Zjc7XHJcbiAgLS1tYWluLWNvbG9yLUg6ICNiN2NiM2Y7XHJcbiAgLS1tYWluLWNvbG9yLUk6ICM5N2IwMDA7XHJcblxyXG4gIC0tbWFpbi1iZy1jb2xvcjogd2hpdGU7XHJcbiAgLS1tYWluLXRpdGxlLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLUEpO1xyXG4gIC0tbWFpbi10ZXh0LWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLUIpO1xyXG4gIC0tbWFpbi1hLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLUEpO1xyXG4gIC0tbWFpbi1hLWNvbG9yLWhvdmVyOiB2YXIoLS1tYWluLWNvbG9yLUIpO1xyXG4gIC0tbWFpbi1hLWNvbG9yLXZpc2l0ZWQ6IHZhcigtLW1haW4tY29sb3ItQSk7XHJcbiAgLS1mb290ZXItdGV4dC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1GKTtcclxuICAtLWZvb3Rlci1hLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLUYpO1xyXG4gIC0tZm9vdGVyLWEtY29sb3ItaG92ZXI6IHZhcigtLW1haW4tY29sb3ItQSk7XHJcbiAgLS1mb290ZXItYS1jb2xvci12aXNpdGVkOiB2YXIoLS1tYWluLWNvbG9yLUYpO1xyXG5cclxuICAtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yLXN0YXRpYzogdmFyKC0tbWFpbi1jb2xvci1IKTtcclxuICAtLWJ1dHRvbi1wcmltYXJ5LWNvbG9yLWhvdmVyOiB2YXIoLS1tYWluLWNvbG9yLUkpO1xyXG4gIC0tYnV0dG9uLXByaW1hcnktY29sb3ItY2xpY2s6IHZhcigtLW1haW4tY29sb3ItSCk7XHJcbiAgLS1idXR0b24tb3V0bGluZS1wcmltYXJ5LWNvbG9yLXN0YXRpYzogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgLS1idXR0b24tb3V0bGluZS1wcmltYXJ5LWNvbG9yLWhvdmVyOiB2YXIoLS1tYWluLWNvbG9yLUkpO1xyXG4gIC0tYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1jb2xvci1jbGljazogdmFyKC0tbWFpbi1jb2xvci1IKTtcclxuICAtLWJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGVjb3JlLWNvbG9yLXN0YXRpYzogdmFyKC0tbWFpbi1jb2xvci1IKTtcclxuICAtLWJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGVjb3JlLWNvbG9yLWhvdmVyOiB2YXIoLS1tYWluLWNvbG9yLUkpO1xyXG4gIC0tYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kZWNvcmUtY29sb3ItY2xpY2s6IHZhcigtLW1haW4tY29sb3ItSCk7XHJcbiAgLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktY29sb3Itc3RhdGljOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcclxuICAtLWJ1dHRvbi1vdXRsaW5lLXNlY29uZGFyeS1jb2xvci1ob3ZlcjogdmFyKC0tbWFpbi1jb2xvci1EKTtcclxuICAtLWJ1dHRvbi1vdXRsaW5lLXNlY29uZGFyeS1jb2xvci1jbGljazogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktZGVjb3JlLWNvbG9yLXN0YXRpYzogdmFyKC0tbWFpbi1jb2xvci1EKTtcclxuICAtLWJ1dHRvbi1vdXRsaW5lLXNlY29uZGFyeS1kZWNvcmUtY29sb3ItaG92ZXI6IHZhcigtLW1haW4tY29sb3ItRCk7XHJcbiAgLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktZGVjb3JlLWNvbG9yLWNsaWNrOiB2YXIoLS1tYWluLWNvbG9yLUQpO1xyXG5cclxuICAtLWNhcHRpb24tY29sb3ItZW5hYmxlOiB2YXIoLS1tYWluLWNvbG9yLUIpO1xyXG4gIC0tY2FwdGlvbi1jb2xvci1kaXNhYmxlOiB2YXIoLS1tYWluLWNvbG9yLUUpO1xyXG5cclxuICAtLW1haW4tZGVjb3JlLXRoaWNrbmVzczogMnB4O1xyXG4gIC0tbWFpbi1kZWNvcmUtY29sb3I6IHZhcigtLW1haW4tY29sb3ItRSk7XHJcbiAgLS1tYWluLWZvb3Rlci1iZy1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1DKTtcclxuXHJcbiAgLS1tYWluLWgxLWZvbnQ6IG5vcm1hbCA0OHB4IFwiQmFsb28gQ2hldHRhblwiLCBzYW5zLXNlcmlmO1xyXG4gIC0tbWFpbi1oMi1mb250OiBub3JtYWwgMzZweCBcIkJhbG9vIENoZXR0YW5cIiwgc2Fucy1zZXJpZjtcclxuICAtLW1haW4taDMtZm9udDogYm9sZCAzMnB4IFwiS29kY2hhc2FuXCIsIHNhbnMtc2VyaWY7XHJcbiAgLS1tYWluLWg0LWZvbnQ6IGJvbGQgMjRweCBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIC0tbWFpbi1oNS1mb250OiBub3JtYWwgMjRweCBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIC0tbWFpbi1oNi1mb250OiBib2xkIDE4cHggXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgLS1tYWluLXRleHQtZm9udDogbm9ybWFsIDE4cHggXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuICAtLWNhcHRpb24tZm9udDogYm9sZCAxOHB4IFwiS29kY2hhc2FuXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xyXG4gIGZvbnQ6IHZhcigtLW1haW4tdGV4dC1mb250KTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg1IHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi10aXRsZS1jb2xvcik7XHJcbn1cclxuXHJcbmg0LFxyXG5oNiB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250OiB2YXIoLS1tYWluLWgxLWZvbnQpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udDogdmFyKC0tbWFpbi1oMi1mb250KTtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQ6IHZhcigtLW1haW4taDMtZm9udCk7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250OiB2YXIoLS1tYWluLWg0LWZvbnQpO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udDogdmFyKC0tbWFpbi1oNS1mb250KTtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQ6IHZhcigtLW1haW4taDYtZm9udCk7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hLWNvbG9yKTtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hLWNvbG9yLXZpc2l0ZWQpO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hLWNvbG9yLWhvdmVyKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgZm9udDogdmFyKC0tY2FwdGlvbi1mb250KTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAyNnB4O1xyXG59XHJcblxyXG5idXR0b24ucHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3Itc3RhdGljKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeS1jb2xvci1ob3Zlcik7XHJcbn1cclxuXHJcbmJ1dHRvbi5wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktY29sb3ItY2xpY2spO1xyXG59XHJcblxyXG5idXR0b24ub3V0bGluZS1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tb3V0bGluZS1wcmltYXJ5LWNvbG9yLXN0YXRpYyk7XHJcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tZm9udCk7XHJcbiAgYm9yZGVyOiB2YXIoLS1idXR0b24tb3V0bGluZS1wcmltYXJ5LWRlY29yZS1jb2xvci1zdGF0aWMpIHNvbGlkXHJcbiAgICB2YXIoLS1tYWluLWRlY29yZS10aGlja25lc3MpO1xyXG59XHJcblxyXG5idXR0b24ub3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tb3V0bGluZS1wcmltYXJ5LWNvbG9yLWhvdmVyKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ub3V0bGluZS1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1jb2xvci1jbGljayk7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLm91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktY29sb3Itc3RhdGljKTtcclxuICBjb2xvcjogdmFyKC0tY2FwdGlvbi1mb250KTtcclxuICBib3JkZXI6IHZhcigtLWJ1dHRvbi1vdXRsaW5lLXNlY29uZGFyeS1kZWNvcmUtY29sb3Itc3RhdGljKSBzb2xpZFxyXG4gICAgdmFyKC0tbWFpbi1kZWNvcmUtdGhpY2tuZXNzKTtcclxufVxyXG5cclxuYnV0dG9uLm91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktY29sb3ItaG92ZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5vdXRsaW5lLXNlY29uZGFyeTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1vdXRsaW5lLXNlY29uZGFyeS1jb2xvci1jbGljayk7XHJcbiAgY29sb3I6IHZhcigtLWNhcHRpb24tZm9udCk7XHJcbiAgYm9yZGVyOiB2YXIoLS1idXR0b24tb3V0bGluZS1zZWNvbmRhcnktZGVjb3JlLWNvbG9yLWNsaWNrKSBzb2xpZFxyXG4gICAgdmFyKC0tbWFpbi1kZWNvcmUtdGhpY2tuZXNzKTtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.css": 
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!******************************!*\
          !*** multi ./src/styles.css ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\EasyCode\JS_Angular\HomeWorks\Homework_Angular_1_TS\src\styles.css */ "./src/styles.css");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map