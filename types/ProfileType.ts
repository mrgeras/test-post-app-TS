import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';

export type ProfileType = {
  navigation: StackNavigationProp<RootStackParamList, 'Профиль'>;
};
