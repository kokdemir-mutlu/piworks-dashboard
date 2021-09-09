export interface BuildNumberDetail{
  buildNumber: string;
  overview : string;
  changes : string[];
  tests: string[];
  buildLog: string;
  parameters: string[];
  issues: string[];
  artifacts: string[];
  nugetPackages: string[];
  zipSecurity: string;
}
