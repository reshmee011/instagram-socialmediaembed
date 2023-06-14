import * as React from 'react';
import { useContext, createContext } from 'react';
import { IInstagramPostsContext, IInstagramPostsContextProps } from '../models';

export const InstagramPostsContext = createContext<IInstagramPostsContext>(null);

export const useGlobalContext = () : IInstagramPostsContext => useContext<IInstagramPostsContext>(InstagramPostsContext);

export const GlobalProvider = (props: IInstagramPostsContextProps) : JSX.Element => {
    return (
        <InstagramPostsContext.Provider value={{ dataService: props.dataService, webPartProperties: props.webPartProperties }}>
            {props.children}
        </InstagramPostsContext.Provider>
    );
};