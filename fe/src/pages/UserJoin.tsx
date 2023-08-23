import * as React from 'react';
import { Box } from '@mui/material';
import LayoutBeforeLogin from 'components/layout/LayoutBeforeLoginHide';
import SocialWindow from 'components/user/SocialWindow';
import { backgroundStyle, svgWStyle, svgHStyle } from 'styles/userStyle';
import svgW from '../assets/w.svg';
import svgH from '../assets/h.svg';

function UserJoin() {
  return (
    <div>
      <LayoutBeforeLogin>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <SocialWindow title='회원가입' subtitle='소셜 계정으로 간편한 회원가입' hide={true} />
        </Box>
      </LayoutBeforeLogin>
      <div style={backgroundStyle}>
        <img src={svgW} alt="back w" width='320px' height='320px' style={svgWStyle} />
        <img src={svgH} alt="back h" width='320px' height='320px' style={svgHStyle} />
      </div>
    </div>
  );
}

export default UserJoin;