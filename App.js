import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Music</Text>;

const ChatRoute = () => <Text>Albums</Text>;

const VisitorRoute = () => <Text>Recents</Text>;

const AboutMeRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
    { key: 'chat', title: 'Chat', icon: 'android-messages', color: '#009688' },
    { key: 'visitor', title: 'Visitor', icon: 'history', color: '#795548' },
    { key: 'aboutMe', title: 'About Me', icon: 'account-circle', color: '#607D8B' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    chat: ChatRoute,
    visitor: VisitorRoute,
    aboutMe: AboutMeRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;