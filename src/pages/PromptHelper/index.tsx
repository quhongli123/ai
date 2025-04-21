/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:11:22
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-19 10:33:50
 * @FilePath: /AI/src/pages/PromptHelper/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const GradientBackground = styled(Box)({
  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  minHeight: '100vh',
  padding: '30px 0',
  
});
const IframeContainer = styled(Box)({
  width: '97%',
  height: 'calc(100vh - 180px)',
  borderRadius: '16px',
  margin: '0 auto',
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  '& iframe': {
    width: '100%',
    height: '100%',
      

    border: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

const PromptHelper = () => {
  return (
    <GradientBackground>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'center',
          color: '#fff',
          marginBottom: '40px',
          fontWeight: 600,
        }}
      >
        提示词助手
      </Typography>
      <IframeContainer>
        <iframe
          src="https://bf80d84e445b6cc97a.gradio.live/"
          title="语音克隆工坊"
          allow="camera;microphone"
          loading="lazy"
        />
      </IframeContainer>
    </GradientBackground>
  );
};

export default PromptHelper; 