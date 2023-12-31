import styled from "styled-components";
import { Button, Divider, Space } from "@arco-design/web-react";
import { IconEye, IconHistory, IconLeft, IconSave, IconSend } from "@arco-design/web-react/icon";
// import { routerState } from "src/stores/routerState";
// import { viewState } from "src/stores/viewState";
import RouterSetter from "../RouterSetter";
// import ViewDropDown from "../ViewDropDown";

// 工作区顶栏
const WorkbenchHeader: React.FC = () => {
  // const routerSchema = useRecoilValue(routerState);
  // const view = useRecoilValue(viewState);
  return (
    <StyleWorkbench>
      <div className="left">
        <Button className="back-button" icon={<IconLeft />} type="text" shape="circle" />
        <Divider type="vertical" />
        {/* <ViewDropDown /> */}
        <RouterSetter />
      </div>
      <div className="right">
        <Button icon={<IconSave />} size="small" type="text">
          保存
        </Button>
        <Button icon={<IconHistory />} size="small" type="text">
          历史记录
        </Button>
        <Divider type="vertical" />
        <Space>
          <Button icon={<IconEye />} size="small">
            预览
          </Button>
          <Button icon={<IconSend />} size="small" type="primary">
            发布
          </Button>
        </Space>
      </div>
    </StyleWorkbench>
  );
};

const StyleWorkbench = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--color-bg-1);
  border-bottom: 1px solid var(--color-border-2);
  padding: 0 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    .back-button {
      flex-shrink: 0;
      color: var(--color-text-1);
    }
  }
  .right {
  }
`;

export default WorkbenchHeader;
