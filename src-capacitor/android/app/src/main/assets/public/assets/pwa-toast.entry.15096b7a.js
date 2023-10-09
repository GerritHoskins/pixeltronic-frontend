import { h, g as getElement, H as Host, r as registerInstance } from "./capacitor.8e397c8b.js";
import "./index.2facb99b.js";
var toastCss = ':host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}';
var PWAToast = function() {
  function t(t2) {
    registerInstance(this, t2);
    this.message = void 0;
    this.duration = 2e3;
    this.closing = null;
  }
  t.prototype.hostData = function() {
    var t2 = { out: !!this.closing };
    if (this.closing !== null) {
      t2["in"] = !this.closing;
    }
    return { class: t2 };
  };
  t.prototype.componentDidLoad = function() {
    var t2 = this;
    setTimeout(function() {
      t2.closing = false;
    });
    setTimeout(function() {
      t2.close();
    }, this.duration);
  };
  t.prototype.close = function() {
    var t2 = this;
    this.closing = true;
    setTimeout(function() {
      t2.el.parentNode.removeChild(t2.el);
    }, 1e3);
  };
  t.prototype.__stencil_render = function() {
    return h("div", { class: "wrapper" }, h("div", { class: "toast" }, this.message));
  };
  Object.defineProperty(t.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  t.prototype.render = function() {
    return h(Host, this.hostData(), this.__stencil_render());
  };
  return t;
}();
PWAToast.style = toastCss;
export { PWAToast as pwa_toast };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLXRvYXN0LmVudHJ5LjE1MDk2YjdhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL3B3YS1lbGVtZW50cy9kaXN0L2VzbS1lczUvcHdhLXRvYXN0LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtyIGFzIHJlZ2lzdGVySW5zdGFuY2UsaCxnIGFzIGdldEVsZW1lbnQsSCBhcyBIb3N0fWZyb21cIi4vaW5kZXgtMWM1YzQ3YjQuanNcIjt2YXIgdG9hc3RDc3M9Jzpob3N0e3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyMHB4O2xlZnQ6MDtyaWdodDowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O29wYWNpdHk6MH06aG9zdCguaW4pey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDMwMG1zO3RyYW5zaXRpb246b3BhY2l0eSAzMDBtcztvcGFjaXR5OjF9Omhvc3QoLm91dCl7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgMXM7dHJhbnNpdGlvbjpvcGFjaXR5IDFzO29wYWNpdHk6MH0ud3JhcHBlcnstbXMtZmxleDoxO2ZsZXg6MTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRvYXN0e2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjojZWVlO2NvbG9yOmJsYWNrO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MTBweCAxNXB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDstd2Via2l0LWJveC1zaGFkb3c6MHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIwKTtib3gtc2hhZG93OjBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMCl9Jzt2YXIgUFdBVG9hc3Q9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JlZ2lzdGVySW5zdGFuY2UodGhpcyx0KTt0aGlzLm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMuZHVyYXRpb249MmUzO3RoaXMuY2xvc2luZz1udWxsfXQucHJvdG90eXBlLmhvc3REYXRhPWZ1bmN0aW9uKCl7dmFyIHQ9e291dDohIXRoaXMuY2xvc2luZ307aWYodGhpcy5jbG9zaW5nIT09bnVsbCl7dFtcImluXCJdPSF0aGlzLmNsb3Npbmd9cmV0dXJue2NsYXNzOnR9fTt0LnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuY2xvc2luZz1mYWxzZX0pKTtzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuY2xvc2UoKX0pLHRoaXMuZHVyYXRpb24pfTt0LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5jbG9zaW5nPXRydWU7c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5lbCl9KSwxZTMpfTt0LnByb3RvdHlwZS5fX3N0ZW5jaWxfcmVuZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGgoXCJkaXZcIix7Y2xhc3M6XCJ3cmFwcGVyXCJ9LGgoXCJkaXZcIix7Y2xhc3M6XCJ0b2FzdFwifSx0aGlzLm1lc3NhZ2UpKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZWxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGdldEVsZW1lbnQodGhpcyl9LGVudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWV9KTt0LnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXtyZXR1cm4gaChIb3N0LHRoaXMuaG9zdERhdGEoKSx0aGlzLl9fc3RlbmNpbF9yZW5kZXIoKSl9O3JldHVybiB0fSgpO1BXQVRvYXN0LnN0eWxlPXRvYXN0Q3NzO2V4cG9ydHtQV0FUb2FzdCBhcyBwd2FfdG9hc3R9OyJdLCJuYW1lcyI6WyJ0Il0sIm1hcHBpbmdzIjoiOztBQUFtRixJQUFJLFdBQVM7QUFBZ3FCLElBQUMsV0FBUyxXQUFVO0FBQUMsV0FBUyxFQUFFQSxJQUFFO0FBQUMscUJBQWlCLE1BQUtBLEVBQUM7QUFBRSxTQUFLLFVBQVE7QUFBVSxTQUFLLFdBQVM7QUFBSSxTQUFLLFVBQVE7QUFBQSxFQUFJO0FBQUMsSUFBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLFFBQUlBLEtBQUUsRUFBQyxLQUFJLENBQUMsQ0FBQyxLQUFLLFFBQU87QUFBRSxRQUFHLEtBQUssWUFBVSxNQUFLO0FBQUMsTUFBQUEsR0FBRSxRQUFNLENBQUMsS0FBSztBQUFBLElBQU87QUFBQyxXQUFNLEVBQUMsT0FBTUEsR0FBQztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsbUJBQWlCLFdBQVU7QUFBQyxRQUFJQSxLQUFFO0FBQUssZUFBWSxXQUFVO0FBQUMsTUFBQUEsR0FBRSxVQUFRO0FBQUEsSUFBSyxDQUFHO0FBQUMsZUFBWSxXQUFVO0FBQUMsTUFBQUEsR0FBRSxNQUFPO0FBQUEsSUFBQSxHQUFHLEtBQUssUUFBUTtBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsUUFBTSxXQUFVO0FBQUMsUUFBSUEsS0FBRTtBQUFLLFNBQUssVUFBUTtBQUFLLGVBQVksV0FBVTtBQUFDLE1BQUFBLEdBQUUsR0FBRyxXQUFXLFlBQVlBLEdBQUUsRUFBRTtBQUFBLElBQUMsR0FBRyxHQUFHO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxtQkFBaUIsV0FBVTtBQUFDLFdBQU8sRUFBRSxPQUFNLEVBQUMsT0FBTSxVQUFTLEdBQUUsRUFBRSxPQUFNLEVBQUMsT0FBTSxRQUFPLEdBQUUsS0FBSyxPQUFPLENBQUM7QUFBQSxFQUFDO0FBQUUsU0FBTyxlQUFlLEVBQUUsV0FBVSxNQUFLLEVBQUMsS0FBSSxXQUFVO0FBQUMsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUFDLEdBQUUsWUFBVyxPQUFNLGNBQWEsS0FBSSxDQUFDO0FBQUUsSUFBRSxVQUFVLFNBQU8sV0FBVTtBQUFDLFdBQU8sRUFBRSxNQUFLLEtBQUssU0FBUSxHQUFHLEtBQUssaUJBQWtCLENBQUE7QUFBQSxFQUFDO0FBQUUsU0FBTztBQUFDLEVBQUk7QUFBQSxTQUFTLFFBQU07OyJ9
