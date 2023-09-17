import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

export type RootStackParamList = {
    Home: undefined;
    Referrel: undefined;
    TestAssessment: undefined;
    PhoneCode: undefined,
    CodeConfirmation: undefined,
    PhoneCodeSent: undefined,
    CountryResidence: undefined,
    CreateShigaID: undefined,
    CreateShigaIdII: undefined,
    DisplayImage: undefined,
    UploadImage: undefined,
    Dashboard:undefined
  };

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type ReferrelScreenRouteProp = RouteProp<RootStackParamList, 'Referrel'>;
export type ReferrelScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Referrel'>;

export type TestAssessmentScreenRouteProp = RouteProp<RootStackParamList, 'TestAssessment'>;
export type TestAssessmentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TestAssessment'>; 

export type PhoneCodeSentRouteProp = RouteProp<RootStackParamList, 'PhoneCode'>;
export type PhoneCodeSentNavigationProp = StackNavigationProp<RootStackParamList, 'PhoneCode'>; 

export type ConfirimCodeScreenRouteProp = RouteProp<RootStackParamList, 'CodeConfirmation'>;
export type ConfirimCodeNavigationProp = StackNavigationProp<RootStackParamList, 'CodeConfirmation'>; 

export type CountryResidenceScreenRouteProp = RouteProp<RootStackParamList, 'CountryResidence'>;
export type CountryResidenceNavigationProp = StackNavigationProp<RootStackParamList, 'CountryResidence'>; 

export type CreateShigaIDScreenRouteProp = RouteProp<RootStackParamList, 'CreateShigaID'>;
export type CreateShigaIDNavigationProp = StackNavigationProp<RootStackParamList, 'CreateShigaID'>; 

export type CreateShigaIDIIScreenRouteProp = RouteProp<RootStackParamList, 'CreateShigaIdII'>;
export type CreateShigaIDIINavigationProp = StackNavigationProp<RootStackParamList, 'CreateShigaIdII'>;

export type DisplayImageScreenRouteProp = RouteProp<RootStackParamList, 'DisplayImage'>;
export type DisplayImageNavigationProp = StackNavigationProp<RootStackParamList, 'DisplayImage'>; 

export type UploadImageScreenRouteProp = RouteProp<RootStackParamList, 'UploadImage'>;
export type UploadImageNavigationProp = StackNavigationProp<RootStackParamList, 'UploadImage'>; 

export type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'UploadImage'>;
export type DashboardNavigationProp = StackNavigationProp<RootStackParamList, 'UploadImage'>; 

export type HomeScreenProps = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
};

export type ReferrelScreenProps = {
  route: ReferrelScreenRouteProp;
  navigation: ReferrelScreenNavigationProp;
};

export type TestAssessmentScreenProps = { // Define the props for TestAssessment screen
  route: TestAssessmentScreenRouteProp;
  navigation: TestAssessmentScreenNavigationProp;
};

export type PhoneCodeSentProps = { 
  route: PhoneCodeSentRouteProp;
  navigation: PhoneCodeSentNavigationProp;
};


export type ConfirmCodeScreenProps = {
  route: ConfirimCodeScreenRouteProp;
  navigation: ConfirimCodeNavigationProp;
};

export type CountryResidenceScreenProps = {
  route: CountryResidenceScreenRouteProp;
  navigation: CountryResidenceNavigationProp;
};

export type CreateShigaIDScreenProps = {
  route: CreateShigaIDScreenRouteProp;
  navigation: CreateShigaIDNavigationProp;
};

export type CreateShigaIDIIScreenProps = {
  route: CreateShigaIDIIScreenRouteProp;
  navigation: CreateShigaIDIINavigationProp;
};

export type DisplayImageScreenProps = {
  route: DisplayImageScreenRouteProp;
  navigation: DisplayImageNavigationProp;
};

export type UploadImageScreenProps = {
  route: UploadImageScreenRouteProp;
  navigation: UploadImageNavigationProp;
};

export type DashboardScreenProps = {
  route: DashboardScreenRouteProp;
  navigation: DashboardNavigationProp;
};