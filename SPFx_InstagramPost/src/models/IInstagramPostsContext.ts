import { IDataService } from '../services/IDataService';
import { IInstagramPostsWebPartProps } from './IInstagramPostsWebPartProps';

export interface IInstagramPostsContext {
    webPartProperties: IInstagramPostsWebPartProps,
    dataService: IDataService    
}