import * as React from 'react';
import { IDataService } from '../services/IDataService';
import { IInstagramPostsWebPartProps } from './IInstagramPostsWebPartProps';

export interface IInstagramPostsContextProps {
    children: React.ReactNode;
    webPartProperties: IInstagramPostsWebPartProps,
    dataService: IDataService;
}