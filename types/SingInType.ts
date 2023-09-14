import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';

export type SignInType = {
  onLogin: (success: boolean) => void;
  navigation: StackNavigationProp<RootStackParamList, 'Вход'>;
};
