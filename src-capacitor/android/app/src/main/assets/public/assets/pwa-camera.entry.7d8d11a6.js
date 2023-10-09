import { f as forceUpdate, h, g as getElement, r as registerInstance } from "./capacitor.8e397c8b.js";
import "./index.2facb99b.js";
var __awaiter = globalThis && globalThis.__awaiter || function(e, t, i, n) {
  function r(e2) {
    return e2 instanceof i ? e2 : new i(function(t2) {
      t2(e2);
    });
  }
  return new (i || (i = Promise))(function(i2, a) {
    function o(e2) {
      try {
        c(n.next(e2));
      } catch (e3) {
        a(e3);
      }
    }
    function s(e2) {
      try {
        c(n["throw"](e2));
      } catch (e3) {
        a(e3);
      }
    }
    function c(e2) {
      e2.done ? i2(e2.value) : r(e2.value).then(o, s);
    }
    c((n = n.apply(e, t || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(e, t) {
  var i = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, r, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(e2) {
    return function(t2) {
      return c([e2, t2]);
    };
  }
  function c(s2) {
    if (n)
      throw new TypeError("Generator is already executing.");
    while (o && (o = 0, s2[0] && (i = 0)), i)
      try {
        if (n = 1, r && (a = s2[0] & 2 ? r["return"] : s2[0] ? r["throw"] || ((a = r["return"]) && a.call(r), 0) : r.next) && !(a = a.call(r, s2[1])).done)
          return a;
        if (r = 0, a)
          s2 = [s2[0] & 2, a.value];
        switch (s2[0]) {
          case 0:
          case 1:
            a = s2;
            break;
          case 4:
            i.label++;
            return { value: s2[1], done: false };
          case 5:
            i.label++;
            r = s2[1];
            s2 = [0];
            continue;
          case 7:
            s2 = i.ops.pop();
            i.trys.pop();
            continue;
          default:
            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (s2[0] === 6 || s2[0] === 2)) {
              i = 0;
              continue;
            }
            if (s2[0] === 3 && (!a || s2[1] > a[0] && s2[1] < a[3])) {
              i.label = s2[1];
              break;
            }
            if (s2[0] === 6 && i.label < a[1]) {
              i.label = a[1];
              a = s2;
              break;
            }
            if (a && i.label < a[2]) {
              i.label = a[2];
              i.ops.push(s2);
              break;
            }
            if (a[2])
              i.ops.pop();
            i.trys.pop();
            continue;
        }
        s2 = t.call(e, i);
      } catch (e2) {
        s2 = [6, e2];
        r = 0;
      } finally {
        n = a = 0;
      }
    if (s2[0] & 5)
      throw s2[1];
    return { value: s2[0] ? s2[1] : void 0, done: true };
  }
};
/**
* MediaStream ImageCapture polyfill
*
* @license
* Copyright 2018 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ImageCapture = window.ImageCapture;
if (typeof ImageCapture === "undefined") {
  ImageCapture = function() {
    function e(e2) {
      var t = this;
      if (e2.kind !== "video")
        throw new DOMException("NotSupportedError");
      this._videoStreamTrack = e2;
      if (!("readyState" in this._videoStreamTrack)) {
        this._videoStreamTrack.readyState = "live";
      }
      this._previewStream = new MediaStream([e2]);
      this.videoElement = document.createElement("video");
      this.videoElementPlaying = new Promise(function(e3) {
        t.videoElement.addEventListener("playing", e3);
      });
      if (HTMLMediaElement) {
        this.videoElement.srcObject = this._previewStream;
      } else {
        this.videoElement.src = URL.createObjectURL(this._previewStream);
      }
      this.videoElement.muted = true;
      this.videoElement.setAttribute("playsinline", "");
      this.videoElement.play();
      this.canvasElement = document.createElement("canvas");
      this.canvas2dContext = this.canvasElement.getContext("2d");
    }
    Object.defineProperty(e.prototype, "videoStreamTrack", { get: function() {
      return this._videoStreamTrack;
    }, enumerable: false, configurable: true });
    e.prototype.getPhotoCapabilities = function() {
      return new Promise(function e2(t, i) {
        var n = { current: 0, min: 0, max: 0 };
        t({ exposureCompensation: n, exposureMode: "none", fillLightMode: ["none"], focusMode: "none", imageHeight: n, imageWidth: n, iso: n, redEyeReduction: false, whiteBalanceMode: "none", zoom: n });
        i(new DOMException("OperationError"));
      });
    };
    e.prototype.setOptions = function(e2) {
      return new Promise(function e3(t, i) {
      });
    };
    e.prototype.takePhoto = function() {
      var e2 = this;
      return new Promise(function t(i, n) {
        if (e2._videoStreamTrack.readyState !== "live") {
          return n(new DOMException("InvalidStateError"));
        }
        e2.videoElementPlaying.then(function() {
          try {
            e2.canvasElement.width = e2.videoElement.videoWidth;
            e2.canvasElement.height = e2.videoElement.videoHeight;
            e2.canvas2dContext.drawImage(e2.videoElement, 0, 0);
            e2.canvasElement.toBlob(i);
          } catch (e3) {
            n(new DOMException("UnknownError"));
          }
        });
      });
    };
    e.prototype.grabFrame = function() {
      var e2 = this;
      return new Promise(function t(i, n) {
        if (e2._videoStreamTrack.readyState !== "live") {
          return n(new DOMException("InvalidStateError"));
        }
        e2.videoElementPlaying.then(function() {
          try {
            e2.canvasElement.width = e2.videoElement.videoWidth;
            e2.canvasElement.height = e2.videoElement.videoHeight;
            e2.canvas2dContext.drawImage(e2.videoElement, 0, 0);
            i(window.createImageBitmap(e2.canvasElement));
          } catch (e3) {
            n(new DOMException("UnknownError"));
          }
        });
      });
    };
    return e;
  }();
}
window.ImageCapture = ImageCapture;
var cameraCss = ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system, BlinkMacSystemFont,\n    \u201CSegoe UI\u201D, \u201CRoboto\u201D, \u201CDroid Sans\u201D, \u201CHelvetica Neue\u201D, sans-serif;display:block;width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:white;background-color:black;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:white;background-color:black;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height: 375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden;background-color:black}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;background-color:black}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:white;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:white;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.rotate img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:black}.error{width:100%;height:100%;color:white;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.no-device{background-color:black;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:white}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:black}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:black;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:center center;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer;width:var(--icon-size-header);height:var(--icon-size-header)}.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.accept-cancel img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
var CameraPWA = function() {
  function e(e2) {
    var t = this;
    registerInstance(this, e2);
    this.hasMultipleCameras = false;
    this.hasFlash = false;
    this.flashModes = [];
    this.flashMode = "off";
    this.handlePickFile = function(e3) {
    };
    this.handleShutterClick = function(e3) {
      console.debug("shutter click");
      t.capture();
    };
    this.handleRotateClick = function(e3) {
      t.rotate();
    };
    this.handleClose = function(e3) {
      t.handlePhoto && t.handlePhoto(null);
    };
    this.handleFlashClick = function(e3) {
      t.cycleFlash();
    };
    this.handleCancelPhoto = function(e3) {
      var i = t.stream && t.stream.getTracks()[0];
      var n = i && i.getConstraints();
      t.photo = null;
      t.photoSrc = null;
      if (n) {
        t.initCamera({ video: { facingMode: n.facingMode } });
      } else {
        t.initCamera();
      }
    };
    this.handleAcceptPhoto = function(e3) {
      t.handlePhoto && t.handlePhoto(t.photo);
    };
    this.handleFileInputChange = function(e3) {
      return __awaiter(t, void 0, void 0, function() {
        var t2, i, n;
        return __generator(this, function(a) {
          switch (a.label) {
            case 0:
              t2 = e3.target;
              i = t2.files[0];
              a.label = 1;
            case 1:
              a.trys.push([1, 3, , 4]);
              return [4, this.getOrientation(i)];
            case 2:
              n = a.sent();
              console.debug("Got orientation", n);
              this.photoOrientation = n;
              return [3, 4];
            case 3:
              a.sent();
              return [3, 4];
            case 4:
              this.handlePhoto && this.handlePhoto(i);
              return [2];
          }
        });
      });
    };
    this.handleVideoMetadata = function(e3) {
      console.debug("Video metadata", e3);
    };
    this.facingMode = "user";
    this.handlePhoto = void 0;
    this.handleNoDeviceError = void 0;
    this.noDevicesText = "No camera found";
    this.noDevicesButtonText = "Choose image";
    this.photo = void 0;
    this.photoSrc = void 0;
    this.showShutterOverlay = false;
    this.flashIndex = 0;
    this.hasCamera = null;
    this.rotation = 0;
    this.deviceError = null;
  }
  e.prototype.componentDidLoad = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            this.defaultConstraints = { video: { facingMode: this.facingMode } };
            return [4, this.queryDevices()];
          case 1:
            e2.sent();
            return [4, this.initCamera()];
          case 2:
            e2.sent();
            return [2];
        }
      });
    });
  };
  e.prototype.disconnectedCallback = function() {
    this.stopStream();
    this.photoSrc && URL.revokeObjectURL(this.photoSrc);
  };
  e.prototype.hasImageCapture = function() {
    return "ImageCapture" in window;
  };
  e.prototype.queryDevices = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e2, t, i;
      return __generator(this, function(n) {
        switch (n.label) {
          case 0:
            n.trys.push([0, 2, , 3]);
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            e2 = n.sent();
            t = e2.filter(function(e3) {
              return e3.kind == "videoinput";
            });
            this.hasCamera = !!t.length;
            this.hasMultipleCameras = t.length > 1;
            return [3, 3];
          case 2:
            i = n.sent();
            this.deviceError = i;
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  e.prototype.initCamera = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      var t, i;
      return __generator(this, function(n) {
        switch (n.label) {
          case 0:
            if (!e2) {
              e2 = this.defaultConstraints;
            }
            n.label = 1;
          case 1:
            n.trys.push([1, 3, , 4]);
            return [4, navigator.mediaDevices.getUserMedia(Object.assign({ video: true, audio: false }, e2))];
          case 2:
            t = n.sent();
            this.initStream(t);
            return [3, 4];
          case 3:
            i = n.sent();
            this.deviceError = i;
            this.handleNoDeviceError && this.handleNoDeviceError(i);
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  };
  e.prototype.initStream = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t) {
        switch (t.label) {
          case 0:
            this.stream = e2;
            this.videoElement.srcObject = e2;
            if (!this.hasImageCapture())
              return [3, 2];
            this.imageCapture = new window.ImageCapture(e2.getVideoTracks()[0]);
            return [4, this.initPhotoCapabilities(this.imageCapture)];
          case 1:
            t.sent();
            return [3, 3];
          case 2:
            this.deviceError = "No image capture";
            this.handleNoDeviceError && this.handleNoDeviceError();
            t.label = 3;
          case 3:
            forceUpdate(this.el);
            return [2];
        }
      });
    });
  };
  e.prototype.initPhotoCapabilities = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      var t;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, e2.getPhotoCapabilities()];
          case 1:
            t = i.sent();
            if (t.fillLightMode && t.fillLightMode.length > 1) {
              this.flashModes = t.fillLightMode.map(function(e3) {
                return e3;
              });
              if (this.flashMode) {
                this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || "off";
                this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
              } else {
                this.flashIndex = 0;
              }
            }
            return [2];
        }
      });
    });
  };
  e.prototype.stopStream = function() {
    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }
    this.stream && this.stream.getTracks().forEach(function(e2) {
      return e2.stop();
    });
  };
  e.prototype.capture = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e2, t;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            if (!this.hasImageCapture())
              return [3, 5];
            i.label = 1;
          case 1:
            i.trys.push([1, 4, , 5]);
            return [4, this.imageCapture.takePhoto({ fillLightMode: this.flashModes.length > 1 ? this.flashMode : void 0 })];
          case 2:
            e2 = i.sent();
            return [4, this.flashScreen()];
          case 3:
            i.sent();
            this.promptAccept(e2);
            return [3, 5];
          case 4:
            t = i.sent();
            console.error("Unable to take photo!", t);
            return [3, 5];
          case 5:
            this.stopStream();
            return [2];
        }
      });
    });
  };
  e.prototype.promptAccept = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      var t;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            this.photo = e2;
            return [4, this.getOrientation(e2)];
          case 1:
            t = i.sent();
            console.debug("Got orientation", t);
            this.photoOrientation = t;
            if (t) {
              switch (t) {
                case 1:
                case 2:
                  this.rotation = 0;
                  break;
                case 3:
                case 4:
                  this.rotation = 180;
                  break;
                case 5:
                case 6:
                  this.rotation = 90;
                  break;
                case 7:
                case 8:
                  this.rotation = 270;
                  break;
              }
            }
            this.photoSrc = URL.createObjectURL(e2);
            return [2];
        }
      });
    });
  };
  e.prototype.getOrientation = function(e2) {
    return new Promise(function(t) {
      var i = new FileReader();
      i.onload = function(e3) {
        var i2 = new DataView(e3.target.result);
        if (i2.getUint16(0, false) !== 65496) {
          return t(-2);
        }
        var n = i2.byteLength;
        var r = 2;
        while (r < n) {
          var a = i2.getUint16(r, false);
          r += 2;
          if (a === 65505) {
            if (i2.getUint32(r += 2, false) !== 1165519206) {
              return t(-1);
            }
            var o = i2.getUint16(r += 6, false) === 18761;
            r += i2.getUint32(r + 4, o);
            var s = i2.getUint16(r, o);
            r += 2;
            for (var c = 0; c < s; c++) {
              if (i2.getUint16(r + c * 12, o) === 274) {
                return t(i2.getUint16(r + c * 12 + 8, o));
              }
            }
          } else if ((a & 65280) !== 65280) {
            break;
          } else {
            r += i2.getUint16(r, false);
          }
        }
        return t(-1);
      };
      i.readAsArrayBuffer(e2.slice(0, 64 * 1024));
    });
  };
  e.prototype.rotate = function() {
    this.stopStream();
    var e2 = this.stream && this.stream.getTracks()[0];
    if (!e2) {
      return;
    }
    var t = e2.getConstraints();
    var i = t.facingMode;
    if (!i) {
      var n = e2.getCapabilities();
      if (n.facingMode) {
        i = n.facingMode[0];
      }
    }
    if (i === "environment") {
      this.initCamera({ video: { facingMode: "user" } });
    } else {
      this.initCamera({ video: { facingMode: "environment" } });
    }
  };
  e.prototype.setFlashMode = function(e2) {
    console.debug("New flash mode: ", e2);
    this.flashMode = e2;
  };
  e.prototype.cycleFlash = function() {
    if (this.flashModes.length > 0) {
      this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
      this.setFlashMode(this.flashModes[this.flashIndex]);
    }
  };
  e.prototype.flashScreen = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e2 = this;
      return __generator(this, function(t) {
        return [2, new Promise(function(t2, i) {
          e2.showShutterOverlay = true;
          setTimeout(function() {
            e2.showShutterOverlay = false;
            t2();
          }, 100);
        })];
      });
    });
  };
  e.prototype.iconExit = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.iconPhotos = function() {
    return h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "512", height: "512", viewBox: "0 0 512 512" }, h("path", { d: "M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z" }), h("path", { d: "M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z" }));
  };
  e.prototype.iconConfirm = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.iconReverseCamera = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.iconRetake = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.iconFlashOff = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.iconFlashOn = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
  };
  e.prototype.iconFlashAuto = function() {
    return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
  };
  e.prototype.render = function() {
    var e2 = this;
    var t = {};
    return h("div", { class: "camera-wrapper" }, h("div", { class: "camera-header" }, h("section", { class: "items" }, h("div", { class: "item close", onClick: function(t2) {
      return e2.handleClose(t2);
    } }, h("img", { src: this.iconExit() })), h("div", { class: "item flash", onClick: function(t2) {
      return e2.handleFlashClick(t2);
    } }, this.flashModes.length > 0 && h("div", null, this.flashMode == "off" ? h("img", { src: this.iconFlashOff() }) : "", this.flashMode == "auto" ? h("img", { src: this.iconFlashAuto() }) : "", this.flashMode == "flash" ? h("img", { src: this.iconFlashOn() }) : "")))), (this.hasCamera === false || !!this.deviceError) && h("div", { class: "no-device" }, h("h2", null, this.noDevicesText), h("label", { htmlFor: "_pwa-elements-camera-input" }, this.noDevicesButtonText), h("input", { type: "file", id: "_pwa-elements-camera-input", onChange: this.handleFileInputChange, accept: "image/*", class: "select-file-button" })), this.photoSrc ? h("div", { class: "accept" }, h("div", { class: "accept-image", style: Object.assign({ backgroundImage: "url(".concat(this.photoSrc, ")") }, t) })) : h("div", { class: "camera-video" }, this.showShutterOverlay && h("div", { class: "shutter-overlay" }), this.hasImageCapture() ? h("video", { ref: function(t2) {
      return e2.videoElement = t2;
    }, onLoadedMetaData: this.handleVideoMetadata, autoplay: true, playsinline: true }) : h("canvas", { ref: function(t2) {
      return e2.canvasElement = t2;
    }, width: "100%", height: "100%" }), h("canvas", { class: "offscreen-image-render", ref: function(t2) {
      return e2.offscreenCanvas = t2;
    }, width: "100%", height: "100%" })), this.hasCamera && h("div", { class: "camera-footer" }, !this.photo ? [h("div", { class: "pick-image", onClick: this.handlePickFile }, h("label", { htmlFor: "_pwa-elements-file-pick" }, this.iconPhotos()), h("input", { type: "file", id: "_pwa-elements-file-pick", onChange: this.handleFileInputChange, accept: "image/*", class: "pick-image-button" })), h("div", { class: "shutter", onClick: this.handleShutterClick }, h("div", { class: "shutter-button" })), h("div", { class: "rotate", onClick: this.handleRotateClick }, h("img", { src: this.iconReverseCamera() }))] : h("section", { class: "items" }, h("div", { class: "item accept-cancel", onClick: function(t2) {
      return e2.handleCancelPhoto(t2);
    } }, h("img", { src: this.iconRetake() })), h("div", { class: "item accept-use", onClick: function(t2) {
      return e2.handleAcceptPhoto(t2);
    } }, h("img", { src: this.iconConfirm() })))));
  };
  Object.defineProperty(e, "assetsDirs", { get: function() {
    return ["icons"];
  }, enumerable: false, configurable: true });
  Object.defineProperty(e.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
CameraPWA.style = cameraCss;
export { CameraPWA as pwa_camera };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLWNhbWVyYS5lbnRyeS43ZDhkMTFhNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L3B3YS1jYW1lcmEuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlcj10aGlzJiZ0aGlzLl9fYXdhaXRlcnx8ZnVuY3Rpb24oZSx0LGksbil7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIGk/ZTpuZXcgaSgoZnVuY3Rpb24odCl7dChlKX0pKX1yZXR1cm4gbmV3KGl8fChpPVByb21pc2UpKSgoZnVuY3Rpb24oaSxhKXtmdW5jdGlvbiBvKGUpe3RyeXtjKG4ubmV4dChlKSl9Y2F0Y2goZSl7YShlKX19ZnVuY3Rpb24gcyhlKXt0cnl7YyhuW1widGhyb3dcIl0oZSkpfWNhdGNoKGUpe2EoZSl9fWZ1bmN0aW9uIGMoZSl7ZS5kb25lP2koZS52YWx1ZSk6cihlLnZhbHVlKS50aGVuKG8scyl9Yygobj1uLmFwcGx5KGUsdHx8W10pKS5uZXh0KCkpfSkpfTt2YXIgX19nZW5lcmF0b3I9dGhpcyYmdGhpcy5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24oZSx0KXt2YXIgaT17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoYVswXSYxKXRocm93IGFbMV07cmV0dXJuIGFbMV19LHRyeXM6W10sb3BzOltdfSxuLHIsYSxvO3JldHVybiBvPXtuZXh0OnMoMCksdGhyb3c6cygxKSxyZXR1cm46cygyKX0sdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmKG9bU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksbztmdW5jdGlvbiBzKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gYyhbZSx0XSl9fWZ1bmN0aW9uIGMocyl7aWYobil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTt3aGlsZShvJiYobz0wLHNbMF0mJihpPTApKSxpKXRyeXtpZihuPTEsciYmKGE9c1swXSYyP3JbXCJyZXR1cm5cIl06c1swXT9yW1widGhyb3dcIl18fCgoYT1yW1wicmV0dXJuXCJdKSYmYS5jYWxsKHIpLDApOnIubmV4dCkmJiEoYT1hLmNhbGwocixzWzFdKSkuZG9uZSlyZXR1cm4gYTtpZihyPTAsYSlzPVtzWzBdJjIsYS52YWx1ZV07c3dpdGNoKHNbMF0pe2Nhc2UgMDpjYXNlIDE6YT1zO2JyZWFrO2Nhc2UgNDppLmxhYmVsKys7cmV0dXJue3ZhbHVlOnNbMV0sZG9uZTpmYWxzZX07Y2FzZSA1OmkubGFiZWwrKztyPXNbMV07cz1bMF07Y29udGludWU7Y2FzZSA3OnM9aS5vcHMucG9wKCk7aS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShhPWkudHJ5cyxhPWEubGVuZ3RoPjAmJmFbYS5sZW5ndGgtMV0pJiYoc1swXT09PTZ8fHNbMF09PT0yKSl7aT0wO2NvbnRpbnVlfWlmKHNbMF09PT0zJiYoIWF8fHNbMV0+YVswXSYmc1sxXTxhWzNdKSl7aS5sYWJlbD1zWzFdO2JyZWFrfWlmKHNbMF09PT02JiZpLmxhYmVsPGFbMV0pe2kubGFiZWw9YVsxXTthPXM7YnJlYWt9aWYoYSYmaS5sYWJlbDxhWzJdKXtpLmxhYmVsPWFbMl07aS5vcHMucHVzaChzKTticmVha31pZihhWzJdKWkub3BzLnBvcCgpO2kudHJ5cy5wb3AoKTtjb250aW51ZX1zPXQuY2FsbChlLGkpfWNhdGNoKGUpe3M9WzYsZV07cj0wfWZpbmFsbHl7bj1hPTB9aWYoc1swXSY1KXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTp0cnVlfX19O2ltcG9ydHtyIGFzIHJlZ2lzdGVySW5zdGFuY2UsZiBhcyBmb3JjZVVwZGF0ZSxoLGcgYXMgZ2V0RWxlbWVudH1mcm9tXCIuL2luZGV4LTFjNWM0N2I0LmpzXCI7XG4vKipcbiAqIE1lZGlhU3RyZWFtIEltYWdlQ2FwdHVyZSBwb2x5ZmlsbFxuICpcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi92YXIgSW1hZ2VDYXB0dXJlPXdpbmRvdy5JbWFnZUNhcHR1cmU7aWYodHlwZW9mIEltYWdlQ2FwdHVyZT09PVwidW5kZWZpbmVkXCIpe0ltYWdlQ2FwdHVyZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcztpZihlLmtpbmQhPT1cInZpZGVvXCIpdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIk5vdFN1cHBvcnRlZEVycm9yXCIpO3RoaXMuX3ZpZGVvU3RyZWFtVHJhY2s9ZTtpZighKFwicmVhZHlTdGF0ZVwiaW4gdGhpcy5fdmlkZW9TdHJlYW1UcmFjaykpe3RoaXMuX3ZpZGVvU3RyZWFtVHJhY2sucmVhZHlTdGF0ZT1cImxpdmVcIn10aGlzLl9wcmV2aWV3U3RyZWFtPW5ldyBNZWRpYVN0cmVhbShbZV0pO3RoaXMudmlkZW9FbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTt0aGlzLnZpZGVvRWxlbWVudFBsYXlpbmc9bmV3IFByb21pc2UoKGZ1bmN0aW9uKGUpe3QudmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5aW5nXCIsZSl9KSk7aWYoSFRNTE1lZGlhRWxlbWVudCl7dGhpcy52aWRlb0VsZW1lbnQuc3JjT2JqZWN0PXRoaXMuX3ByZXZpZXdTdHJlYW19ZWxzZXt0aGlzLnZpZGVvRWxlbWVudC5zcmM9VVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9wcmV2aWV3U3RyZWFtKX10aGlzLnZpZGVvRWxlbWVudC5tdXRlZD10cnVlO3RoaXMudmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsXCJcIik7dGhpcy52aWRlb0VsZW1lbnQucGxheSgpO3RoaXMuY2FudmFzRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3RoaXMuY2FudmFzMmRDb250ZXh0PXRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwidmlkZW9TdHJlYW1UcmFja1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdmlkZW9TdHJlYW1UcmFja30sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO2UucHJvdG90eXBlLmdldFBob3RvQ2FwYWJpbGl0aWVzPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbiBlKHQsaSl7dmFyIG49e2N1cnJlbnQ6MCxtaW46MCxtYXg6MH07dCh7ZXhwb3N1cmVDb21wZW5zYXRpb246bixleHBvc3VyZU1vZGU6XCJub25lXCIsZmlsbExpZ2h0TW9kZTpbXCJub25lXCJdLGZvY3VzTW9kZTpcIm5vbmVcIixpbWFnZUhlaWdodDpuLGltYWdlV2lkdGg6bixpc286bixyZWRFeWVSZWR1Y3Rpb246ZmFsc2Usd2hpdGVCYWxhbmNlTW9kZTpcIm5vbmVcIix6b29tOm59KTtpKG5ldyBET01FeGNlcHRpb24oXCJPcGVyYXRpb25FcnJvclwiKSl9KSl9O2UucHJvdG90eXBlLnNldE9wdGlvbnM9ZnVuY3Rpb24oZSl7aWYoZT09PXZvaWQgMCl7ZT17fX1yZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uIGUodCxpKXt9KSl9O2UucHJvdG90eXBlLnRha2VQaG90bz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbiB0KGksbil7aWYoZS5fdmlkZW9TdHJlYW1UcmFjay5yZWFkeVN0YXRlIT09XCJsaXZlXCIpe3JldHVybiBuKG5ldyBET01FeGNlcHRpb24oXCJJbnZhbGlkU3RhdGVFcnJvclwiKSl9ZS52aWRlb0VsZW1lbnRQbGF5aW5nLnRoZW4oKGZ1bmN0aW9uKCl7dHJ5e2UuY2FudmFzRWxlbWVudC53aWR0aD1lLnZpZGVvRWxlbWVudC52aWRlb1dpZHRoO2UuY2FudmFzRWxlbWVudC5oZWlnaHQ9ZS52aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7ZS5jYW52YXMyZENvbnRleHQuZHJhd0ltYWdlKGUudmlkZW9FbGVtZW50LDAsMCk7ZS5jYW52YXNFbGVtZW50LnRvQmxvYihpKX1jYXRjaChlKXtuKG5ldyBET01FeGNlcHRpb24oXCJVbmtub3duRXJyb3JcIikpfX0pKX0pKX07ZS5wcm90b3R5cGUuZ3JhYkZyYW1lPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uIHQoaSxuKXtpZihlLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUhPT1cImxpdmVcIil7cmV0dXJuIG4obmV3IERPTUV4Y2VwdGlvbihcIkludmFsaWRTdGF0ZUVycm9yXCIpKX1lLnZpZGVvRWxlbWVudFBsYXlpbmcudGhlbigoZnVuY3Rpb24oKXt0cnl7ZS5jYW52YXNFbGVtZW50LndpZHRoPWUudmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7ZS5jYW52YXNFbGVtZW50LmhlaWdodD1lLnZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtlLmNhbnZhczJkQ29udGV4dC5kcmF3SW1hZ2UoZS52aWRlb0VsZW1lbnQsMCwwKTtpKHdpbmRvdy5jcmVhdGVJbWFnZUJpdG1hcChlLmNhbnZhc0VsZW1lbnQpKX1jYXRjaChlKXtuKG5ldyBET01FeGNlcHRpb24oXCJVbmtub3duRXJyb3JcIikpfX0pKX0pKX07cmV0dXJuIGV9KCl9d2luZG93LkltYWdlQ2FwdHVyZT1JbWFnZUNhcHR1cmU7dmFyIGNhbWVyYUNzcz1cIjpob3N0ey0taGVhZGVyLWhlaWdodDo0ZW07LS1mb290ZXItaGVpZ2h0OjllbTstLWhlYWRlci1oZWlnaHQtbGFuZHNjYXBlOjNlbTstLWZvb3Rlci1oZWlnaHQtbGFuZHNjYXBlOjZlbTstLXNodXR0ZXItc2l6ZTo2ZW07LS1pY29uLXNpemUtaGVhZGVyOjEuNWVtOy0taWNvbi1zaXplLWZvb3RlcjoyLjVlbTstLW1hcmdpbi1zaXplLWhlYWRlcjoxLjVlbTstLW1hcmdpbi1zaXplLWZvb3RlcjoyLjBlbTtmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIOKAnFNlZ29lIFVJ4oCdLCDigJxSb2JvdG/igJ0sIOKAnERyb2lkIFNhbnPigJ0sIOKAnEhlbHZldGljYSBOZXVl4oCdLCBzYW5zLXNlcmlmO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uaXRlbXN7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5pdGVtcyAuaXRlbXstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmNlbnRlcn0uaXRlbXMgLml0ZW06Zmlyc3QtY2hpbGR7dGV4dC1hbGlnbjpsZWZ0fS5pdGVtcyAuaXRlbTpsYXN0LWNoaWxke3RleHQtYWxpZ246cmlnaHR9LmNhbWVyYS13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmNhbWVyYS1oZWFkZXJ7Y29sb3I6d2hpdGU7YmFja2dyb3VuZC1jb2xvcjpibGFjaztoZWlnaHQ6dmFyKC0taGVhZGVyLWhlaWdodCl9LmNhbWVyYS1oZWFkZXIgLml0ZW1ze3BhZGRpbmc6dmFyKC0tbWFyZ2luLXNpemUtaGVhZGVyKX0uY2FtZXJhLWZvb3Rlcntwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO2hlaWdodDp2YXIoLS1mb290ZXItaGVpZ2h0KX0uY2FtZXJhLWZvb3RlciAuaXRlbXN7cGFkZGluZzp2YXIoLS1tYXJnaW4tc2l6ZS1mb290ZXIpfUBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpey5jYW1lcmEtaGVhZGVyey0taGVhZGVyLWhlaWdodDp2YXIoLS1oZWFkZXItaGVpZ2h0LWxhbmRzY2FwZSl9LmNhbWVyYS1mb290ZXJ7LS1mb290ZXItaGVpZ2h0OnZhcigtLWZvb3Rlci1oZWlnaHQtbGFuZHNjYXBlKX0uY2FtZXJhLWZvb3RlciAuc2h1dHRlcnstLXNodXR0ZXItc2l6ZTo0ZW19fS5jYW1lcmEtdmlkZW97cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6YmxhY2t9dmlkZW97d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3ZlcjtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrfS5waWNrLWltYWdle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDp2YXIoLS1tYXJnaW4tc2l6ZS1mb290ZXIpO3RvcDowO2hlaWdodDoxMDAlO3dpZHRoOnZhcigtLWljb24tc2l6ZS1mb290ZXIpO2NvbG9yOndoaXRlfS5waWNrLWltYWdlIGlucHV0e3Zpc2liaWxpdHk6aGlkZGVufS5waWNrLWltYWdlIHN2Z3tjdXJzb3I6cG9pbnRlcjtmaWxsOndoaXRlO3dpZHRoOnZhcigtLWljb24tc2l6ZS1mb290ZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKX0uc2h1dHRlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3dpZHRoOnZhcigtLXNodXR0ZXItc2l6ZSk7aGVpZ2h0OnZhcigtLXNodXR0ZXItc2l6ZSk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLXNodXR0ZXItc2l6ZSkgLyAtMik7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1zaHV0dGVyLXNpemUpIC8gLTIpO2JvcmRlci1yYWRpdXM6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNjNmNkZDg7cGFkZGluZzoxMnB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2h1dHRlcjphY3RpdmUgLnNodXR0ZXItYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzlkYTliYn0uc2h1dHRlci1idXR0b257YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXItcmFkaXVzOjEwMCU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ucm90YXRle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tbWFyZ2luLXNpemUtZm9vdGVyKTt0b3A6MDtoZWlnaHQ6MTAwJTt3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtjb2xvcjp3aGl0ZX0ucm90YXRlIGltZ3t3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtoZWlnaHQ6dmFyKC0taWNvbi1zaXplLWZvb3Rlcil9LnNodXR0ZXItb3ZlcmxheXt6LWluZGV4OjU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrfS5lcnJvcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbG9yOndoaXRlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubm8tZGV2aWNle2JhY2tncm91bmQtY29sb3I6YmxhY2s7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOndoaXRlfS5uby1kZXZpY2UgbGFiZWx7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NnB4O3BhZGRpbmc6NnB4IDhweDtjb2xvcjpibGFja30ubm8tZGV2aWNlIGlucHV0e3Zpc2liaWxpdHk6aGlkZGVuO2hlaWdodDowO21hcmdpbi10b3A6MTZweH0uYWNjZXB0e2JhY2tncm91bmQtY29sb3I6YmxhY2s7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVufS5hY2NlcHQgLmFjY2VwdC1pbWFnZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uY2xvc2UgaW1ne2N1cnNvcjpwb2ludGVyO3dpZHRoOnZhcigtLWljb24tc2l6ZS1oZWFkZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtaGVhZGVyKX0uZmxhc2ggaW1ne3dpZHRoOnZhcigtLWljb24tc2l6ZS1oZWFkZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtaGVhZGVyKX0uYWNjZXB0LXVzZSBpbWd7d2lkdGg6dmFyKC0taWNvbi1zaXplLWZvb3Rlcik7aGVpZ2h0OnZhcigtLWljb24tc2l6ZS1mb290ZXIpfS5hY2NlcHQtY2FuY2VsIGltZ3t3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtoZWlnaHQ6dmFyKC0taWNvbi1zaXplLWZvb3Rlcil9Lm9mZnNjcmVlbi1pbWFnZS1yZW5kZXJ7dG9wOjA7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1cIjt2YXIgQ2FtZXJhUFdBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzO3JlZ2lzdGVySW5zdGFuY2UodGhpcyxlKTt0aGlzLmhhc011bHRpcGxlQ2FtZXJhcz1mYWxzZTt0aGlzLmhhc0ZsYXNoPWZhbHNlO3RoaXMuZmxhc2hNb2Rlcz1bXTt0aGlzLmZsYXNoTW9kZT1cIm9mZlwiO3RoaXMuaGFuZGxlUGlja0ZpbGU9ZnVuY3Rpb24oZSl7fTt0aGlzLmhhbmRsZVNodXR0ZXJDbGljaz1mdW5jdGlvbihlKXtjb25zb2xlLmRlYnVnKFwic2h1dHRlciBjbGlja1wiKTt0LmNhcHR1cmUoKX07dGhpcy5oYW5kbGVSb3RhdGVDbGljaz1mdW5jdGlvbihlKXt0LnJvdGF0ZSgpfTt0aGlzLmhhbmRsZUNsb3NlPWZ1bmN0aW9uKGUpe3QuaGFuZGxlUGhvdG8mJnQuaGFuZGxlUGhvdG8obnVsbCl9O3RoaXMuaGFuZGxlRmxhc2hDbGljaz1mdW5jdGlvbihlKXt0LmN5Y2xlRmxhc2goKX07dGhpcy5oYW5kbGVDYW5jZWxQaG90bz1mdW5jdGlvbihlKXt2YXIgaT10LnN0cmVhbSYmdC5zdHJlYW0uZ2V0VHJhY2tzKClbMF07dmFyIG49aSYmaS5nZXRDb25zdHJhaW50cygpO3QucGhvdG89bnVsbDt0LnBob3RvU3JjPW51bGw7aWYobil7dC5pbml0Q2FtZXJhKHt2aWRlbzp7ZmFjaW5nTW9kZTpuLmZhY2luZ01vZGV9fSl9ZWxzZXt0LmluaXRDYW1lcmEoKX19O3RoaXMuaGFuZGxlQWNjZXB0UGhvdG89ZnVuY3Rpb24oZSl7dC5oYW5kbGVQaG90byYmdC5oYW5kbGVQaG90byh0LnBob3RvKX07dGhpcy5oYW5kbGVGaWxlSW5wdXRDaGFuZ2U9ZnVuY3Rpb24oZSl7cmV0dXJuIF9fYXdhaXRlcih0LHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIHQsaSxuLHI7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKGEpe3N3aXRjaChhLmxhYmVsKXtjYXNlIDA6dD1lLnRhcmdldDtpPXQuZmlsZXNbMF07YS5sYWJlbD0xO2Nhc2UgMTphLnRyeXMucHVzaChbMSwzLCw0XSk7cmV0dXJuWzQsdGhpcy5nZXRPcmllbnRhdGlvbihpKV07Y2FzZSAyOm49YS5zZW50KCk7Y29uc29sZS5kZWJ1ZyhcIkdvdCBvcmllbnRhdGlvblwiLG4pO3RoaXMucGhvdG9PcmllbnRhdGlvbj1uO3JldHVyblszLDRdO2Nhc2UgMzpyPWEuc2VudCgpO3JldHVyblszLDRdO2Nhc2UgNDp0aGlzLmhhbmRsZVBob3RvJiZ0aGlzLmhhbmRsZVBob3RvKGkpO3JldHVyblsyXX19KSl9KSl9O3RoaXMuaGFuZGxlVmlkZW9NZXRhZGF0YT1mdW5jdGlvbihlKXtjb25zb2xlLmRlYnVnKFwiVmlkZW8gbWV0YWRhdGFcIixlKX07dGhpcy5mYWNpbmdNb2RlPVwidXNlclwiO3RoaXMuaGFuZGxlUGhvdG89dW5kZWZpbmVkO3RoaXMuaGFuZGxlTm9EZXZpY2VFcnJvcj11bmRlZmluZWQ7dGhpcy5ub0RldmljZXNUZXh0PVwiTm8gY2FtZXJhIGZvdW5kXCI7dGhpcy5ub0RldmljZXNCdXR0b25UZXh0PVwiQ2hvb3NlIGltYWdlXCI7dGhpcy5waG90bz11bmRlZmluZWQ7dGhpcy5waG90b1NyYz11bmRlZmluZWQ7dGhpcy5zaG93U2h1dHRlck92ZXJsYXk9ZmFsc2U7dGhpcy5mbGFzaEluZGV4PTA7dGhpcy5oYXNDYW1lcmE9bnVsbDt0aGlzLnJvdGF0aW9uPTA7dGhpcy5kZXZpY2VFcnJvcj1udWxsfWUucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24oZSl7c3dpdGNoKGUubGFiZWwpe2Nhc2UgMDp0aGlzLmRlZmF1bHRDb25zdHJhaW50cz17dmlkZW86e2ZhY2luZ01vZGU6dGhpcy5mYWNpbmdNb2RlfX07cmV0dXJuWzQsdGhpcy5xdWVyeURldmljZXMoKV07Y2FzZSAxOmUuc2VudCgpO3JldHVybls0LHRoaXMuaW5pdENhbWVyYSgpXTtjYXNlIDI6ZS5zZW50KCk7cmV0dXJuWzJdfX0pKX0pKX07ZS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oKXt0aGlzLnN0b3BTdHJlYW0oKTt0aGlzLnBob3RvU3JjJiZVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMucGhvdG9TcmMpfTtlLnByb3RvdHlwZS5oYXNJbWFnZUNhcHR1cmU9ZnVuY3Rpb24oKXtyZXR1cm5cIkltYWdlQ2FwdHVyZVwiaW4gd2luZG93fTtlLnByb3RvdHlwZS5xdWVyeURldmljZXM9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSx0LGk7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6bi50cnlzLnB1c2goWzAsMiwsM10pO3JldHVybls0LG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXTtjYXNlIDE6ZT1uLnNlbnQoKTt0PWUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5raW5kPT1cInZpZGVvaW5wdXRcIn0pKTt0aGlzLmhhc0NhbWVyYT0hIXQubGVuZ3RoO3RoaXMuaGFzTXVsdGlwbGVDYW1lcmFzPXQubGVuZ3RoPjE7cmV0dXJuWzMsM107Y2FzZSAyOmk9bi5zZW50KCk7dGhpcy5kZXZpY2VFcnJvcj1pO3JldHVyblszLDNdO2Nhc2UgMzpyZXR1cm5bMl19fSkpfSkpfTtlLnByb3RvdHlwZS5pbml0Q2FtZXJhPWZ1bmN0aW9uKGUpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0LGk7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKG4pe3N3aXRjaChuLmxhYmVsKXtjYXNlIDA6aWYoIWUpe2U9dGhpcy5kZWZhdWx0Q29uc3RyYWludHN9bi5sYWJlbD0xO2Nhc2UgMTpuLnRyeXMucHVzaChbMSwzLCw0XSk7cmV0dXJuWzQsbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoT2JqZWN0LmFzc2lnbih7dmlkZW86dHJ1ZSxhdWRpbzpmYWxzZX0sZSkpXTtjYXNlIDI6dD1uLnNlbnQoKTt0aGlzLmluaXRTdHJlYW0odCk7cmV0dXJuWzMsNF07Y2FzZSAzOmk9bi5zZW50KCk7dGhpcy5kZXZpY2VFcnJvcj1pO3RoaXMuaGFuZGxlTm9EZXZpY2VFcnJvciYmdGhpcy5oYW5kbGVOb0RldmljZUVycm9yKGkpO3JldHVyblszLDRdO2Nhc2UgNDpyZXR1cm5bMl19fSkpfSkpfTtlLnByb3RvdHlwZS5pbml0U3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnRoaXMuc3RyZWFtPWU7dGhpcy52aWRlb0VsZW1lbnQuc3JjT2JqZWN0PWU7aWYoIXRoaXMuaGFzSW1hZ2VDYXB0dXJlKCkpcmV0dXJuWzMsMl07dGhpcy5pbWFnZUNhcHR1cmU9bmV3IHdpbmRvdy5JbWFnZUNhcHR1cmUoZS5nZXRWaWRlb1RyYWNrcygpWzBdKTtyZXR1cm5bNCx0aGlzLmluaXRQaG90b0NhcGFiaWxpdGllcyh0aGlzLmltYWdlQ2FwdHVyZSldO2Nhc2UgMTp0LnNlbnQoKTtyZXR1cm5bMywzXTtjYXNlIDI6dGhpcy5kZXZpY2VFcnJvcj1cIk5vIGltYWdlIGNhcHR1cmVcIjt0aGlzLmhhbmRsZU5vRGV2aWNlRXJyb3ImJnRoaXMuaGFuZGxlTm9EZXZpY2VFcnJvcigpO3QubGFiZWw9MztjYXNlIDM6Zm9yY2VVcGRhdGUodGhpcy5lbCk7cmV0dXJuWzJdfX0pKX0pKX07ZS5wcm90b3R5cGUuaW5pdFBob3RvQ2FwYWJpbGl0aWVzPWZ1bmN0aW9uKGUpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0O3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihpKXtzd2l0Y2goaS5sYWJlbCl7Y2FzZSAwOnJldHVybls0LGUuZ2V0UGhvdG9DYXBhYmlsaXRpZXMoKV07Y2FzZSAxOnQ9aS5zZW50KCk7aWYodC5maWxsTGlnaHRNb2RlJiZ0LmZpbGxMaWdodE1vZGUubGVuZ3RoPjEpe3RoaXMuZmxhc2hNb2Rlcz10LmZpbGxMaWdodE1vZGUubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZX0pKTtpZih0aGlzLmZsYXNoTW9kZSl7dGhpcy5mbGFzaE1vZGU9dGhpcy5mbGFzaE1vZGVzW3RoaXMuZmxhc2hNb2Rlcy5pbmRleE9mKHRoaXMuZmxhc2hNb2RlKV18fFwib2ZmXCI7dGhpcy5mbGFzaEluZGV4PXRoaXMuZmxhc2hNb2Rlcy5pbmRleE9mKHRoaXMuZmxhc2hNb2RlKXx8MH1lbHNle3RoaXMuZmxhc2hJbmRleD0wfX1yZXR1cm5bMl19fSkpfSkpfTtlLnByb3RvdHlwZS5zdG9wU3RyZWFtPWZ1bmN0aW9uKCl7aWYodGhpcy52aWRlb0VsZW1lbnQpe3RoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdD1udWxsfXRoaXMuc3RyZWFtJiZ0aGlzLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zdG9wKCl9KSl9O2UucHJvdG90eXBlLmNhcHR1cmU9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSx0O3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihpKXtzd2l0Y2goaS5sYWJlbCl7Y2FzZSAwOmlmKCF0aGlzLmhhc0ltYWdlQ2FwdHVyZSgpKXJldHVyblszLDVdO2kubGFiZWw9MTtjYXNlIDE6aS50cnlzLnB1c2goWzEsNCwsNV0pO3JldHVybls0LHRoaXMuaW1hZ2VDYXB0dXJlLnRha2VQaG90byh7ZmlsbExpZ2h0TW9kZTp0aGlzLmZsYXNoTW9kZXMubGVuZ3RoPjE/dGhpcy5mbGFzaE1vZGU6dW5kZWZpbmVkfSldO2Nhc2UgMjplPWkuc2VudCgpO3JldHVybls0LHRoaXMuZmxhc2hTY3JlZW4oKV07Y2FzZSAzOmkuc2VudCgpO3RoaXMucHJvbXB0QWNjZXB0KGUpO3JldHVyblszLDVdO2Nhc2UgNDp0PWkuc2VudCgpO2NvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gdGFrZSBwaG90byFcIix0KTtyZXR1cm5bMyw1XTtjYXNlIDU6dGhpcy5zdG9wU3RyZWFtKCk7cmV0dXJuWzJdfX0pKX0pKX07ZS5wcm90b3R5cGUucHJvbXB0QWNjZXB0PWZ1bmN0aW9uKGUpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0O3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihpKXtzd2l0Y2goaS5sYWJlbCl7Y2FzZSAwOnRoaXMucGhvdG89ZTtyZXR1cm5bNCx0aGlzLmdldE9yaWVudGF0aW9uKGUpXTtjYXNlIDE6dD1pLnNlbnQoKTtjb25zb2xlLmRlYnVnKFwiR290IG9yaWVudGF0aW9uXCIsdCk7dGhpcy5waG90b09yaWVudGF0aW9uPXQ7aWYodCl7c3dpdGNoKHQpe2Nhc2UgMTpjYXNlIDI6dGhpcy5yb3RhdGlvbj0wO2JyZWFrO2Nhc2UgMzpjYXNlIDQ6dGhpcy5yb3RhdGlvbj0xODA7YnJlYWs7Y2FzZSA1OmNhc2UgNjp0aGlzLnJvdGF0aW9uPTkwO2JyZWFrO2Nhc2UgNzpjYXNlIDg6dGhpcy5yb3RhdGlvbj0yNzA7YnJlYWt9fXRoaXMucGhvdG9TcmM9VVJMLmNyZWF0ZU9iamVjdFVSTChlKTtyZXR1cm5bMl19fSkpfSkpfTtlLnByb3RvdHlwZS5nZXRPcmllbnRhdGlvbj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3ZhciBpPW5ldyBGaWxlUmVhZGVyO2kub25sb2FkPWZ1bmN0aW9uKGUpe3ZhciBpPW5ldyBEYXRhVmlldyhlLnRhcmdldC5yZXN1bHQpO2lmKGkuZ2V0VWludDE2KDAsZmFsc2UpIT09NjU0OTYpe3JldHVybiB0KC0yKX12YXIgbj1pLmJ5dGVMZW5ndGg7dmFyIHI9Mjt3aGlsZShyPG4pe3ZhciBhPWkuZ2V0VWludDE2KHIsZmFsc2UpO3IrPTI7aWYoYT09PTY1NTA1KXtpZihpLmdldFVpbnQzMihyKz0yLGZhbHNlKSE9PTExNjU1MTkyMDYpe3JldHVybiB0KC0xKX12YXIgbz1pLmdldFVpbnQxNihyKz02LGZhbHNlKT09PTE4NzYxO3IrPWkuZ2V0VWludDMyKHIrNCxvKTt2YXIgcz1pLmdldFVpbnQxNihyLG8pO3IrPTI7Zm9yKHZhciBjPTA7YzxzO2MrKyl7aWYoaS5nZXRVaW50MTYocitjKjEyLG8pPT09Mjc0KXtyZXR1cm4gdChpLmdldFVpbnQxNihyK2MqMTIrOCxvKSl9fX1lbHNlIGlmKChhJjY1MjgwKSE9PTY1MjgwKXticmVha31lbHNle3IrPWkuZ2V0VWludDE2KHIsZmFsc2UpfX1yZXR1cm4gdCgtMSl9O2kucmVhZEFzQXJyYXlCdWZmZXIoZS5zbGljZSgwLDY0KjEwMjQpKX0pKX07ZS5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKCl7dGhpcy5zdG9wU3RyZWFtKCk7dmFyIGU9dGhpcy5zdHJlYW0mJnRoaXMuc3RyZWFtLmdldFRyYWNrcygpWzBdO2lmKCFlKXtyZXR1cm59dmFyIHQ9ZS5nZXRDb25zdHJhaW50cygpO3ZhciBpPXQuZmFjaW5nTW9kZTtpZighaSl7dmFyIG49ZS5nZXRDYXBhYmlsaXRpZXMoKTtpZihuLmZhY2luZ01vZGUpe2k9bi5mYWNpbmdNb2RlWzBdfX1pZihpPT09XCJlbnZpcm9ubWVudFwiKXt0aGlzLmluaXRDYW1lcmEoe3ZpZGVvOntmYWNpbmdNb2RlOlwidXNlclwifX0pfWVsc2V7dGhpcy5pbml0Q2FtZXJhKHt2aWRlbzp7ZmFjaW5nTW9kZTpcImVudmlyb25tZW50XCJ9fSl9fTtlLnByb3RvdHlwZS5zZXRGbGFzaE1vZGU9ZnVuY3Rpb24oZSl7Y29uc29sZS5kZWJ1ZyhcIk5ldyBmbGFzaCBtb2RlOiBcIixlKTt0aGlzLmZsYXNoTW9kZT1lfTtlLnByb3RvdHlwZS5jeWNsZUZsYXNoPWZ1bmN0aW9uKCl7aWYodGhpcy5mbGFzaE1vZGVzLmxlbmd0aD4wKXt0aGlzLmZsYXNoSW5kZXg9KHRoaXMuZmxhc2hJbmRleCsxKSV0aGlzLmZsYXNoTW9kZXMubGVuZ3RoO3RoaXMuc2V0Rmxhc2hNb2RlKHRoaXMuZmxhc2hNb2Rlc1t0aGlzLmZsYXNoSW5kZXhdKX19O2UucHJvdG90eXBlLmZsYXNoU2NyZWVuPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24odCl7cmV0dXJuWzIsbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsaSl7ZS5zaG93U2h1dHRlck92ZXJsYXk9dHJ1ZTtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2Uuc2hvd1NodXR0ZXJPdmVybGF5PWZhbHNlO3QoKX0pLDEwMCl9KSldfSkpfSkpfTtlLnByb3RvdHlwZS5pY29uRXhpdD1mdW5jdGlvbigpe3JldHVyblwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDUxMiA1MTInIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDZyBpZD0nSWNvbl81XyclM0UlM0NnJTNFJTNDcGF0aCBmaWxsPSclMjNGRkZGRkYnIGQ9J000MDIuMiwxMzRMMzc4LDEwOS44Yy0xLjYtMS42LTQuMS0xLjYtNS43LDBMMjU4LjgsMjIzLjRjLTEuNiwxLjYtNC4xLDEuNi01LjcsMEwxMzkuNiwxMDkuOCBjLTEuNi0xLjYtNC4xLTEuNi01LjcsMEwxMDkuOCwxMzRjLTEuNiwxLjYtMS42LDQuMSwwLDUuN2wxMTMuNSwxMTMuNWMxLjYsMS42LDEuNiw0LjEsMCw1LjdMMTA5LjgsMzcyLjRjLTEuNiwxLjYtMS42LDQuMSwwLDUuNyBsMjQuMSwyNC4xYzEuNiwxLjYsNC4xLDEuNiw1LjcsMGwxMTMuNS0xMTMuNWMxLjYtMS42LDQuMS0xLjYsNS43LDBsMTEzLjUsMTEzLjVjMS42LDEuNiw0LjEsMS42LDUuNywwbDI0LjEtMjQuMSBjMS42LTEuNiwxLjYtNC4xLDAtNS43TDI4OC42LDI1OC44Yy0xLjYtMS42LTEuNi00LjEsMC01LjdsMTEzLjUtMTEzLjVDNDAzLjcsMTM4LjEsNDAzLjcsMTM1LjUsNDAyLjIsMTM0eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIn07ZS5wcm90b3R5cGUuaWNvblBob3Rvcz1mdW5jdGlvbigpe3JldHVybiBoKFwic3ZnXCIse3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix3aWR0aDpcIjUxMlwiLGhlaWdodDpcIjUxMlwiLHZpZXdCb3g6XCIwIDAgNTEyIDUxMlwifSxoKFwicGF0aFwiLHtkOlwiTTQ1MC4yOSwxMTJIMTQyYy0zNCwwLTYyLDI3LjUxLTYyLDYxLjMzVjQxOC42N0M4MCw0NTIuNDksMTA4LDQ4MCwxNDIsNDgwSDQ1MGMzNCwwLDYyLTI2LjE4LDYyLTYwVjE3My4zM0M1MTIsMTM5LjUxLDQ4NC4zMiwxMTIsNDUwLjI5LDExMlptLTc3LjE1LDYxLjM0YTQ2LDQ2LDAsMSwxLTQ2LjI4LDQ2QTQ2LjE5LDQ2LjE5LDAsMCwxLDM3My4xNCwxNzMuMzNabS0yMzEuNTUsMjc2Yy0xNywwLTI5Ljg2LTEzLjc1LTI5Ljg2LTMwLjY2VjM1My44NWw5MC40Ni04MC43OWE0Ni41NCw0Ni41NCwwLDAsMSw2My40NCwxLjgzTDMyOC4yNywzMzdsLTExMywxMTIuMzNaTTQ4MCw0MTguNjdhMzAuNjcsMzAuNjcsMCwwLDEtMzAuNzEsMzAuNjZIMjU5TDM3Ni4wOCwzMzNhNDYuMjQsNDYuMjQsMCwwLDEsNTkuNDQtLjE2TDQ4MCwzNzAuNTlaXCJ9KSxoKFwicGF0aFwiLHtkOlwiTTM4NCwzMkg2NEE2NCw2NCwwLDAsMCwwLDk2VjM1MmE2NC4xMSw2NC4xMSwwLDAsMCw0OCw2MlYxNTJhNzIsNzIsMCwwLDEsNzItNzJINDQ2QTY0LjExLDY0LjExLDAsMCwwLDM4NCwzMlpcIn0pKX07ZS5wcm90b3R5cGUuaWNvbkNvbmZpcm09ZnVuY3Rpb24oKXtyZXR1cm5cImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCA1MTIgNTEyJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMyQ0Q4NjUnIGN4PScyNTYnIGN5PScyNTYnIHI9JzI1NicvJTNFJTNDZyBpZD0nSWNvbl8xXyclM0UlM0NnJTNFJTNDZyUzRSUzQ3BhdGggZmlsbD0nJTIzRkZGRkZGJyBkPSdNMjA4LDMwMS40bC01NS40LTU1LjVjLTEuNS0xLjUtNC0xLjYtNS42LTAuMWwtMjMuNCwyMi4zYy0xLjYsMS42LTEuNyw0LjEtMC4xLDUuN2w4MS42LDgxLjQgYzMuMSwzLjEsOC4yLDMuMSwxMS4zLDBsMTcxLjgtMTcxLjdjMS42LTEuNiwxLjYtNC4yLTAuMS01LjdsLTIzLjQtMjIuM2MtMS42LTEuNS00LjEtMS41LTUuNiwwLjFMMjEzLjcsMzAxLjQgQzIxMi4xLDMwMywyMDkuNiwzMDMsMjA4LDMwMS40eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwifTtlLnByb3RvdHlwZS5pY29uUmV2ZXJzZUNhbWVyYT1mdW5jdGlvbigpe3JldHVyblwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDUxMiA1MTInIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDZyUzRSUzQ3BhdGggZmlsbD0nJTIzRkZGRkZGJyBkPSdNMzUyLDBIMTYwQzcyLDAsMCw3MiwwLDE2MHYxOTJjMCw4OCw3MiwxNjAsMTYwLDE2MGgxOTJjODgsMCwxNjAtNzIsMTYwLTE2MFYxNjBDNTEyLDcyLDQ0MCwwLDM1MiwweiBNMzU2LjcsMzY1LjhsLTMuNywzLjNjLTI3LDIzLjItNjEuNCwzNS45LTk2LjgsMzUuOWMtNzIuNCwwLTEzNS44LTU0LjctMTQ3LTEyNS42Yy0wLjMtMS45LTItMy4zLTMuOS0zLjNINjQgYy0zLjMsMC01LjItMy44LTMuMi02LjRsNjEuMS04MS40YzEuNi0yLjEsNC43LTIuMSw2LjQtMC4xbDYzLjMsODEuNGMyLDIuNiwwLjIsNi41LTMuMiw2LjVoLTQwLjZjLTIuNSwwLTQuNSwyLjQtMy45LDQuOCBjMTEuNSw1MS41LDU5LjIsOTAuNiwxMTIuNCw5MC42YzI2LjQsMCw1MS44LTkuNyw3My43LTI3LjlsMy4xLTIuNWMxLjYtMS4zLDMuOS0xLjEsNS4zLDAuM2wxOC41LDE4LjYgQzM1OC41LDM2MS42LDM1OC40LDM2NC4zLDM1Ni43LDM2NS44eiBNNDUxLjQsMjQ1LjZsLTYxLDgzLjVjLTEuNiwyLjItNC44LDIuMi02LjQsMC4xbC02My4zLTgzLjNjLTItMi42LTAuMS02LjQsMy4yLTYuNGg0MC44IGMyLjUsMCw0LjQtMi4zLDMuOS00LjhjLTUuMS0yNC4yLTE3LjgtNDYuNS0zNi41LTYzLjdjLTIxLjItMTkuNC00OC4yLTMwLjEtNzYtMzAuMWMtMjYuNSwwLTUyLjYsOS43LTczLjcsMjcuM2wtMy4xLDIuNSBjLTEuNiwxLjMtMy45LDEuMi01LjQtMC4zbC0xOC41LTE4LjVjLTEuNi0xLjYtMS41LTQuMywwLjItNS45bDMuNS0zLjFjMjctMjMuMiw2MS40LTM1LjksOTYuOC0zNS45YzM4LDAsNzMuOSwxMy43LDEwMS4yLDM4LjcgYzIzLjIsMjEuMSw0MC4zLDU1LjIsNDUuNyw5MC4xYzAuMywxLjksMS45LDMuNCwzLjksMy40aDQxLjNDNDUxLjQsMjM5LjIsNDUzLjMsMjQzLDQ1MS40LDI0NS42eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCJ9O2UucHJvdG90eXBlLmljb25SZXRha2U9ZnVuY3Rpb24oKXtyZXR1cm5cImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCA1MTIgNTEyJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ2NpcmNsZSBmaWxsPSclMjM3MjdBODcnIGN4PScyNTYnIGN5PScyNTYnIHI9JzI1NicvJTNFJTNDZyBpZD0nSWNvbl81XyclM0UlM0NnJTNFJTNDcGF0aCBmaWxsPSclMjNGRkZGRkYnIGQ9J00zOTQuMiwxNDJMMzcwLDExNy44Yy0xLjYtMS42LTQuMS0xLjYtNS43LDBMMjU4LjgsMjIzLjRjLTEuNiwxLjYtNC4xLDEuNi01LjcsMEwxNDcuNiwxMTcuOCBjLTEuNi0xLjYtNC4xLTEuNi01LjcsMEwxMTcuOCwxNDJjLTEuNiwxLjYtMS42LDQuMSwwLDUuN2wxMDUuNSwxMDUuNWMxLjYsMS42LDEuNiw0LjEsMCw1LjdMMTE3LjgsMzY0LjRjLTEuNiwxLjYtMS42LDQuMSwwLDUuNyBsMjQuMSwyNC4xYzEuNiwxLjYsNC4xLDEuNiw1LjcsMGwxMDUuNS0xMDUuNWMxLjYtMS42LDQuMS0xLjYsNS43LDBsMTA1LjUsMTA1LjVjMS42LDEuNiw0LjEsMS42LDUuNywwbDI0LjEtMjQuMSBjMS42LTEuNiwxLjYtNC4xLDAtNS43TDI4OC42LDI1OC44Yy0xLjYtMS42LTEuNi00LjEsMC01LjdsMTA1LjUtMTA1LjVDMzk1LjcsMTQ2LjEsMzk1LjcsMTQzLjUsMzk0LjIsMTQyeicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIn07ZS5wcm90b3R5cGUuaWNvbkZsYXNoT2ZmPWZ1bmN0aW9uKCl7cmV0dXJuXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOiUyM0ZGRkZGRjslN0QlMEElM0Mvc3R5bGUlM0UlM0NnJTNFJTNDcGF0aCBjbGFzcz0nc3QwJyBkPSdNNDk4LDQ4My43TDQyLjMsMjhMMTQsNTYuNGwxNDkuOCwxNDkuOEw5MSwyOTMuOGMtMi41LDMtMC4xLDcuMiwzLjksNy4yaDE0My45YzEuNiwwLDIuNywxLjMsMi40LDIuNyBMMTk3LjYsNTA3Yy0xLDQuNCw1LjgsNi45LDguOSwzLjJsMTE4LjYtMTQyLjhMNDY5LjYsNTEyTDQ5OCw0ODMuN3onLyUzRSUzQ3BhdGggY2xhc3M9J3N0MCcgZD0nTTQ0OSwyMTguMmMyLjUtMywwLjEtNy4yLTMuOS03LjJIMzAxLjJjLTEuNiwwLTIuNy0xLjMtMi40LTIuN0wzNDIuNCw1YzEtNC40LTUuOC02LjktOC45LTMuMkwyMTQuOSwxNDQuNiBsMTYxLjMsMTYxLjNMNDQ5LDIxOC4yeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCJ9O2UucHJvdG90eXBlLmljb25GbGFzaE9uPWZ1bmN0aW9uKCl7cmV0dXJuXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOiUyM0ZGRkZGRjslN0QlMEElM0Mvc3R5bGUlM0UlM0NwYXRoIGNsYXNzPSdzdDAnIGQ9J00yODcuMiwyMTFjLTEuNiwwLTIuNy0xLjMtMi40LTIuN0wzMjguNCw1YzEtNC40LTUuOC02LjktOC45LTMuMkw3NywyOTMuOGMtMi41LDMtMC4xLDcuMiwzLjksNy4yaDE0My45IGMxLjYsMCwyLjcsMS4zLDIuNCwyLjdMMTgzLjYsNTA3Yy0xLDQuNCw1LjgsNi45LDguOSwzLjJsMjQyLjUtMjkyYzIuNS0zLDAuMS03LjItMy45LTcuMkwyODcuMiwyMTFMMjg3LjIsMjExeicvJTNFJTNDL3N2ZyUzRVwifTtlLnByb3RvdHlwZS5pY29uRmxhc2hBdXRvPWZ1bmN0aW9uKCl7cmV0dXJuXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOiUyM0ZGRkZGRjslN0QlMEElM0Mvc3R5bGUlM0UlM0NwYXRoIGNsYXNzPSdzdDAnIGQ9J00yODcuMiwyMTFjLTEuNiwwLTIuNy0xLjMtMi40LTIuN0wzMjguNCw1YzEtNC40LTUuOC02LjktOC45LTMuMkw3NywyOTMuOGMtMi41LDMtMC4xLDcuMiwzLjksNy4yaDE0My45IGMxLjYsMCwyLjcsMS4zLDIuNCwyLjdMMTgzLjYsNTA3Yy0xLDQuNCw1LjgsNi45LDguOSwzLjJsMjQyLjUtMjkyYzIuNS0zLDAuMS03LjItMy45LTcuMkwyODcuMiwyMTFMMjg3LjIsMjExeicvJTNFJTNDZyUzRSUzQ3BhdGggY2xhc3M9J3N0MCcgZD0nTTMyMS4zLDE4Nmw3NC0xODZINDM4bDc0LDE4NmgtNDMuNWwtMTEuOS0zMi41aC04MC45bC0xMiwzMi41SDMyMS4zeiBNNDE1LjgsNDcuOWwtMjcuMiw3MC43aDU0LjlsLTI3LjItNzAuNyBINDE1Ljh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIn07ZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt2YXIgdD17fTtyZXR1cm4gaChcImRpdlwiLHtjbGFzczpcImNhbWVyYS13cmFwcGVyXCJ9LGgoXCJkaXZcIix7Y2xhc3M6XCJjYW1lcmEtaGVhZGVyXCJ9LGgoXCJzZWN0aW9uXCIse2NsYXNzOlwiaXRlbXNcIn0saChcImRpdlwiLHtjbGFzczpcIml0ZW0gY2xvc2VcIixvbkNsaWNrOmZ1bmN0aW9uKHQpe3JldHVybiBlLmhhbmRsZUNsb3NlKHQpfX0saChcImltZ1wiLHtzcmM6dGhpcy5pY29uRXhpdCgpfSkpLGgoXCJkaXZcIix7Y2xhc3M6XCJpdGVtIGZsYXNoXCIsb25DbGljazpmdW5jdGlvbih0KXtyZXR1cm4gZS5oYW5kbGVGbGFzaENsaWNrKHQpfX0sdGhpcy5mbGFzaE1vZGVzLmxlbmd0aD4wJiZoKFwiZGl2XCIsbnVsbCx0aGlzLmZsYXNoTW9kZT09XCJvZmZcIj9oKFwiaW1nXCIse3NyYzp0aGlzLmljb25GbGFzaE9mZigpfSk6XCJcIix0aGlzLmZsYXNoTW9kZT09XCJhdXRvXCI/aChcImltZ1wiLHtzcmM6dGhpcy5pY29uRmxhc2hBdXRvKCl9KTpcIlwiLHRoaXMuZmxhc2hNb2RlPT1cImZsYXNoXCI/aChcImltZ1wiLHtzcmM6dGhpcy5pY29uRmxhc2hPbigpfSk6XCJcIikpKSksKHRoaXMuaGFzQ2FtZXJhPT09ZmFsc2V8fCEhdGhpcy5kZXZpY2VFcnJvcikmJmgoXCJkaXZcIix7Y2xhc3M6XCJuby1kZXZpY2VcIn0saChcImgyXCIsbnVsbCx0aGlzLm5vRGV2aWNlc1RleHQpLGgoXCJsYWJlbFwiLHtodG1sRm9yOlwiX3B3YS1lbGVtZW50cy1jYW1lcmEtaW5wdXRcIn0sdGhpcy5ub0RldmljZXNCdXR0b25UZXh0KSxoKFwiaW5wdXRcIix7dHlwZTpcImZpbGVcIixpZDpcIl9wd2EtZWxlbWVudHMtY2FtZXJhLWlucHV0XCIsb25DaGFuZ2U6dGhpcy5oYW5kbGVGaWxlSW5wdXRDaGFuZ2UsYWNjZXB0OlwiaW1hZ2UvKlwiLGNsYXNzOlwic2VsZWN0LWZpbGUtYnV0dG9uXCJ9KSksdGhpcy5waG90b1NyYz9oKFwiZGl2XCIse2NsYXNzOlwiYWNjZXB0XCJ9LGgoXCJkaXZcIix7Y2xhc3M6XCJhY2NlcHQtaW1hZ2VcIixzdHlsZTpPYmplY3QuYXNzaWduKHtiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoXCIuY29uY2F0KHRoaXMucGhvdG9TcmMsXCIpXCIpfSx0KX0pKTpoKFwiZGl2XCIse2NsYXNzOlwiY2FtZXJhLXZpZGVvXCJ9LHRoaXMuc2hvd1NodXR0ZXJPdmVybGF5JiZoKFwiZGl2XCIse2NsYXNzOlwic2h1dHRlci1vdmVybGF5XCJ9KSx0aGlzLmhhc0ltYWdlQ2FwdHVyZSgpP2goXCJ2aWRlb1wiLHtyZWY6ZnVuY3Rpb24odCl7cmV0dXJuIGUudmlkZW9FbGVtZW50PXR9LG9uTG9hZGVkTWV0YURhdGE6dGhpcy5oYW5kbGVWaWRlb01ldGFkYXRhLGF1dG9wbGF5OnRydWUscGxheXNpbmxpbmU6dHJ1ZX0pOmgoXCJjYW52YXNcIix7cmVmOmZ1bmN0aW9uKHQpe3JldHVybiBlLmNhbnZhc0VsZW1lbnQ9dH0sd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwifSksaChcImNhbnZhc1wiLHtjbGFzczpcIm9mZnNjcmVlbi1pbWFnZS1yZW5kZXJcIixyZWY6ZnVuY3Rpb24odCl7cmV0dXJuIGUub2Zmc2NyZWVuQ2FudmFzPXR9LHdpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIn0pKSx0aGlzLmhhc0NhbWVyYSYmaChcImRpdlwiLHtjbGFzczpcImNhbWVyYS1mb290ZXJcIn0sIXRoaXMucGhvdG8/W2goXCJkaXZcIix7Y2xhc3M6XCJwaWNrLWltYWdlXCIsb25DbGljazp0aGlzLmhhbmRsZVBpY2tGaWxlfSxoKFwibGFiZWxcIix7aHRtbEZvcjpcIl9wd2EtZWxlbWVudHMtZmlsZS1waWNrXCJ9LHRoaXMuaWNvblBob3RvcygpKSxoKFwiaW5wdXRcIix7dHlwZTpcImZpbGVcIixpZDpcIl9wd2EtZWxlbWVudHMtZmlsZS1waWNrXCIsb25DaGFuZ2U6dGhpcy5oYW5kbGVGaWxlSW5wdXRDaGFuZ2UsYWNjZXB0OlwiaW1hZ2UvKlwiLGNsYXNzOlwicGljay1pbWFnZS1idXR0b25cIn0pKSxoKFwiZGl2XCIse2NsYXNzOlwic2h1dHRlclwiLG9uQ2xpY2s6dGhpcy5oYW5kbGVTaHV0dGVyQ2xpY2t9LGgoXCJkaXZcIix7Y2xhc3M6XCJzaHV0dGVyLWJ1dHRvblwifSkpLGgoXCJkaXZcIix7Y2xhc3M6XCJyb3RhdGVcIixvbkNsaWNrOnRoaXMuaGFuZGxlUm90YXRlQ2xpY2t9LGgoXCJpbWdcIix7c3JjOnRoaXMuaWNvblJldmVyc2VDYW1lcmEoKX0pKV06aChcInNlY3Rpb25cIix7Y2xhc3M6XCJpdGVtc1wifSxoKFwiZGl2XCIse2NsYXNzOlwiaXRlbSBhY2NlcHQtY2FuY2VsXCIsb25DbGljazpmdW5jdGlvbih0KXtyZXR1cm4gZS5oYW5kbGVDYW5jZWxQaG90byh0KX19LGgoXCJpbWdcIix7c3JjOnRoaXMuaWNvblJldGFrZSgpfSkpLGgoXCJkaXZcIix7Y2xhc3M6XCJpdGVtIGFjY2VwdC11c2VcIixvbkNsaWNrOmZ1bmN0aW9uKHQpe3JldHVybiBlLmhhbmRsZUFjY2VwdFBob3RvKHQpfX0saChcImltZ1wiLHtzcmM6dGhpcy5pY29uQ29uZmlybSgpfSkpKSkpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImFzc2V0c0RpcnNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuW1wiaWNvbnNcIl19LGVudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWV9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJlbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0RWxlbWVudCh0aGlzKX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO3JldHVybiBlfSgpO0NhbWVyYVBXQS5zdHlsZT1jYW1lcmFDc3M7ZXhwb3J0e0NhbWVyYVBXQSBhcyBwd2FfY2FtZXJhfTsiXSwibmFtZXMiOlsidGhpcyIsImUiLCJ0IiwiaSIsInMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxZQUFVQSxjQUFNQSxXQUFLLGFBQVcsU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBUyxFQUFFQyxJQUFFO0FBQUMsV0FBT0EsY0FBYSxJQUFFQSxLQUFFLElBQUksRUFBRyxTQUFTQyxJQUFFO0FBQUMsTUFBQUEsR0FBRUQsRUFBQztBQUFBLElBQUM7RUFBRztBQUFDLFNBQU8sS0FBSSxNQUFJLElBQUUsVUFBVyxTQUFTRSxJQUFFLEdBQUU7QUFBQyxhQUFTLEVBQUVGLElBQUU7QUFBQyxVQUFHO0FBQUMsVUFBRSxFQUFFLEtBQUtBLEVBQUMsQ0FBQztBQUFBLE1BQUMsU0FBT0EsSUFBTjtBQUFTLFVBQUVBLEVBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsRUFBRUEsSUFBRTtBQUFDLFVBQUc7QUFBQyxVQUFFLEVBQUUsU0FBU0EsRUFBQyxDQUFDO0FBQUEsTUFBQyxTQUFPQSxJQUFOO0FBQVMsVUFBRUEsRUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFQSxJQUFFO0FBQUMsTUFBQUEsR0FBRSxPQUFLRSxHQUFFRixHQUFFLEtBQUssSUFBRSxFQUFFQSxHQUFFLEtBQUssRUFBRSxLQUFLLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxPQUFHLElBQUUsRUFBRSxNQUFNLEdBQUUsS0FBRyxFQUFFLEdBQUcsS0FBTSxDQUFBO0FBQUEsRUFBQyxDQUFHO0FBQUE7QUFBRSxJQUFJLGNBQVlELGNBQU1BLFdBQUssZUFBYSxTQUFTLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFD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QUFFLFlBQUdFLEdBQUUsVUFBVSxHQUFFLEtBQUssTUFBSSxPQUFNO0FBQUMsaUJBQU8sRUFBRSxFQUFFO0FBQUEsUUFBQztBQUFDLFlBQUksSUFBRUEsR0FBRTtBQUFXLFlBQUksSUFBRTtBQUFFLGVBQU0sSUFBRSxHQUFFO0FBQUMsY0FBSSxJQUFFQSxHQUFFLFVBQVUsR0FBRSxLQUFLO0FBQUUsZUFBRztBQUFFLGNBQUcsTUFBSSxPQUFNO0FBQUMsZ0JBQUdBLEdBQUUsVUFBVSxLQUFHLEdBQUUsS0FBSyxNQUFJLFlBQVc7QUFBQyxxQkFBTyxFQUFFLEVBQUU7QUFBQSxZQUFDO0FBQUMsZ0JBQUksSUFBRUEsR0FBRSxVQUFVLEtBQUcsR0FBRSxLQUFLLE1BQUk7QUFBTSxpQkFBR0EsR0FBRSxVQUFVLElBQUUsR0FBRSxDQUFDO0FBQUUsZ0JBQUksSUFBRUEsR0FBRSxVQUFVLEdBQUUsQ0FBQztBQUFFLGlCQUFHO0FBQUUscUJBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFJO0FBQUMsa0JBQUdBLEdBQUUsVUFBVSxJQUFFLElBQUUsSUFBRyxDQUFDLE1BQUksS0FBSTtBQUFDLHVCQUFPLEVBQUVBLEdBQUUsVUFBVSxJQUFFLElBQUUsS0FBRyxHQUFFLENBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQyxZQUFVLElBQUUsV0FBUyxPQUFNO0FBQUM7QUFBQSxVQUFLLE9BQUs7QUFBQyxpQkFBR0EsR0FBRSxVQUFVLEdBQUUsS0FBSztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUMsZUFBTyxFQUFFLEVBQUU7QUFBQSxNQUFDO0FBQUUsUUFBRSxrQkFBa0JGLEdBQUUsTUFBTSxHQUFFLEtBQUcsSUFBSSxDQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBRTtBQUFFLElBQUUsVUFBVSxTQUFPLFdBQVU7QUFBQyxTQUFLLFdBQVU7QUFBRyxRQUFJQSxLQUFFLEtBQUssVUFBUSxLQUFLLE9BQU8sVUFBVyxFQUFDO0FBQUcsUUFBRyxDQUFDQSxJQUFFO0FBQUM7QUFBQSxJQUFNO0FBQUMsUUFBSSxJQUFFQSxHQUFFLGVBQWdCO0FBQUMsUUFBSSxJQUFFLEVBQUU7QUFBVyxRQUFHLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRUEsR0FBRSxnQkFBZTtBQUFHLFVBQUcsRUFBRSxZQUFXO0FBQUMsWUFBRSxFQUFFLFdBQVc7QUFBQSxNQUFFO0FBQUEsSUFBQztBQUFDLFFBQUcsTUFBSSxlQUFjO0FBQUMsV0FBSyxXQUFXLEVBQUMsT0FBTSxFQUFDLFlBQVcsT0FBTSxFQUFDLENBQUM7QUFBQSxJQUFDLE9BQUs7QUFBQyxXQUFLLFdBQVcsRUFBQyxPQUFNLEVBQUMsWUFBVyxjQUFhLEVBQUMsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFVLGVBQWEsU0FBU0EsSUFBRTtBQUFDLFlBQVEsTUFBTSxvQkFBbUJBLEVBQUM7QUFBRSxTQUFLLFlBQVVBO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxhQUFXLFdBQVU7QUFBQyxRQUFHLEtBQUssV0FBVyxTQUFPLEdBQUU7QUFBQyxXQUFLLGNBQVksS0FBSyxhQUFXLEtBQUcsS0FBSyxXQUFXO0FBQU8sV0FBSyxhQUFhLEtBQUssV0FBVyxLQUFLLFdBQVc7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxjQUFZLFdBQVU7QUFBQyxXQUFPLFVBQVUsTUFBSyxRQUFPLFFBQVEsV0FBVTtBQUFDLFVBQUlBLEtBQUU7QUFBSyxhQUFPLFlBQVksTUFBTSxTQUFTLEdBQUU7QUFBQyxlQUFNLENBQUMsR0FBRSxJQUFJLFFBQVMsU0FBU0MsSUFBRSxHQUFFO0FBQUMsVUFBQUQsR0FBRSxxQkFBbUI7QUFBSyxxQkFBWSxXQUFVO0FBQUMsWUFBQUEsR0FBRSxxQkFBbUI7QUFBTSxZQUFBQztVQUFHLEdBQUcsR0FBRztBQUFBLFFBQUMsQ0FBQyxDQUFFO0FBQUEsTUFBQyxDQUFHO0FBQUEsSUFBQSxDQUFHO0FBQUEsRUFBQTtBQUFFLElBQUUsVUFBVSxXQUFTLFdBQVU7QUFBQyxXQUFNO0FBQUEsRUFBNHVCO0FBQUUsSUFBRSxVQUFVLGFBQVcsV0FBVTtBQUFDLFdBQU8sRUFBRSxPQUFNLEVBQUMsT0FBTSw4QkFBNkIsT0FBTSxPQUFNLFFBQU8sT0FBTSxTQUFRLGNBQWEsR0FBRSxFQUFFLFFBQU8sRUFBQyxHQUFFLGlhQUFnYSxDQUFDLEdBQUUsRUFBRSxRQUFPLEVBQUMsR0FBRSw4R0FBNkcsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxjQUFZLFdBQVU7QUFBQyxXQUFNO0FBQUEsRUFBeW1CO0FBQUUsSUFBRSxVQUFVLG9CQUFrQixXQUFVO0FBQUMsV0FBTTtBQUFBLEVBQW9wQztBQUFFLElBQUUsVUFBVSxhQUFXLFdBQVU7QUFBQyxXQUFNO0FBQUEsRUFBb3lCO0FBQUUsSUFBRSxVQUFVLGVBQWEsV0FBVTtBQUFDLFdBQU07QUFBQSxFQUFzcUI7QUFBRSxJQUFFLFVBQVUsY0FBWSxXQUFVO0FBQUMsV0FBTTtBQUFBLEVBQXlpQjtBQUFFLElBQUUsVUFBVSxnQkFBYyxXQUFVO0FBQUMsV0FBTTtBQUFBLEVBQXNzQjtBQUFFLElBQUUsVUFBVSxTQUFPLFdBQVU7QUFBQyxRQUFJRCxLQUFFO0FBQUssUUFBSSxJQUFFLENBQUU7QUFBQyxXQUFPLEVBQUUsT0FBTSxFQUFDLE9BQU0saUJBQWdCLEdBQUUsRUFBRSxPQUFNLEVBQUMsT0FBTSxnQkFBZSxHQUFFLEVBQUUsV0FBVSxFQUFDLE9BQU0sUUFBTyxHQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sY0FBYSxTQUFRLFNBQVNDLElBQUU7QUFBQyxhQUFPRCxHQUFFLFlBQVlDLEVBQUM7QUFBQSxJQUFDLEVBQUMsR0FBRSxFQUFFLE9BQU0sRUFBQyxLQUFJLEtBQUssU0FBVSxFQUFBLENBQUMsQ0FBQyxHQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sY0FBYSxTQUFRLFNBQVNBLElBQUU7QUFBQyxhQUFPRCxHQUFFLGlCQUFpQkMsRUFBQztBQUFBLElBQUMsRUFBQyxHQUFFLEtBQUssV0FBVyxTQUFPLEtBQUcsRUFBRSxPQUFNLE1BQUssS0FBSyxhQUFXLFFBQU0sRUFBRSxPQUFNLEVBQUMsS0FBSSxLQUFLLGFBQVksRUFBRSxDQUFDLElBQUUsSUFBRyxLQUFLLGFBQVcsU0FBTyxFQUFFLE9BQU0sRUFBQyxLQUFJLEtBQUssY0FBZSxFQUFBLENBQUMsSUFBRSxJQUFHLEtBQUssYUFBVyxVQUFRLEVBQUUsT0FBTSxFQUFDLEtBQUksS0FBSyxZQUFXLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRyxLQUFLLGNBQVksU0FBTyxDQUFDLENBQUMsS0FBSyxnQkFBYyxFQUFFLE9BQU0sRUFBQyxPQUFNLFlBQVcsR0FBRSxFQUFFLE1BQUssTUFBSyxLQUFLLGFBQWEsR0FBRSxFQUFFLFNBQVEsRUFBQyxTQUFRLDZCQUE0QixHQUFFLEtBQUssbUJBQW1CLEdBQUUsRUFBRSxTQUFRLEVBQUMsTUFBSyxRQUFPLElBQUcsOEJBQTZCLFVBQVMsS0FBSyx1QkFBc0IsUUFBTyxXQUFVLE9BQU0scUJBQW9CLENBQUMsQ0FBQyxHQUFFLEtBQUssV0FBUyxFQUFFLE9BQU0sRUFBQyxPQUFNLFNBQVEsR0FBRSxFQUFFLE9BQU0sRUFBQyxPQUFNLGdCQUFlLE9BQU0sT0FBTyxPQUFPLEVBQUMsaUJBQWdCLE9BQU8sT0FBTyxLQUFLLFVBQVMsR0FBRyxFQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sZUFBYyxHQUFFLEtBQUssc0JBQW9CLEVBQUUsT0FBTSxFQUFDLE9BQU0sa0JBQWlCLENBQUMsR0FBRSxLQUFLLGdCQUFlLElBQUcsRUFBRSxTQUFRLEVBQUMsS0FBSSxTQUFTQSxJQUFFO0FBQUMsYUFBT0QsR0FBRSxlQUFhQztBQUFBLElBQUMsR0FBRSxrQkFBaUIsS0FBSyxxQkFBb0IsVUFBUyxNQUFLLGFBQVksS0FBSSxDQUFDLElBQUUsRUFBRSxVQUFTLEVBQUMsS0FBSSxTQUFTQSxJQUFFO0FBQUMsYUFBT0QsR0FBRSxnQkFBY0M7QUFBQSxJQUFDLEdBQUUsT0FBTSxRQUFPLFFBQU8sT0FBTSxDQUFDLEdBQUUsRUFBRSxVQUFTLEVBQUMsT0FBTSwwQkFBeUIsS0FBSSxTQUFTQSxJQUFFO0FBQUMsYUFBT0QsR0FBRSxrQkFBZ0JDO0FBQUEsSUFBQyxHQUFFLE9BQU0sUUFBTyxRQUFPLE9BQU0sQ0FBQyxDQUFDLEdBQUUsS0FBSyxhQUFXLEVBQUUsT0FBTSxFQUFDLE9BQU0sZ0JBQWUsR0FBRSxDQUFDLEtBQUssUUFBTSxDQUFDLEVBQUUsT0FBTSxFQUFDLE9BQU0sY0FBYSxTQUFRLEtBQUssZUFBYyxHQUFFLEVBQUUsU0FBUSxFQUFDLFNBQVEsMEJBQXlCLEdBQUUsS0FBSyxXQUFVLENBQUUsR0FBRSxFQUFFLFNBQVEsRUFBQyxNQUFLLFFBQU8sSUFBRywyQkFBMEIsVUFBUyxLQUFLLHVCQUFzQixRQUFPLFdBQVUsT0FBTSxvQkFBbUIsQ0FBQyxDQUFDLEdBQUUsRUFBRSxPQUFNLEVBQUMsT0FBTSxXQUFVLFNBQVEsS0FBSyxtQkFBa0IsR0FBRSxFQUFFLE9BQU0sRUFBQyxPQUFNLGlCQUFnQixDQUFDLENBQUMsR0FBRSxFQUFFLE9BQU0sRUFBQyxPQUFNLFVBQVMsU0FBUSxLQUFLLGtCQUFpQixHQUFFLEVBQUUsT0FBTSxFQUFDLEtBQUksS0FBSyxrQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsV0FBVSxFQUFDLE9BQU0sUUFBTyxHQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sc0JBQXFCLFNBQVEsU0FBU0EsSUFBRTtBQUFDLGFBQU9ELEdBQUUsa0JBQWtCQyxFQUFDO0FBQUEsSUFBQyxFQUFDLEdBQUUsRUFBRSxPQUFNLEVBQUMsS0FBSSxLQUFLLFdBQVksRUFBQSxDQUFDLENBQUMsR0FBRSxFQUFFLE9BQU0sRUFBQyxPQUFNLG1CQUFrQixTQUFRLFNBQVNBLElBQUU7QUFBQyxhQUFPRCxHQUFFLGtCQUFrQkMsRUFBQztBQUFBLElBQUMsRUFBQyxHQUFFLEVBQUUsT0FBTSxFQUFDLEtBQUksS0FBSyxZQUFhLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFFLFNBQU8sZUFBZSxHQUFFLGNBQWEsRUFBQyxLQUFJLFdBQVU7QUFBQyxXQUFNLENBQUMsT0FBTztBQUFBLEVBQUMsR0FBRSxZQUFXLE9BQU0sY0FBYSxLQUFJLENBQUM7QUFBRSxTQUFPLGVBQWUsRUFBRSxXQUFVLE1BQUssRUFBQyxLQUFJLFdBQVU7QUFBQyxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQUMsR0FBRSxZQUFXLE9BQU0sY0FBYSxLQUFJLENBQUM7QUFBRSxTQUFPO0FBQUMsRUFBQztBQUFHLFVBQVUsUUFBTTs7In0=
