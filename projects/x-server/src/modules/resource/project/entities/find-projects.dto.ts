import { IsIn } from "class-validator";
import { ProjectStatus } from "packages/x-core/src/enums";
import { IFindProjectsParams } from "packages/x-core/src/types/dto/project";

export class FindProjectDTO implements IFindProjectsParams {
  id?: string;
  title?: string;
  @IsIn([void 0, ProjectStatus.normal, ProjectStatus.unlink, ProjectStatus.delete], {
    message: ({ value }) => `status 码 "${value}" 不合法`
  })
  status?: ProjectStatus;
  createdUser?: string;
  updatedUser?: string;
  createdTimeRange?: [number, number];
  updatedTimeRange?: [number, number];
}
