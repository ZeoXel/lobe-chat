import { Typography } from 'antd';
import Image from 'next/image';
import React, { ReactNode, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import InitProgress, { StageItem } from '@/components/InitProgress';

interface FullscreenLoadingProps {
  activeStage: number;
  contentRender?: ReactNode;
  stages: StageItem[];
}

const FullscreenLoading = memo<FullscreenLoadingProps>(({ activeStage, stages, contentRender }) => {
  return (
    <Flexbox height={'100%'} style={{ position: 'relative', userSelect: 'none' }} width={'100%'}>
      <Center flex={1} gap={16} width={'100%'}>
        <Flexbox align="center" gap={12} horizontal>
          <Image alt="零素觉醒" height={48} src="/images/logo.png" unoptimized width={48} />
          <Typography.Title level={2} style={{ margin: 0 }}>
            零素觉醒
          </Typography.Title>
        </Flexbox>
        {contentRender ? contentRender : <InitProgress activeStage={activeStage} stages={stages} />}
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
