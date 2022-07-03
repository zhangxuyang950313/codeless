import { ProjectStatus } from "../enums";

export interface IViewOption {
  viewId: string;
  title: string;
  urlPath: string;
}

export interface IRouterOption {
  base: string;
  // 路由模式
  mode: "hash" | "history" | "memory";
  // 路由页面
  views: Array<IViewOption>;
}

export interface IDatasetsSchema {
  key: string;
  define: string;
}

// TODO
export interface IDatasetsConsumer {
  key: string;
  define: string;
}

// 持久化数据
export interface IProjectSchema {
  id: string;
  title: string;
  version: string;
  status: ProjectStatus;
  description: string;
  router: IRouterOption;
  datasets: IDatasetsSchema[];
  createdUser: string;
  updatedUser: string;
  createdAt: string;
  updatedAt: string;
}

// 创建
export interface ICreateProjectParams {
  title: string;
  description: string;
}

// 更新
export interface IUpdateProjectParams {
  id: string;
  title?: string;
  version?: string;
  description?: string;
  router?: IRouterOption;
  datasets?: IDatasetsSchema[];
}

// 查找
export interface IFindProjectsParams {
  id?: string;
  title?: string;
  status?: ProjectStatus;
  createdUser?: string;
  updatedUser?: string;
  createdTimeRange?: [number, number];
  updatedTimeRange?: [number, number];
}
