import { c as createComponent, h as hSlot } from "./render.ce87f311.js";
import { e as inject, f as emptyRenderFn, c as computed, h, j as layoutKey, C as pageContainerKey, g as getCurrentInstance, G as _export_sfc, I as defineComponent, r as ref, J as openBlock, T as createElementBlock, S as createBaseVNode, Q as toDisplayString, V as Fragment, U as renderList, K as createBlock, L as withCtx, M as createVNode } from "./index.2facb99b.js";
var QPage = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPage needs to be a deep child of QLayout");
      return emptyRenderFn;
    }
    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error("QPage needs to be child of QPageContainer");
      return emptyRenderFn;
    }
    const style = computed(() => {
      const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props.styleFn === "function") {
        const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props.styleFn(offset, height);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px"
      };
    });
    const classes = computed(
      () => `q-page${props.padding === true ? " q-layout-padding" : ""}`
    );
    return () => h("main", {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
const _sfc_main$1 = defineComponent({
  __name: "ExampleComponent",
  props: {
    title: {},
    todos: { default: () => [] },
    meta: {},
    active: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const clickCount = ref(0);
    function increment() {
      clickCount.value += 1;
      return clickCount.value;
    }
    const todoCount = computed(() => props.todos.length);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", null, toDisplayString(_ctx.title), 1),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.todos, (todo) => {
            return openBlock(), createElementBlock("li", {
              key: todo.id,
              onClick: increment
            }, toDisplayString(todo.id) + " - " + toDisplayString(todo.content), 1);
          }), 128))
        ]),
        createBaseVNode("p", null, "Count: " + toDisplayString(todoCount.value) + " / " + toDisplayString(_ctx.meta.totalCount), 1),
        createBaseVNode("p", null, "Active: " + toDisplayString(_ctx.active ? "yes" : "no"), 1),
        createBaseVNode("p", null, "Clicks on todos: " + toDisplayString(clickCount.value), 1)
      ]);
    };
  }
});
var ExampleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "ExampleComponent.vue"]]);
const _sfc_main = defineComponent({
  __name: "IndexPage",
  setup(__props) {
    const todos = ref([
      {
        id: 1,
        content: "ct1"
      },
      {
        id: 2,
        content: "ct2"
      },
      {
        id: 3,
        content: "ct3"
      },
      {
        id: 4,
        content: "ct4"
      },
      {
        id: 5,
        content: "ct5"
      }
    ]);
    const meta = ref({
      totalCount: 1200
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
        default: withCtx(() => [
          createVNode(ExampleComponent, {
            title: "Example component",
            active: "",
            todos: todos.value,
            meta: meta.value
          }, null, 8, ["todos", "meta"])
        ]),
        _: 1
      });
    };
  }
});
var IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "IndexPage.vue"]]);
export { IndexPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhQYWdlLmMzMmZlNjc1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2UuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9FeGFtcGxlQ29tcG9uZW50LnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9JbmRleFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgcGFnZUNvbnRhaW5lcktleSwgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgcGFkZGluZzogQm9vbGVhbixcbiAgICBzdHlsZUZuOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlIG5lZWRzIHRvIGJlIGEgZGVlcCBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3QgJHBhZ2VDb250YWluZXIgPSBpbmplY3QocGFnZUNvbnRhaW5lcktleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJHBhZ2VDb250YWluZXIgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFQYWdlQ29udGFpbmVyJylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBvZmZzZXRcbiAgICAgICAgPSAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgPyAkbGF5b3V0LmhlYWRlci5zaXplIDogMClcbiAgICAgICAgKyAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgPyAkbGF5b3V0LmZvb3Rlci5zaXplIDogMClcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgICAgOiAkcS5zY3JlZW4uaGVpZ2h0XG5cbiAgICAgICAgcmV0dXJuIHByb3BzLnN0eWxlRm4ob2Zmc2V0LCBoZWlnaHQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbkhlaWdodDogJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gKCRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlIC0gb2Zmc2V0KSArICdweCdcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgJHEuc2NyZWVuLmhlaWdodCA9PT0gMFxuICAgICAgICAgICAgICAgID8gKG9mZnNldCAhPT0gMCA/IGBjYWxjKDEwMHZoIC0gJHsgb2Zmc2V0IH1weClgIDogJzEwMHZoJylcbiAgICAgICAgICAgICAgICA6ICgkcS5zY3JlZW4uaGVpZ2h0IC0gb2Zmc2V0KSArICdweCdcbiAgICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1wYWdlJHsgcHJvcHMucGFkZGluZyA9PT0gdHJ1ZSA/ICcgcS1sYXlvdXQtcGFkZGluZycgOiAnJyB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdtYWluJywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cD57eyB0aXRsZSB9fTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgdi1mb3I9XCJ0b2RvIGluIHRvZG9zXCIgOmtleT1cInRvZG8uaWRcIiBAY2xpY2s9XCJpbmNyZW1lbnRcIj5cbiAgICAgICAge3sgdG9kby5pZCB9fSAtIHt7IHRvZG8uY29udGVudCB9fVxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxwPkNvdW50OiB7eyB0b2RvQ291bnQgfX0gLyB7eyBtZXRhLnRvdGFsQ291bnQgfX08L3A+XG4gICAgPHA+QWN0aXZlOiB7eyBhY3RpdmUgPyAneWVzJyA6ICdubycgfX08L3A+XG4gICAgPHA+Q2xpY2tzIG9uIHRvZG9zOiB7eyBjbGlja0NvdW50IH19PC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFRvZG8sIE1ldGEgfSBmcm9tICcuL21vZGVscyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRvZG9zPzogVG9kb1tdO1xuICBtZXRhOiBNZXRhO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczxQcm9wcz4oKSwge1xuICB0b2RvczogKCkgPT4gW10sXG59KTtcblxuY29uc3QgY2xpY2tDb3VudCA9IHJlZigwKTtcbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgY2xpY2tDb3VudC52YWx1ZSArPSAxO1xuICByZXR1cm4gY2xpY2tDb3VudC52YWx1ZTtcbn1cblxuY29uc3QgdG9kb0NvdW50ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudG9kb3MubGVuZ3RoKTtcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5XCI+XG4gICAgPGV4YW1wbGUtY29tcG9uZW50XG4gICAgICB0aXRsZT1cIkV4YW1wbGUgY29tcG9uZW50XCJcbiAgICAgIGFjdGl2ZVxuICAgICAgOnRvZG9zPVwidG9kb3NcIlxuICAgICAgOm1ldGE9XCJtZXRhXCJcbiAgICA+PC9leGFtcGxlLWNvbXBvbmVudD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgVG9kbywgTWV0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9kZWxzJztcbmltcG9ydCBFeGFtcGxlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvRXhhbXBsZUNvbXBvbmVudC52dWUnO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcblxuY29uc3QgdG9kb3MgPSByZWY8VG9kb1tdPihbXG4gIHtcbiAgICBpZDogMSxcbiAgICBjb250ZW50OiAnY3QxJ1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgY29udGVudDogJ2N0MidcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGNvbnRlbnQ6ICdjdDMnXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjb250ZW50OiAnY3Q0J1xuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgY29udGVudDogJ2N0NSdcbiAgfVxuXSk7XG5jb25zdCBtZXRhID0gcmVmPE1ldGE+KHtcbiAgdG90YWxDb3VudDogMTIwMFxufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLElBQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsRUFDVjtBQUFBLEVBRUQsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUN2QixVQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUksRUFBQSxJQUFLLG1CQUFvQjtBQUU5QyxVQUFNLFVBQVUsT0FBTyxXQUFXLGFBQWE7QUFDL0MsUUFBSSxZQUFZLGVBQWU7QUFDN0IsY0FBUSxNQUFNLDJDQUEyQztBQUN6RCxhQUFPO0FBQUEsSUFDUjtBQUVELFVBQU0saUJBQWlCLE9BQU8sa0JBQWtCLGFBQWE7QUFDN0QsUUFBSSxtQkFBbUIsZUFBZTtBQUNwQyxjQUFRLE1BQU0sMkNBQTJDO0FBQ3pELGFBQU87QUFBQSxJQUNSO0FBRUQsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixZQUFNLFVBQ0QsUUFBUSxPQUFPLFVBQVUsT0FBTyxRQUFRLE9BQU8sT0FBTyxNQUN0RCxRQUFRLE9BQU8sVUFBVSxPQUFPLFFBQVEsT0FBTyxPQUFPO0FBRTNELFVBQUksT0FBTyxNQUFNLFlBQVksWUFBWTtBQUN2QyxjQUFNLFNBQVMsUUFBUSxZQUFZLFVBQVUsT0FDekMsUUFBUSxnQkFBZ0IsUUFDeEIsR0FBRyxPQUFPO0FBRWQsZUFBTyxNQUFNLFFBQVEsUUFBUSxNQUFNO0FBQUEsTUFDcEM7QUFFRCxhQUFPO0FBQUEsUUFDTCxXQUFXLFFBQVEsWUFBWSxVQUFVLE9BQ3BDLFFBQVEsZ0JBQWdCLFFBQVEsU0FBVSxPQUV6QyxHQUFHLE9BQU8sV0FBVyxJQUNoQixXQUFXLElBQUksZ0JBQWlCLGNBQWUsVUFDL0MsR0FBRyxPQUFPLFNBQVMsU0FBVTtBQUFBLE1BRXpDO0FBQUEsSUFDUCxDQUFLO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QixTQUFVLE1BQU0sWUFBWSxPQUFPLHNCQUFzQjtBQUFBLElBQzFEO0FBRUQsV0FBTyxNQUFNLEVBQUUsUUFBUTtBQUFBLE1BQ3JCLE9BQU8sUUFBUTtBQUFBLE1BQ2YsT0FBTyxNQUFNO0FBQUEsSUFDbkIsR0FBTyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEI7QUFDSCxDQUFDOzs7Ozs7Ozs7OztBQ2xDSyxVQUFBLGFBQWEsSUFBSSxDQUFDO0FBQ3hCLGFBQVMsWUFBWTtBQUNuQixpQkFBVyxTQUFTO0FBQ3BCLGFBQU8sV0FBVztBQUFBLElBQ3BCO0FBRUEsVUFBTSxZQUFZLFNBQVMsTUFBTSxNQUFNLE1BQU0sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm5ELFVBQU0sUUFBUSxJQUFZO0FBQUEsTUFDeEI7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUFBLENBQ0Q7QUFDRCxVQUFNLE9BQU8sSUFBVTtBQUFBLE1BQ3JCLFlBQVk7QUFBQSxJQUFBLENBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
