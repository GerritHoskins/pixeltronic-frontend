import { h, g as getElement, r as registerInstance, c as createEvent } from "./capacitor.8e397c8b.js";
import "./index.2facb99b.js";
var actionSheetCss = ':host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0);-webkit-transition:400ms background-color cubic-bezier(.36,.66,.04,1);transition:400ms background-color cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0, 0, 0, 0.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1), 400ms -webkit-transform cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0%);transform:translateY(0%)}@media only screen and (max-width: 568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:rgb(38, 38, 38);font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0px}.action-sheet-button:hover{background-color:#F6F6F6}';
var PWAActionSheet = function() {
  function e(e2) {
    registerInstance(this, e2);
    this.onSelection = createEvent(this, "onSelection", 7);
    this.header = void 0;
    this.cancelable = true;
    this.options = [];
    this.open = false;
  }
  e.prototype.componentDidLoad = function() {
    var e2 = this;
    requestAnimationFrame(function() {
      e2.open = true;
    });
  };
  e.prototype.dismiss = function() {
    if (this.cancelable) {
      this.close();
    }
  };
  e.prototype.close = function() {
    var e2 = this;
    this.open = false;
    setTimeout(function() {
      e2.el.parentNode.removeChild(e2.el);
    }, 500);
  };
  e.prototype.handleOptionClick = function(e2, t) {
    e2.stopPropagation();
    this.onSelection.emit(t);
    this.close();
  };
  e.prototype.render = function() {
    var e2 = this;
    return h("div", { class: "wrapper".concat(this.open ? " open" : ""), onClick: function() {
      return e2.dismiss();
    } }, h("div", { class: "content" }, h("div", { class: "title" }, this.header), this.options.map(function(t, n) {
      return h("div", { class: "action-sheet-option", onClick: function(t2) {
        return e2.handleOptionClick(t2, n);
      } }, h("div", { class: "action-sheet-button" }, t.title));
    })));
  };
  Object.defineProperty(e.prototype, "el", { get: function() {
    return getElement(this);
  }, enumerable: false, configurable: true });
  return e;
}();
PWAActionSheet.style = actionSheetCss;
export { PWAActionSheet as pwa_action_sheet };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLWFjdGlvbi1zaGVldC5lbnRyeS43ODRlNjAzZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L3B3YS1hY3Rpb24tc2hlZXQuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e3IgYXMgcmVnaXN0ZXJJbnN0YW5jZSxjIGFzIGNyZWF0ZUV2ZW50LGgsZyBhcyBnZXRFbGVtZW50fWZyb21cIi4vaW5kZXgtMWM1YzQ3YjQuanNcIjt2YXIgYWN0aW9uU2hlZXRDc3M9Jzpob3N0e3otaW5kZXg6MTAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtjb250YWluOnN0cmljdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZ9LndyYXBwZXJ7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTstd2Via2l0LXRyYW5zaXRpb246NDAwbXMgYmFja2dyb3VuZC1jb2xvciBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7dHJhbnNpdGlvbjo0MDBtcyBiYWNrZ3JvdW5kLWNvbG9yIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKX0ud3JhcHBlci5vcGVue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjMyKX0udGl0bGV7Y29sb3I6Izk5OTtoZWlnaHQ6MjNweDtsaW5lLWhlaWdodDoyM3B4O3BhZGRpbmctYm90dG9tOjE3cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjIwcHh9LmNvbnRlbnR7d2lkdGg6NTY4cHg7LW1zLWZsZXgtaXRlbS1hbGlnbjplbmQ7YWxpZ24tc2VsZjpmbGV4LWVuZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7LXdlYmtpdC10cmFuc2l0aW9uOjQwMG1zIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOjQwMG1zIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOjQwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7dHJhbnNpdGlvbjo0MDBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpLCA0MDBtcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKX0ud3JhcHBlci5vcGVuIC5jb250ZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDAlKX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KXsuY29udGVudHt3aWR0aDoxMDAlfX0uYWN0aW9uLXNoZWV0LW9wdGlvbntjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6NTJweDtsaW5lLWhlaWdodDo1MnB4fS5hY3Rpb24tc2hlZXQtYnV0dG9ue2NvbG9yOnJnYigzOCwgMzgsIDM4KTtmb250LXNpemU6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MHB4fS5hY3Rpb24tc2hlZXQtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I0Y2RjZGNn0nO3ZhciBQV0FBY3Rpb25TaGVldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7cmVnaXN0ZXJJbnN0YW5jZSh0aGlzLGUpO3RoaXMub25TZWxlY3Rpb249Y3JlYXRlRXZlbnQodGhpcyxcIm9uU2VsZWN0aW9uXCIsNyk7dGhpcy5oZWFkZXI9dW5kZWZpbmVkO3RoaXMuY2FuY2VsYWJsZT10cnVlO3RoaXMub3B0aW9ucz1bXTt0aGlzLm9wZW49ZmFsc2V9ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe2Uub3Blbj10cnVlfSkpfTtlLnByb3RvdHlwZS5kaXNtaXNzPWZ1bmN0aW9uKCl7aWYodGhpcy5jYW5jZWxhYmxlKXt0aGlzLmNsb3NlKCl9fTtlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5vcGVuPWZhbHNlO3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUuZWwpfSksNTAwKX07ZS5wcm90b3R5cGUuaGFuZGxlT3B0aW9uQ2xpY2s9ZnVuY3Rpb24oZSx0KXtlLnN0b3BQcm9wYWdhdGlvbigpO3RoaXMub25TZWxlY3Rpb24uZW1pdCh0KTt0aGlzLmNsb3NlKCl9O2UucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIGgoXCJkaXZcIix7Y2xhc3M6XCJ3cmFwcGVyXCIuY29uY2F0KHRoaXMub3Blbj9cIiBvcGVuXCI6XCJcIiksb25DbGljazpmdW5jdGlvbigpe3JldHVybiBlLmRpc21pc3MoKX19LGgoXCJkaXZcIix7Y2xhc3M6XCJjb250ZW50XCJ9LGgoXCJkaXZcIix7Y2xhc3M6XCJ0aXRsZVwifSx0aGlzLmhlYWRlciksdGhpcy5vcHRpb25zLm1hcCgoZnVuY3Rpb24odCxuKXtyZXR1cm4gaChcImRpdlwiLHtjbGFzczpcImFjdGlvbi1zaGVldC1vcHRpb25cIixvbkNsaWNrOmZ1bmN0aW9uKHQpe3JldHVybiBlLmhhbmRsZU9wdGlvbkNsaWNrKHQsbil9fSxoKFwiZGl2XCIse2NsYXNzOlwiYWN0aW9uLXNoZWV0LWJ1dHRvblwifSx0LnRpdGxlKSl9KSkpKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiZWxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGdldEVsZW1lbnQodGhpcyl9LGVudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWV9KTtyZXR1cm4gZX0oKTtQV0FBY3Rpb25TaGVldC5zdHlsZT1hY3Rpb25TaGVldENzcztleHBvcnR7UFdBQWN0aW9uU2hlZXQgYXMgcHdhX2FjdGlvbl9zaGVldH07Il0sIm5hbWVzIjpbImUiLCJ0Il0sIm1hcHBpbmdzIjoiOztBQUEwRixJQUFJLGlCQUFlO0FBQXd3RCxJQUFDLGlCQUFlLFdBQVU7QUFBQyxXQUFTLEVBQUVBLElBQUU7QUFBQyxxQkFBaUIsTUFBS0EsRUFBQztBQUFFLFNBQUssY0FBWSxZQUFZLE1BQUssZUFBYyxDQUFDO0FBQUUsU0FBSyxTQUFPO0FBQVUsU0FBSyxhQUFXO0FBQUssU0FBSyxVQUFRLENBQUU7QUFBQyxTQUFLLE9BQUs7QUFBQSxFQUFLO0FBQUMsSUFBRSxVQUFVLG1CQUFpQixXQUFVO0FBQUMsUUFBSUEsS0FBRTtBQUFLLDBCQUF1QixXQUFVO0FBQUMsTUFBQUEsR0FBRSxPQUFLO0FBQUEsSUFBSSxDQUFDO0FBQUEsRUFBRTtBQUFFLElBQUUsVUFBVSxVQUFRLFdBQVU7QUFBQyxRQUFHLEtBQUssWUFBVztBQUFDLFdBQUs7SUFBTztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsUUFBTSxXQUFVO0FBQUMsUUFBSUEsS0FBRTtBQUFLLFNBQUssT0FBSztBQUFNLGVBQVksV0FBVTtBQUFDLE1BQUFBLEdBQUUsR0FBRyxXQUFXLFlBQVlBLEdBQUUsRUFBRTtBQUFBLElBQUMsR0FBRyxHQUFHO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxvQkFBa0IsU0FBU0EsSUFBRSxHQUFFO0FBQUMsSUFBQUEsR0FBRSxnQkFBZTtBQUFHLFNBQUssWUFBWSxLQUFLLENBQUM7QUFBRSxTQUFLLE1BQUs7QUFBQSxFQUFFO0FBQUUsSUFBRSxVQUFVLFNBQU8sV0FBVTtBQUFDLFFBQUlBLEtBQUU7QUFBSyxXQUFPLEVBQUUsT0FBTSxFQUFDLE9BQU0sVUFBVSxPQUFPLEtBQUssT0FBSyxVQUFRLEVBQUUsR0FBRSxTQUFRLFdBQVU7QUFBQyxhQUFPQSxHQUFFO0lBQVMsRUFBQyxHQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sVUFBUyxHQUFFLEVBQUUsT0FBTSxFQUFDLE9BQU0sUUFBTyxHQUFFLEtBQUssTUFBTSxHQUFFLEtBQUssUUFBUSxJQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBTyxFQUFFLE9BQU0sRUFBQyxPQUFNLHVCQUFzQixTQUFRLFNBQVNDLElBQUU7QUFBQyxlQUFPRCxHQUFFLGtCQUFrQkMsSUFBRSxDQUFDO0FBQUEsTUFBQyxFQUFDLEdBQUUsRUFBRSxPQUFNLEVBQUMsT0FBTSxzQkFBcUIsR0FBRSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUMsQ0FBRyxDQUFBLENBQUM7QUFBQSxFQUFDO0FBQUUsU0FBTyxlQUFlLEVBQUUsV0FBVSxNQUFLLEVBQUMsS0FBSSxXQUFVO0FBQUMsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUFDLEdBQUUsWUFBVyxPQUFNLGNBQWEsS0FBSSxDQUFDO0FBQUUsU0FBTztBQUFDLEVBQUM7QUFBRyxlQUFlLFFBQU07OyJ9
