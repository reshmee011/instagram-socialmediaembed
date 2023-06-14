import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IInstagramPostsWebPartProps } from "./IInstagramPostsWebPartProps";

export interface IInstagramPostsProps {
  webPartProperties: IInstagramPostsWebPartProps;
  isDarkTheme: boolean;
  environmentMessage: string;
  userDisplayName: string;
  context: WebPartContext;
  postsLimit: number;
  sitePath:string;
}
