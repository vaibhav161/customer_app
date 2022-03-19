import React, {useState} from 'react';
import AgoraUIKit, {mode, role} from 'agora-rn-uikit';
import ChatRoom from './ChatRoom';
import {ScrollView} from 'react-native';
const GoLive = ({navigation}) => {
  // const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: 'a457c62a9459477aba4b1ba9a1cecf31',
    channel: 'test',
    role: role.Audience,
    mode: mode.LiveBroadcasting,
  };
  const callbacks = {EndCall: () => navigation.navigate('Home')};
  return (
    <ScrollView>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
      <ChatRoom />
    </ScrollView>
  );
};
export default GoLive;
