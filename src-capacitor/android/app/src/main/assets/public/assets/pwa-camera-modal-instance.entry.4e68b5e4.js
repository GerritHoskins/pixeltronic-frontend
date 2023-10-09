import { h, g as getElement, r as registerInstance, c as createEvent } from "./capacitor.8e397c8b.js";
import "./index.2facb99b.js";
var __awaiter = globalThis && globalThis.__awaiter || function(e, t, n, o) {
  function r(e2) {
    return e2 instanceof n ? e2 : new n(function(t2) {
      t2(e2);
    });
  }
  return new (n || (n = Promise))(function(n2, i) {
    function a(e2) {
      try {
        s(o.next(e2));
      } catch (e3) {
        i(e3);
      }
    }
    function c(e2) {
      try {
        s(o["throw"](e2));
      } catch (e3) {
        i(e3);
      }
    }
    function s(e2) {
      e2.done ? n2(e2.value) : r(e2.value).then(a, c);
    }
    s((o = o.apply(e, t || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, o, r, i, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(e2) {
    return function(t2) {
      return s([e2, t2]);
    };
  }
  function s(c2) {
    if (o)
      throw new TypeError("Generator is already executing.");
    while (a && (a = 0, c2[0] && (n = 0)), n)
      try {
        if (o = 1, r && (i = c2[0] & 2 ? r["return"] : c2[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, c2[1])).done)
          return i;
        if (r = 0, i)
          c2 = [c2[0] & 2, i.value];
        switch (c2[0]) {
          case 0:
          case 1:
            i = c2;
            break;
          case 4:
            n.label++;
            return { value: c2[1], done: false };
          case 5:
            n.label++;
            r = c2[1];
            c2 = [0];
            continue;
          case 7:
            c2 = n.ops.pop();
            n.trys.pop();
            continue;
          default:
            if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (c2[0] === 6 || c2[0] === 2)) {
              n = 0;
              continue;
            }
            if (c2[0] === 3 && (!i || c2[1] > i[0] && c2[1] < i[3])) {
              n.label = c2[1];
              break;
            }
            if (c2[0] === 6 && n.label < i[1]) {
              n.label = i[1];
              i = c2;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2];
              n.ops.push(c2);
              break;
            }
            if (i[2])
              n.ops.pop();
            n.trys.pop();
            continue;
        }
        c2 = t.call(e, n);
      } catch (e2) {
        c2 = [6, e2];
        r = 0;
      } finally {
        o = i = 0;
      }
    if (c2[0] & 5)
      throw c2[1];
    return { value: c2[0] ? c2[1] : void 0, done: true };
  }
};
var cameraModalInstanceCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}";
var PWACameraModal = function() {
  function e(e2) {
    var t = this;
    registerInstance(this, e2);
    this.onPhoto = createEvent(this, "onPhoto", 7);
    this.noDeviceError = createEvent(this, "noDeviceError", 7);
    this.handlePhoto = function(e3) {
      return __awaiter(t, void 0, void 0, function() {
        return __generator(this, function(t2) {
          this.onPhoto.emit(e3);
          return [2];
        });
      });
    };
    this.handleNoDeviceError = function(e3) {
      return __awaiter(t, void 0, void 0, function() {
        return __generator(this, function(t2) {
          this.noDeviceError.emit(e3);
          return [2];
        });
      });
    };
    this.facingMode = "user";
    this.noDevicesText = "No camera found";
    this.noDevicesButtonText = "Choose image";
  }
  e.prototype.handleBackdropClick = function(e2) {
    if (e2.target !== this.el) {
      this.onPhoto.emit(null);
    }
  };
  e.prototype.handleComponentClick = function(e2) {
    e2.stopPropagation();
  };
  e.prototype.handleBackdropKeyUp = function(e2) {
    if (e2.key === "Escape") {
      this.onPhoto.emit(null);
    }
  };
  e.prototype.render = function() {
    var e2 = this;
    return h("div", { class: "wrapper", onClick: function(t) {
      return e2.handleBackdropClick(t);
    } }, h("div", { class: "content" }, h("pwa-camera", { onClick: function(t) {
      return e2.handleComponentClick(t);
    }, facingMode: this.facingMode, handlePhoto: this.handlePhoto, handleNoDeviceError: this.handleNoDeviceError, noDevicesButtonText: this.noDevicesButtonText, noDevicesText: this.noDevicesText })));
  };
  Object.defineProperty(e.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
PWACameraModal.style = cameraModalInstanceCss;
export { PWACameraModal as pwa_camera_modal_instance };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLWNhbWVyYS1tb2RhbC1pbnN0YW5jZS5lbnRyeS40ZTY4YjVlNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L3B3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2UuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlcj10aGlzJiZ0aGlzLl9fYXdhaXRlcnx8ZnVuY3Rpb24oZSx0LG4sbyl7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIG4/ZTpuZXcgbigoZnVuY3Rpb24odCl7dChlKX0pKX1yZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obixpKXtmdW5jdGlvbiBhKGUpe3RyeXtzKG8ubmV4dChlKSl9Y2F0Y2goZSl7aShlKX19ZnVuY3Rpb24gYyhlKXt0cnl7cyhvW1widGhyb3dcIl0oZSkpfWNhdGNoKGUpe2koZSl9fWZ1bmN0aW9uIHMoZSl7ZS5kb25lP24oZS52YWx1ZSk6cihlLnZhbHVlKS50aGVuKGEsYyl9cygobz1vLmFwcGx5KGUsdHx8W10pKS5uZXh0KCkpfSkpfTt2YXIgX19nZW5lcmF0b3I9dGhpcyYmdGhpcy5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24oZSx0KXt2YXIgbj17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoaVswXSYxKXRocm93IGlbMV07cmV0dXJuIGlbMV19LHRyeXM6W10sb3BzOltdfSxvLHIsaSxhO3JldHVybiBhPXtuZXh0OmMoMCksdGhyb3c6YygxKSxyZXR1cm46YygyKX0sdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmKGFbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksYTtmdW5jdGlvbiBjKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gcyhbZSx0XSl9fWZ1bmN0aW9uIHMoYyl7aWYobyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTt3aGlsZShhJiYoYT0wLGNbMF0mJihuPTApKSxuKXRyeXtpZihvPTEsciYmKGk9Y1swXSYyP3JbXCJyZXR1cm5cIl06Y1swXT9yW1widGhyb3dcIl18fCgoaT1yW1wicmV0dXJuXCJdKSYmaS5jYWxsKHIpLDApOnIubmV4dCkmJiEoaT1pLmNhbGwocixjWzFdKSkuZG9uZSlyZXR1cm4gaTtpZihyPTAsaSljPVtjWzBdJjIsaS52YWx1ZV07c3dpdGNoKGNbMF0pe2Nhc2UgMDpjYXNlIDE6aT1jO2JyZWFrO2Nhc2UgNDpuLmxhYmVsKys7cmV0dXJue3ZhbHVlOmNbMV0sZG9uZTpmYWxzZX07Y2FzZSA1Om4ubGFiZWwrKztyPWNbMV07Yz1bMF07Y29udGludWU7Y2FzZSA3OmM9bi5vcHMucG9wKCk7bi50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShpPW4udHJ5cyxpPWkubGVuZ3RoPjAmJmlbaS5sZW5ndGgtMV0pJiYoY1swXT09PTZ8fGNbMF09PT0yKSl7bj0wO2NvbnRpbnVlfWlmKGNbMF09PT0zJiYoIWl8fGNbMV0+aVswXSYmY1sxXTxpWzNdKSl7bi5sYWJlbD1jWzFdO2JyZWFrfWlmKGNbMF09PT02JiZuLmxhYmVsPGlbMV0pe24ubGFiZWw9aVsxXTtpPWM7YnJlYWt9aWYoaSYmbi5sYWJlbDxpWzJdKXtuLmxhYmVsPWlbMl07bi5vcHMucHVzaChjKTticmVha31pZihpWzJdKW4ub3BzLnBvcCgpO24udHJ5cy5wb3AoKTtjb250aW51ZX1jPXQuY2FsbChlLG4pfWNhdGNoKGUpe2M9WzYsZV07cj0wfWZpbmFsbHl7bz1pPTB9aWYoY1swXSY1KXRocm93IGNbMV07cmV0dXJue3ZhbHVlOmNbMF0/Y1sxXTp2b2lkIDAsZG9uZTp0cnVlfX19O2ltcG9ydHtyIGFzIHJlZ2lzdGVySW5zdGFuY2UsYyBhcyBjcmVhdGVFdmVudCxoLGcgYXMgZ2V0RWxlbWVudH1mcm9tXCIuL2luZGV4LTFjNWM0N2I0LmpzXCI7dmFyIGNhbWVyYU1vZGFsSW5zdGFuY2VDc3M9XCI6aG9zdHt6LWluZGV4OjEwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Y29udGFpbjpzdHJpY3Q7LS1pbnNldC13aWR0aDo2MDBweDstLWluc2V0LWhlaWdodDo2MDBweH0ud3JhcHBlcnstbXMtZmxleDoxO2ZsZXg6MTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMTUpfS5jb250ZW50ey13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7Ym94LXNoYWRvdzowcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7d2lkdGg6dmFyKC0taW5zZXQtd2lkdGgpO2hlaWdodDp2YXIoLS1pbnNldC1oZWlnaHQpO21heC1oZWlnaHQ6MTAwJX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXsuY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfX1cIjt2YXIgUFdBQ2FtZXJhTW9kYWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXM7cmVnaXN0ZXJJbnN0YW5jZSh0aGlzLGUpO3RoaXMub25QaG90bz1jcmVhdGVFdmVudCh0aGlzLFwib25QaG90b1wiLDcpO3RoaXMubm9EZXZpY2VFcnJvcj1jcmVhdGVFdmVudCh0aGlzLFwibm9EZXZpY2VFcnJvclwiLDcpO3RoaXMuaGFuZGxlUGhvdG89ZnVuY3Rpb24oZSl7cmV0dXJuIF9fYXdhaXRlcih0LHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKHQpe3RoaXMub25QaG90by5lbWl0KGUpO3JldHVyblsyXX0pKX0pKX07dGhpcy5oYW5kbGVOb0RldmljZUVycm9yPWZ1bmN0aW9uKGUpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbih0KXt0aGlzLm5vRGV2aWNlRXJyb3IuZW1pdChlKTtyZXR1cm5bMl19KSl9KSl9O3RoaXMuZmFjaW5nTW9kZT1cInVzZXJcIjt0aGlzLm5vRGV2aWNlc1RleHQ9XCJObyBjYW1lcmEgZm91bmRcIjt0aGlzLm5vRGV2aWNlc0J1dHRvblRleHQ9XCJDaG9vc2UgaW1hZ2VcIn1lLnByb3RvdHlwZS5oYW5kbGVCYWNrZHJvcENsaWNrPWZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0IT09dGhpcy5lbCl7dGhpcy5vblBob3RvLmVtaXQobnVsbCl9fTtlLnByb3RvdHlwZS5oYW5kbGVDb21wb25lbnRDbGljaz1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtlLnByb3RvdHlwZS5oYW5kbGVCYWNrZHJvcEtleVVwPWZ1bmN0aW9uKGUpe2lmKGUua2V5PT09XCJFc2NhcGVcIil7dGhpcy5vblBob3RvLmVtaXQobnVsbCl9fTtlLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiBoKFwiZGl2XCIse2NsYXNzOlwid3JhcHBlclwiLG9uQ2xpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIGUuaGFuZGxlQmFja2Ryb3BDbGljayh0KX19LGgoXCJkaXZcIix7Y2xhc3M6XCJjb250ZW50XCJ9LGgoXCJwd2EtY2FtZXJhXCIse29uQ2xpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIGUuaGFuZGxlQ29tcG9uZW50Q2xpY2sodCl9LGZhY2luZ01vZGU6dGhpcy5mYWNpbmdNb2RlLGhhbmRsZVBob3RvOnRoaXMuaGFuZGxlUGhvdG8saGFuZGxlTm9EZXZpY2VFcnJvcjp0aGlzLmhhbmRsZU5vRGV2aWNlRXJyb3Isbm9EZXZpY2VzQnV0dG9uVGV4dDp0aGlzLm5vRGV2aWNlc0J1dHRvblRleHQsbm9EZXZpY2VzVGV4dDp0aGlzLm5vRGV2aWNlc1RleHR9KSkpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJlbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0RWxlbWVudCh0aGlzKX0sZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZX0pO3JldHVybiBlfSgpO1BXQUNhbWVyYU1vZGFsLnN0eWxlPWNhbWVyYU1vZGFsSW5zdGFuY2VDc3M7ZXhwb3J0e1BXQUNhbWVyYU1vZGFsIGFzIHB3YV9jYW1lcmFfbW9kYWxfaW5zdGFuY2V9OyJdLCJuYW1lcyI6WyJ0aGlzIiwiZSIsInQiLCJuIiwiYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVVBLGNBQU1BLFdBQUssYUFBVyxTQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFTLEVBQUVDLElBQUU7QUFBQyxXQUFPQSxjQUFhLElBQUVBLEtBQUUsSUFBSSxFQUFHLFNBQVNDLElBQUU7QUFBQyxNQUFBQSxHQUFFRCxFQUFDO0FBQUEsSUFBQyxDQUFHO0FBQUEsRUFBQTtBQUFDLFNBQU8sS0FBSSxNQUFJLElBQUUsVUFBVyxTQUFTRSxJQUFFLEdBQUU7QUFBQyxhQUFTLEVBQUVGLElBQUU7QUFBQyxVQUFHO0FBQUMsVUFBRSxFQUFFLEtBQUtBLEVBQUMsQ0FBQztBQUFBLE1BQUMsU0FBT0EsSUFBTjtBQUFTLFVBQUVBLEVBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsRUFBRUEsSUFBRTtBQUFDLFVBQUc7QUFBQyxVQUFFLEVBQUUsU0FBU0EsRUFBQyxDQUFDO0FBQUEsTUFBQyxTQUFPQSxJQUFOO0FBQVMsVUFBRUEsRUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFQSxJQUFFO0FBQUMsTUFBQUEsR0FBRSxPQUFLRSxHQUFFRixHQUFFLEtBQUssSUFBRSxFQUFFQSxHQUFFLEtBQUssRUFBRSxLQUFLLEdBQUUsQ0FBQztB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
