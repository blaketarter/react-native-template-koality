import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import RouterButton from 'react-router-native-button';
import Metrics from '../themes/Metrics';

const Content = styled.View`
  ${Platform.OS === 'android' ? `margin-top: ${Metrics.androidStatusBarHeight};` : ''}
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

const AvatarContainer = styled.View`
  margin: 10;
`;

const ButtonContainer = styled.View`
  margin: 5;
`;

const Info = styled.Text``;

const Avatar = styled.Image`
  height: 150;
  width: 100%;
  border-radius: 50;
  margin: 10;
`;

const LogoutButton = styled.Button`
  width: 100%;
`;

export default ({ user, logout }) => (
  <Content>
    <AvatarContainer>
      <Avatar source={{ uri: user.avatar }} resizeMode="contain" />
      <Info>
        {user.username}
      </Info>
      <Info>
        {`${user.firstName} ${user.lastName}`}
      </Info>
    </AvatarContainer>
    <ButtonContainer>
      <RouterButton to="/settings" title="Settings" />
      <LogoutButton title="Logout" onPress={logout} />
    </ButtonContainer>
  </Content>
);
