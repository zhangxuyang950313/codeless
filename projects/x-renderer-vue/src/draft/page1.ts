// import { PageVO } from "projects/x-server/src/database/modal/page";
import { NodeTypes } from "packages/x-nodes";
export const host = process.env.NODE_ENV !== "production" ? "127.0.0.1:7890" : "119.91.65.70:3000";

export const page1 = {
  pageId: "page_1",
  title: "按钮页",
  version: "0.0.1",
  createUser: "",
  updateUser: "",
  schema: {
    type: NodeTypes.Page,
    title: "按钮页",
    material: {
      type: NodeTypes.Material,
      id: "m_1",
      key: "m_key",
      title: "按钮",
      version: "0.0.1",
      src: `http://${host}/static/components/arco/Button.js`,
      // src: `http://${host}/static/components/common/EmptyContainer.js`,
      // style: {
      //   type: 'Function',
      //   value: `function () {
      //     return {
      //       margin: '0 10px'
      //     }
      //   }()`
      // },
      // style: {
      //   type: 'Object',
      //   properties: {
      //     margin: {
      //       type: 'String',
      //       value: '0 10px'
      //     }
      //   }
      // },
      // style: {
      //   type: NodeTypes.ReactiveByPinia,
      //   path: "dataset1.style"
      // },
      style: {
        type: NodeTypes.Object,
        properties: {}
      },
      commonProps: {
        type: NodeTypes.Object,
        properties: {}
      },
      props: {
        type: NodeTypes.Object,
        properties: {
          type: {
            type: NodeTypes.String,
            value: "primary"
          },
          // loading: {
          //   type: NodeTypes.ReactiveByPinia,
          //   path: "dataset1.tableLoading"
          // },
          onClick: {
            type: NodeTypes.Function,
            code: `async function (e) {
            console.log("this", this)
            console.log("context", context)
            console.log("e", e)
            context.piniaRecord.dataset1.tableLoading = !context.piniaRecord.dataset1.tableLoading;
            context.piniaRecord.dataset1.style.margin = "0";
            await new Promise((resolve) => setTimeout(resolve, 1000));
            context.piniaRecord.dataset1.tableLoading = false;
            context.piniaRecord.dataset1.style.margin = "0 100px";
          }`,
            useStrict: false
          }
        }
      },
      slots: {
        type: NodeTypes.Object,
        properties: {
          default: {
            type: NodeTypes.Array,
            elements: []
          }
        }
      },
      emits: {
        type: NodeTypes.Array,
        elements: []
      },
      listeners: {
        type: NodeTypes.Array,
        elements: []
      }
    }
  }
};
