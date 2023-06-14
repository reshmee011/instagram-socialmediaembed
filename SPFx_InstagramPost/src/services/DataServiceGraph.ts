import { User} from '@microsoft/microsoft-graph-types';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { IDataService } from './IDataService';
import { IInstagramPost } from '../models/IInstagramPost';

export class DataServiceGraph implements IDataService {
    private wpContext: WebPartContext;

    public constructor(wpContext: WebPartContext) {
        this.wpContext = wpContext;
    }

    async getMyProfile(): Promise<User> {
        try {
            const client = await this.wpContext.msGraphClientFactory.getClient('3');
            const response = await client.api('/me').get();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getInstagramPosts(sitePath:string): Promise<IInstagramPost[]> {
        const client = await this.wpContext.msGraphClientFactory.getClient('3');
        let instagramPosts: IInstagramPost[];

        try {
            const data = await client.api(`/sites/e2724039-6a7b-4fd3-b02f-90fb83dc14a1/lists/451ec7fd-7430-4d57-a2b8-b871a80cb380/items`).version('v1.0')
                .expand('fields($select=id,mediaType,mediaUrl,Caption,permalink)')
                .get();

                instagramPosts = data.value.map((p:  {
                    id: string;
                    fields: {
                        mediaType: string;
                        mediaUrl: string;
                        Caption: string;
                        permalink: string;
                    };
                })=> ({
                id: p.id,
                media_type: p.fields.mediaType,
                media_url: p.fields.mediaUrl,
                caption: p.fields.Caption,
                permalink: p.fields.permalink
            } as IInstagramPost));
            
        } catch (error) {
            console.log(error);
        }

       return instagramPosts;
    }
}
