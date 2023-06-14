import * as React from 'react';
import styles from './InstagramPostCard.module.scss';
import { DocumentCard, Shimmer } from "office-ui-fabric-react";
import { FC } from "react";

const InstagramPostCardShimmer: FC = () =>
    <DocumentCard className={styles.InstagramPostCard}>
        <div className={styles.InstagramPostCardContent}>
            <div className={styles.InstagramPostTitle}>
                <p style={{ padding: '1em' }}><Shimmer /></p>
            </div>
            <div className={styles.InstagramPostnfo}>
                <p><Shimmer /></p>
                <p><Shimmer /></p>
            </div>
            <div className={styles.InstagramPostDescription}>
                <p><Shimmer /></p>
                <p><Shimmer /></p>
                <p><Shimmer /></p>
                <p><Shimmer width='50%' /></p>
            </div>
            <div className={styles.InstagramPostFooter}>
                <p style={{ width: '150px', height: '19px', margin: 'auto' }}><Shimmer height="19px" /></p>
            </div>
        </div>
    </DocumentCard>

export default InstagramPostCardShimmer;