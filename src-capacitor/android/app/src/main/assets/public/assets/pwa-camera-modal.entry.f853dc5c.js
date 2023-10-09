import { h, r as registerInstance, c as createEvent } from "./capacitor.8e397c8b.js";
import "./index.2facb99b.js";
var __awaiter = globalThis && globalThis.__awaiter || function(t, e, n, r) {
  function o(t2) {
    return t2 instanceof n ? t2 : new n(function(e2) {
      e2(t2);
    });
  }
  return new (n || (n = Promise))(function(n2, i) {
    function a(t2) {
      try {
        c(r.next(t2));
      } catch (t3) {
        i(t3);
      }
    }
    function s(t2) {
      try {
        c(r["throw"](t2));
      } catch (t3) {
        i(t3);
      }
    }
    function c(t2) {
      t2.done ? n2(t2.value) : o(t2.value).then(a, s);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(t2) {
    return function(e2) {
      return c([t2, e2]);
    };
  }
  function c(s2) {
    if (r)
      throw new TypeError("Generator is already executing.");
    while (a && (a = 0, s2[0] && (n = 0)), n)
      try {
        if (r = 1, o && (i = s2[0] & 2 ? o["return"] : s2[0] ? o["throw"] || ((i = o["return"]) && i.call(o), 0) : o.next) && !(i = i.call(o, s2[1])).done)
          return i;
        if (o = 0, i)
          s2 = [s2[0] & 2, i.value];
        switch (s2[0]) {
          case 0:
          case 1:
            i = s2;
            break;
          case 4:
            n.label++;
            return { value: s2[1], done: false };
          case 5:
            n.label++;
            o = s2[1];
            s2 = [0];
            continue;
          case 7:
            s2 = n.ops.pop();
            n.trys.pop();
            continue;
          default:
            if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (s2[0] === 6 || s2[0] === 2)) {
              n = 0;
              continue;
            }
            if (s2[0] === 3 && (!i || s2[1] > i[0] && s2[1] < i[3])) {
              n.label = s2[1];
              break;
            }
            if (s2[0] === 6 && n.label < i[1]) {
              n.label = i[1];
              i = s2;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2];
              n.ops.push(s2);
              break;
            }
            if (i[2])
              n.ops.pop();
            n.trys.pop();
            continue;
        }
        s2 = e.call(t, n);
      } catch (t2) {
        s2 = [6, t2];
        o = 0;
      } finally {
        r = i = 0;
      }
    if (s2[0] & 5)
      throw s2[1];
    return { value: s2[0] ? s2[1] : void 0, done: true };
  }
};
var cameraModalCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}";
var PWACameraModal = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.onPhoto = createEvent(this, "onPhoto", 7);
    this.noDeviceError = createEvent(this, "noDeviceError", 7);
    this.facingMode = "user";
  }
  t.prototype.present = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2;
      var e = this;
      return __generator(this, function(n) {
        t2 = document.createElement("pwa-camera-modal-instance");
        t2.facingMode = this.facingMode;
        t2.addEventListener("onPhoto", function(t3) {
          return __awaiter(e, void 0, void 0, function() {
            var e2;
            return __generator(this, function(n2) {
              if (!this._modal) {
                return [2];
              }
              e2 = t3.detail;
              this.onPhoto.emit(e2);
              return [2];
            });
          });
        });
        t2.addEventListener("noDeviceError", function(t3) {
          return __awaiter(e, void 0, void 0, function() {
            return __generator(this, function(e2) {
              this.noDeviceError.emit(t3);
              return [2];
            });
          });
        });
        document.body.append(t2);
        this._modal = t2;
        return [2];
      });
    });
  };
  t.prototype.dismiss = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        if (!this._modal) {
          return [2];
        }
        this._modal && this._modal.parentNode.removeChild(this._modal);
        this._modal = null;
        return [2];
      });
    });
  };
  t.prototype.render = function() {
    return h("div", null);
  };
  return t;
}();
PWACameraModal.style = cameraModalCss;
export { PWACameraModal as pwa_camera_modal };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLWNhbWVyYS1tb2RhbC5lbnRyeS5mODUzZGM1Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L3B3YS1jYW1lcmEtbW9kYWwuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlcj10aGlzJiZ0aGlzLl9fYXdhaXRlcnx8ZnVuY3Rpb24odCxlLG4scil7ZnVuY3Rpb24gbyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIG4/dDpuZXcgbigoZnVuY3Rpb24oZSl7ZSh0KX0pKX1yZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obixpKXtmdW5jdGlvbiBhKHQpe3RyeXtjKHIubmV4dCh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gcyh0KXt0cnl7YyhyW1widGhyb3dcIl0odCkpfWNhdGNoKHQpe2kodCl9fWZ1bmN0aW9uIGModCl7dC5kb25lP24odC52YWx1ZSk6byh0LnZhbHVlKS50aGVuKGEscyl9Yygocj1yLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSkpfTt2YXIgX19nZW5lcmF0b3I9dGhpcyYmdGhpcy5fX2dlbmVyYXRvcnx8ZnVuY3Rpb24odCxlKXt2YXIgbj17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoaVswXSYxKXRocm93IGlbMV07cmV0dXJuIGlbMV19LHRyeXM6W10sb3BzOltdfSxyLG8saSxhO3JldHVybiBhPXtuZXh0OnMoMCksdGhyb3c6cygxKSxyZXR1cm46cygyKX0sdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmKGFbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksYTtmdW5jdGlvbiBzKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gYyhbdCxlXSl9fWZ1bmN0aW9uIGMocyl7aWYocil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTt3aGlsZShhJiYoYT0wLHNbMF0mJihuPTApKSxuKXRyeXtpZihyPTEsbyYmKGk9c1swXSYyP29bXCJyZXR1cm5cIl06c1swXT9vW1widGhyb3dcIl18fCgoaT1vW1wicmV0dXJuXCJdKSYmaS5jYWxsKG8pLDApOm8ubmV4dCkmJiEoaT1pLmNhbGwobyxzWzFdKSkuZG9uZSlyZXR1cm4gaTtpZihvPTAsaSlzPVtzWzBdJjIsaS52YWx1ZV07c3dpdGNoKHNbMF0pe2Nhc2UgMDpjYXNlIDE6aT1zO2JyZWFrO2Nhc2UgNDpuLmxhYmVsKys7cmV0dXJue3ZhbHVlOnNbMV0sZG9uZTpmYWxzZX07Y2FzZSA1Om4ubGFiZWwrKztvPXNbMV07cz1bMF07Y29udGludWU7Y2FzZSA3OnM9bi5vcHMucG9wKCk7bi50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShpPW4udHJ5cyxpPWkubGVuZ3RoPjAmJmlbaS5sZW5ndGgtMV0pJiYoc1swXT09PTZ8fHNbMF09PT0yKSl7bj0wO2NvbnRpbnVlfWlmKHNbMF09PT0zJiYoIWl8fHNbMV0+aVswXSYmc1sxXTxpWzNdKSl7bi5sYWJlbD1zWzFdO2JyZWFrfWlmKHNbMF09PT02JiZuLmxhYmVsPGlbMV0pe24ubGFiZWw9aVsxXTtpPXM7YnJlYWt9aWYoaSYmbi5sYWJlbDxpWzJdKXtuLmxhYmVsPWlbMl07bi5vcHMucHVzaChzKTticmVha31pZihpWzJdKW4ub3BzLnBvcCgpO24udHJ5cy5wb3AoKTtjb250aW51ZX1zPWUuY2FsbCh0LG4pfWNhdGNoKHQpe3M9WzYsdF07bz0wfWZpbmFsbHl7cj1pPTB9aWYoc1swXSY1KXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTp0cnVlfX19O2ltcG9ydHtyIGFzIHJlZ2lzdGVySW5zdGFuY2UsYyBhcyBjcmVhdGVFdmVudCxofWZyb21cIi4vaW5kZXgtMWM1YzQ3YjQuanNcIjt2YXIgY2FtZXJhTW9kYWxDc3M9XCI6aG9zdHt6LWluZGV4OjEwMDA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Y29udGFpbjpzdHJpY3R9LndyYXBwZXJ7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjE1KX0uY29udGVudHstd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO2JveC1zaGFkb3c6MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO3dpZHRoOjYwMHB4O2hlaWdodDo2MDBweH1cIjt2YXIgUFdBQ2FtZXJhTW9kYWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JlZ2lzdGVySW5zdGFuY2UodGhpcyx0KTt0aGlzLm9uUGhvdG89Y3JlYXRlRXZlbnQodGhpcyxcIm9uUGhvdG9cIiw3KTt0aGlzLm5vRGV2aWNlRXJyb3I9Y3JlYXRlRXZlbnQodGhpcyxcIm5vRGV2aWNlRXJyb3JcIiw3KTt0aGlzLmZhY2luZ01vZGU9XCJ1c2VyXCJ9dC5wcm90b3R5cGUucHJlc2VudD1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0O3ZhciBlPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKG4pe3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInB3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2VcIik7dC5mYWNpbmdNb2RlPXRoaXMuZmFjaW5nTW9kZTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJvblBob3RvXCIsKGZ1bmN0aW9uKHQpe3JldHVybiBfX2F3YWl0ZXIoZSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihuKXtpZighdGhpcy5fbW9kYWwpe3JldHVyblsyXX1lPXQuZGV0YWlsO3RoaXMub25QaG90by5lbWl0KGUpO3JldHVyblsyXX0pKX0pKX0pKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJub0RldmljZUVycm9yXCIsKGZ1bmN0aW9uKHQpe3JldHVybiBfX2F3YWl0ZXIoZSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihlKXt0aGlzLm5vRGV2aWNlRXJyb3IuZW1pdCh0KTtyZXR1cm5bMl19KSl9KSl9KSk7ZG9jdW1lbnQuYm9keS5hcHBlbmQodCk7dGhpcy5fbW9kYWw9dDtyZXR1cm5bMl19KSl9KSl9O3QucHJvdG90eXBlLmRpc21pc3M9ZnVuY3Rpb24oKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24odCl7aWYoIXRoaXMuX21vZGFsKXtyZXR1cm5bMl19dGhpcy5fbW9kYWwmJnRoaXMuX21vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fbW9kYWwpO3RoaXMuX21vZGFsPW51bGw7cmV0dXJuWzJdfSkpfSkpfTt0LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXtyZXR1cm4gaChcImRpdlwiLG51bGwpfTtyZXR1cm4gdH0oKTtQV0FDYW1lcmFNb2RhbC5zdHlsZT1jYW1lcmFNb2RhbENzcztleHBvcnR7UFdBQ2FtZXJhTW9kYWwgYXMgcHdhX2NhbWVyYV9tb2RhbH07Il0sIm5hbWVzIjpbInRoaXMiLCJ0IiwiZSIsIm4iLCJzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksWUFBVUEsY0FBTUEsV0FBSyxhQUFXLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQVMsRUFBRUMsSUFBRTtBQUFDLFdBQU9BLGNBQWEsSUFBRUEsS0FBRSxJQUFJLEVBQUcsU0FBU0MsSUFBRTtBQUFDLE1BQUFBLEdBQUVELEVBQUM7QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFFO0FBQUMsU0FBTyxLQUFJLE1BQUksSUFBRSxVQUFXLFNBQVNFLElBQUUsR0FBRTtBQUFDLGFBQVMsRUFBRUYsSUFBRTtBQUFDLFVBQUc7QUFBQyxVQUFFLEVBQUUsS0FBS0EsRUFBQyxDQUFDO0FBQUEsTUFBQyxTQUFPQSxJQUFOO0FBQVMsVUFBRUEsRUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFQSxJQUFFO0FBQUMsVUFBRztBQUFDLFVBQUUsRUFBRSxTQUFTQSxFQUFDLENBQUM7QUFBQSxNQUFDLFNBQU9BLElBQU47QUFBUyxVQUFFQSxFQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEVBQUVBLElBQUU7QUFBQyxNQUFBQSxHQUFFLE9BQUtFLEdBQUVGLEdBQUUsS0FBSyxJQUFFLEVBQUVBLEdBQUUsS0FBSyxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLE9BQUcsSUFBRSxFQUFFLE1BQU0sR0FBRSxLQUFHLENBQUUsQ0FBQSxHQUFHLEtBQUksQ0FBRTtBQUFBLEVBQUMsQ0FBRztBQUFBO0FBQUUsSUFBSSxjQUFZRCxjQUFNQSxXQUFLLGVBQWEsU0FBUyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBQyxPQUFNLEdBQUUsTUFBSyxXQUFVO0FBQUMsUUFBRyxFQUFFLEtBQUc7QUFBRSxZQUFNLEVBQUU7QUFBRyxXQUFPLEVBQUU7QUFBQSxFQUFFLEdBQUUsTUFBSyxDQUFFLEdBQUMsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxTQUFPLElBQUUsRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLE9BQU8sV0FBUyxlQUFhLEVBQUUsT0FBTyxZQUFVLFdBQVU7QUFBQyxXQUFPO0FBQUEsRUFBSSxJQUFHO0FBQUUsV0FBUyxFQUFFQyxJQUFFO0FBQUMsV0FBTyxTQUFTQyxJQUFFO0FBQUMsYUFBTyxFQUFFLENBQUNELElBQUVDLEVBQUMsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFRSxJQUFFO0FBQUMsUUFBRztBQUFFLFlBQU0sSUFBSSxVQUFVLGlDQUFpQztBQUFFLFdBQU0sTUFBSSxJQUFFLEdBQUVBLEdBQUUsT0FBSyxJQUFFLEtBQUk7QUFBRSxVQUFHO0FBQUMsWUFBRyxJQUFFLEdBQUUsTUFBSSxJQUFFQSxHQUFFLEtBQUcsSUFBRSxFQUFFLFlBQVVBLEdBQUUsS0FBRyxFQUFFLGNBQVksSUFBRSxFQUFFLGNBQVksRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFHLEVBQUUsU0FBTyxFQUFFLElBQUUsRUFBRSxLQUFLLEdBQUVBLEdBQUUsRUFBRSxHQUFHO0FBQUssaUJBQU87QUFBRSxZQUFHLElBQUUsR0FBRTtBQUFFLFVBQUFBLEtBQUUsQ0FBQ0EsR0FBRSxLQUFHLEdBQUUsRUFBRSxLQUFLO0FBQUUsZ0JBQU9BLEdBQUU7QUFBQSxlQUFTO0FBQUEsZUFBTztBQUFFLGdCQUFFQTtBQUFFO0FBQUEsZUFBVztBQUFFLGNBQUU7QUFBUSxtQkFBTSxFQUFDLE9BQU1BLEdBQUUsSUFBRyxNQUFLLE1BQUs7QUFBQSxlQUFPO0FBQUUsY0FBRTtBQUFRLGdCQUFFQSxHQUFFO0FBQUcsWUFBQUEsS0FBRSxDQUFDLENBQUM7QUFBRTtBQUFBLGVBQWM7QUFBRSxZQUFBQSxLQUFFLEVBQUUsSUFBSSxJQUFLO0FBQUMsY0FBRSxLQUFLLElBQUc7QUFBRztBQUFBO0FBQWlCLGdCQUFHLEVBQUUsSUFBRSxFQUFFLE1BQUssSUFBRSxFQUFFLFNBQU8sS0FBRyxFQUFFLEVBQUUsU0FBTyxRQUFNQSxHQUFFLE9BQUssS0FBR0EsR0FBRSxPQUFLLElBQUc7QUFBQyxrQkFBRTtBQUFFO0FBQUEsWUFBUTtBQUFDLGdCQUFHQSxHQUFFLE9BQUssTUFBSSxDQUFDLEtBQUdBLEdBQUUsS0FBRyxFQUFFLE1BQUlBLEdBQUUsS0FBRyxFQUFFLEtBQUk7QUFB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
