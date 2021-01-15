import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BlankImage = styled.View`
  top: 930px;
  position: absolute;
  transform: rotate(-17deg);
  width: 200%;
  height: 500px;
  background-color: #fcfcfc;
`;

export const AvatarContainer = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const AvatarImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const AvatarName = styled.Text`
  font-size: 18px;
  line-height: 20px;
  margin-top: 5px;
  font-family: 'Roboto-Bold';
  color: #fff;
`;

export const NotificationContainer = styled.View`
  margin-top: 16px;
  align-items: center;
`;

export const NotificationText = styled.Text`
  background-color: #fff;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  padding: 5px 15px 5px 15px;
  border-radius: 50px;
`;

export const CarouselContainer = styled.View`
  align-content: center;
  align-items: center;
  width: 100%;
`;

export const CarouselCard = styled.View`
  align-items: center;
  justify-content: center;
  height: 352px;
  width: 248px;
  background-color: #ffffff;
  border-radius: 20px;
  resize-mode: cover;
  elevation: 20;
`;

export const CarouselCardImage = styled.Image`
  margin-top: -120px;
`;

export const CarouselAddWearableCardImage = styled.Image`
  margin-bottom: 25px;
`;

export const CarouselCardTitle = styled.Text`
  text-align: center;
  padding-left: 57px;
  padding-right: 57px;
  font-family: 'Roboto-Bold';
  font-size: 25px;
  line-height: 30px;
  color: #4e5b76;
`;

export const CarouselAddWearableCardTitle = styled.Text`
  text-align: center;
  padding-left: 31px;
  padding-right: 31px;
  font-family: 'Roboto-Bold';
  font-size: 25px;
  line-height: 30px;
  color: #4e5b76;
`;

export const CarouselCardDescription = styled.Text`
  margin-top: 20px;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #a0a9b8;
`;

export const CarouselAddWearableCardDescription = styled.Text`
  margin-top: 20px;
  text-align: center;
  padding-left: 34px;
  padding-right: 34px;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #a0a9b8;
`;

export const CarouselCardButton = styled.TouchableOpacity`
  font-family: 'Roboto-Bold';
  margin-top: 43px;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 38px;
  border-radius: 19px;
  background-color: #303371;
`;

export const CarouselAddWearableCardButton = styled.TouchableOpacity`
  font-family: 'Roboto-Bold';
  margin-top: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 38px;
  border-radius: 19px;
  background-color: #303371;
`;

export const CarouselCardButtonText = styled.Text`
  color: #ffff;
`;

export const FooterContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  background-color: #ffff;
  padding-top: 24px;
`;

export const FooterItem = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 42px;
  margin-right: 42px;
`;

export const FooterItemIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const FooterItemText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #a0a9b8;
`;

export const FooterItemTextActive = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: #000;
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  margin-bottom: 70px;
  align-self: center;
`;

export const DotsText = styled.Text`
  color: #424a93;

  margin-left: 10px;
`;
