/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  ChatRoom: undefined;
  Modal: undefined;
  Contacts: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type MainTabParamList = {
  Home: undefined;
  Messages: undefined;
  Account: undefined;
  ChatRoom: undefined;
};

export type RootTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type User = {
  id: String;
  userType: Number;
  firstName: String;
  lastName: String;
  imageUri: String;
  status: String;
  subscriptions: Subscription;
};
export type Gym = {
  id: String;
  gymName: String;
  imageUri: String;
  users: User;
};
export type Subscription = {
  id: String;
  user: [User];
  startDate: String;
  duration: String;
  type: Number;
  gym: Gym;
  gymName: String;
  imageUri: String;
};

export type Message = {
  id: String;
  user: User;
  content: string;
  createdAt: string;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
