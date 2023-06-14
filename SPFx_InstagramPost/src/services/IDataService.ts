import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { IInstagramPost } from '../models/IInstagramPost';
export interface IDataService {
    getMyProfile(): Promise<MicrosoftGraph.User>;
    getInstagramPosts(sitePath:string): Promise<IInstagramPost[]> ;
}