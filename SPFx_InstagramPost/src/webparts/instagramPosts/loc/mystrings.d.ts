declare interface IInstagramPostsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ServiceFieldLabel: string;

  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppLocalEnvironmentOffice: string;
  AppLocalEnvironmentOutlook: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
  AppOfficeEnvironment: string;
  AppOutlookEnvironment: string;
  NumberOfPostsToDisplayPerViewFieldLabel:string;
}

declare module 'InstagramPostsWebPartStrings' {
  const strings: IInstagramPostsWebPartStrings;
  export = strings;
}
