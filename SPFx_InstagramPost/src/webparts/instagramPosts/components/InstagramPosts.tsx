import * as React from 'react';
import styles from './InstagramPosts.module.scss';
import { IInstagramPostsProps } from '../../../models/IInstagramPostsProps';
import { FC, useEffect, useState } from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { GlobalProvider } from '../../../core/InstagramPosts.context';
import { DataServiceGraph, IDataService } from '../../../services';
import { useConstructor } from '../../../core/hooks';
import { IInstagramPost} from '../../../models/IInstagramPost';
import InstagramPostShimmer from './InstagramPostShimmer';
import { InstagramEmbed } from 'react-social-media-embed';

export const InstagramPosts: FC<IInstagramPostsProps> = (props: IInstagramPostsProps) => {
  const [dataService, setDataService] = useState<IDataService>();
  const [InstagramPosts, setInstagramPosts] = useState<IInstagramPost[]>();
  const [errorLoadingInstagramPosts, setErrorLoadingInstagramPosts] = useState();

  const createDataService = (): void => {
      setDataService(new DataServiceGraph(props.context));
  }

  useConstructor(() => {
    createDataService();
  });

  useEffect(() => {
    createDataService();
    dataService.getInstagramPosts("")
    .then(setInstagramPosts)
    .catch(err => {
      setErrorLoadingInstagramPosts(err);
      console.log(err);
    });
    return () => {
      setErrorLoadingInstagramPosts(undefined);
    };
  }, []);

  const {
    webPartProperties,
  } = props;

  return (
    <GlobalProvider dataService={dataService} webPartProperties={webPartProperties}>
          <section className={`${styles.InstagramPosts}`}>
          <div className={styles.welcome}>
            <h2>Instagram Posts!</h2>
          </div>
          <div>
      {
        errorLoadingInstagramPosts &&
        <MessageBar messageBarType={MessageBarType.error}>Error loading news pages</MessageBar>
      }
      {
        !errorLoadingInstagramPosts && InstagramPosts === undefined && [1, 2, 3].map(i =>
          <InstagramPostShimmer key={i} />
        )
      }
      {
        InstagramPosts?.length > 0 && InstagramPosts.map((InstagramPost, index) =>
          <div style={{ display: 'flex', justifyContent: 'center' }} key={index}><InstagramEmbed url={InstagramPost.permalink} width={328} /></div>
        )
      }
      {
        InstagramPosts?.length === 0 &&
        <MessageBar>We currently do not have any instagram posts. Please create some news.</MessageBar>
      }
       
      </div>
         
        </section>
      </GlobalProvider>
    )
  //}
}
