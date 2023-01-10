"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions/index.js":
/*!**********************************************!*\
  !*** ./pages/api/checkout_sessions/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const session = await stripe.checkout.sessions.create({\n                mode: \"payment\",\n                shipping_address_collection: {\n                    allowed_countries: [\n                        \"US\",\n                        \"CA\",\n                        \"AU\",\n                        \"AT\",\n                        \"BS\",\n                        \"BE\",\n                        \"BR\",\n                        \"BN\",\n                        \"FI\",\n                        \"FR\",\n                        \"DE\",\n                        \"HK\",\n                        \"HU\",\n                        \"IS\",\n                        \"IN\",\n                        \"ID\",\n                        \"IE\",\n                        \"IL\",\n                        \"IT\",\n                        \"JP\",\n                        \"KR\",\n                        \"KW\",\n                        \"LU\",\n                        \"MY\",\n                        \"MX\",\n                        \"MC\",\n                        \"MM\",\n                        \"NL\",\n                        \"NZ\",\n                        \"NO\",\n                        \"PH\",\n                        \"QA\",\n                        \"SA\",\n                        \"SG\",\n                        \"ZA\",\n                        \"ES\",\n                        \"CH\",\n                        \"TW\",\n                        \"TH\",\n                        \"TR\",\n                        \"AE\",\n                        \"GB\",\n                        \"VN\"\n                    ]\n                },\n                payment_method_types: [\n                    \"card\"\n                ],\n                line_items: req?.body?.items ?? [],\n                allow_promotion_codes: true,\n                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,\n                cancel_url: `${req.headers.origin}/cart`\n            });\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(500).json({\n                statusCode: 500,\n                message: err.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRTVCLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCwrQ0FBTSxDQUFDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLENBQUM7QUFFekMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLE9BQU8sR0FBRyxNQUFNUixNQUFNLENBQUNTLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7Z0JBQ3BEQyxJQUFJLEVBQUUsU0FBUztnQkFDZkMsMkJBQTJCLEVBQUU7b0JBQUNDLGlCQUFpQixFQUFFO3dCQUFDLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRyxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRyxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7d0JBQUUsSUFBSTt3QkFBRSxJQUFJO3dCQUFFLElBQUk7cUJBQUM7aUJBQUM7Z0JBQ3RUQyxvQkFBb0IsRUFBRTtvQkFBQyxNQUFNO2lCQUFDO2dCQUM5QkMsVUFBVSxFQUFFWCxHQUFHLEVBQUVZLElBQUksRUFBRUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xDQyxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQkMsV0FBVyxFQUFFLENBQUMsRUFBRWYsR0FBRyxDQUFDZ0IsT0FBTyxDQUFDQyxNQUFNLENBQUMseUNBQXlDLENBQUM7Z0JBQzdFQyxVQUFVLEVBQUUsQ0FBQyxFQUFFbEIsR0FBRyxDQUFDZ0IsT0FBTyxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ3pDLENBQUM7WUFFRmhCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDakIsT0FBTyxDQUFDLENBQUM7UUFDaEMsRUFBRSxPQUFPa0IsR0FBRyxFQUFFO1lBQ1pwQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsVUFBVSxFQUFFLEdBQUc7Z0JBQUVDLE9BQU8sRUFBRUYsR0FBRyxDQUFDRSxPQUFPO2FBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxPQUFPO1FBQ0x0QixHQUFHLENBQUN1QixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CdkIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTSxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbnN0cmUtbWV0YWNhbXAtc29scGF5Ly4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zL2luZGV4LmpzPzc2YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IHthbGxvd2VkX2NvdW50cmllczogWydVUycsICdDQScsICdBVScsICdBVCcsICdCUycsICdCRScsICdCUicsICdCTicsICdGSScsICdGUicsICdERScsICAnSEsnLCAnSFUnLCAnSVMnLCAnSU4nLCAnSUQnLCAnSUUnLCAnSUwnLCAnSVQnLCAnSlAnLCAgJ0tSJywgJ0tXJywgJ0xVJywgJ01ZJywgJ01YJywgJ01DJywgJ01NJywgJ05MJywgJ05aJywgJ05PJywgJ1BIJywgJ1FBJywgJ1NBJywgJ1NHJywgJ1pBJywgJ0VTJywgJ0NIJywgJ1RXJywgJ1RIJywgJ1RSJywgJ0FFJywgJ0dCJywgJ1ZOJ119LFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIGxpbmVfaXRlbXM6IHJlcT8uYm9keT8uaXRlbXMgPz8gW10sXG4gICAgICAgIGFsbG93X3Byb21vdGlvbl9jb2RlczogdHJ1ZSxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzcz9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY2FydGAsXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1c0NvZGU6IDUwMCwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsIm1vZGUiLCJzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJhbGxvd2VkX2NvdW50cmllcyIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsImJvZHkiLCJpdGVtcyIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions/index.js"));
module.exports = __webpack_exports__;

})();