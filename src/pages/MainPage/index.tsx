import React, { useRef } from 'react';

import { Animated, Platform, View } from 'react-native';

import {
  Container,
  BlankImage,
  AvatarContainer,
  AvatarImage,
  AvatarName,
  NotificationContainer,
  NotificationText,
  CarouselContainer,
  CarouselCard,
  CarouselCardImage,
  CarouselCardTitle,
  CarouselCardDescription,
  CarouselCardButton,
  CarouselCardButtonText,
  CarouselAddWearableCardImage,
  CarouselAddWearableCardTitle,
  CarouselAddWearableCardDescription,
  DotsContainer,
  DotsText,
  FooterContainer,
  FooterItem,
  FooterItemIcon,
  FooterItemText,
  FooterItemTextActive,
} from './styles';

import {
  ITEM_SIZE,
  SPACER_ITEM_SIZE,
  SPACING,
  width,
  height,
  duration,
} from '../../utils/globalConsts';

import listItems from '../../utils/listItems';

import backgroundImg from '../../assets/background.png';
import avatarImg from '../../assets/avatar-image.png';

import addIconImg from '../../assets/add-icon.png';
import wearablesImg from '../../assets/wearables-icon.png';
import faceImg from '../../assets/face-icon.png';
import helpImg from '../../assets/help-icon.png';

const MainPage: React.FC = () => {
  const scaleYValue = useRef(new Animated.Value(0.86)).current;
  const translateYValue = useRef(new Animated.Value(0)).current;
  const translateXValue = useRef(new Animated.Value(0)).current;
  const translateWhiteBoxYValue = useRef(new Animated.Value(0)).current;
  const opacityItemsFadeinValue = useRef(new Animated.Value(0)).current;
  const translateYItemsValue = useRef(new Animated.Value(150)).current;
  const translateXCardValue = useRef(new Animated.Value(400)).current;
  const scaleImageCardValue = useRef(new Animated.Value(0.2)).current;
  const translateYTextCardValue = useRef(new Animated.Value(40)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  Animated.timing(scaleYValue, {
    useNativeDriver: true,
    toValue: 1,
    duration,
  }).start();

  Animated.timing(translateYValue, {
    useNativeDriver: true,
    toValue: -233,
    duration,
  }).start();

  Animated.timing(translateXValue, {
    useNativeDriver: true,
    toValue: -70,
    duration,
  }).start();

  Animated.timing(translateWhiteBoxYValue, {
    useNativeDriver: true,
    toValue: -330,
    duration,
  }).start();

  Animated.timing(opacityItemsFadeinValue, {
    useNativeDriver: true,
    toValue: 1,
    duration,
  }).start();

  Animated.timing(translateYItemsValue, {
    useNativeDriver: true,
    toValue: 0,
    duration,
  }).start();

  Animated.timing(translateXCardValue, {
    useNativeDriver: true,
    toValue: 0,
    duration,
  }).start();

  Animated.timing(scaleImageCardValue, {
    useNativeDriver: true,
    toValue: 1,
    duration,
  }).start();

  Animated.timing(translateYTextCardValue, {
    useNativeDriver: true,
    toValue: 1,
    duration,
  }).start();

  const Indicator = () => {
    return (
      <DotsContainer>
        {listItems.map((item, index) => {
          if (item.title && item.image) {
            const inputRange = [
              (index - 2) * width,
              (index - 1) * width,
              index * width,
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.5, 1.0, 0],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{ transform: [{ scale }] }}
                key={`indicator-${item.key}`}
              >
                <DotsText style={{ color: '#A0A9B8' }}>⬤</DotsText>
              </Animated.View>
            );
          }
          return null;
        })}
      </DotsContainer>
    );
  };

  return (
    <Container>
      <Animated.View
        style={{
          transform: [
            {
              translateY: translateYValue,
              scaleY: scaleYValue,
              translateX: translateXValue,
            },
          ],
        }}
      >
        <Animated.Image
          source={backgroundImg}
          style={{
            position: 'absolute',
          }}
        />
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateWhiteBoxYValue,
              },
            ],
          }}
        >
          <BlankImage />
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          opacity: opacityItemsFadeinValue,
          transform: [
            {
              translateY: translateYItemsValue,
            },
          ],
        }}
      >
        <AvatarContainer>
          <AvatarImage source={avatarImg} />
          <AvatarName>Lottie Curtis</AvatarName>
        </AvatarContainer>

        <NotificationContainer>
          <NotificationText>You have 3 Products</NotificationText>
        </NotificationContainer>
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateXCardValue,
            },
          ],
        }}
      >
        <CarouselContainer style={{ width, height }}>
          <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={listItems}
            style={{ width, height }}
            keyExtractor={item => item.key}
            horizontal
            bounces={false}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.8}
            renderToHardwareTextureAndroid
            contentContainerStyle={{ alignItems: 'center' }}
            snapToInterval={ITEM_SIZE}
            snapToAlignment="start"
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
              ];

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [50, 0, 50],
                extrapolate: 'clamp',
              });

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
              });

              if (!item.title) {
                return (
                  <View
                    style={{
                      width: SPACER_ITEM_SIZE,
                    }}
                  />
                );
              }

              if (item.key !== '3') {
                return (
                  <Animated.View
                    style={{
                      width: ITEM_SIZE,
                      transform: [{ translateY }],
                      marginHorizontal: SPACING,
                      padding: SPACING * 2,
                      alignItems: 'center',
                    }}
                  >
                    <CarouselCard key={item.key}>
                      <Animated.View style={{ transform: [{ scale }] }}>
                        <CarouselCardImage source={item.image} />
                      </Animated.View>
                      <Animated.View
                        style={{
                          opacity: opacityItemsFadeinValue,
                          transform: [{ translateY: translateYTextCardValue }],
                        }}
                      >
                        <CarouselCardTitle>{item.title}</CarouselCardTitle>
                        <CarouselCardDescription>
                          {item.description}
                        </CarouselCardDescription>
                      </Animated.View>
                      <Animated.View
                        style={{
                          opacity: opacityItemsFadeinValue,
                          transform: [{ translateY: translateYTextCardValue }],
                        }}
                      >
                        <CarouselCardButton>
                          <CarouselCardButtonText>View</CarouselCardButtonText>
                        </CarouselCardButton>
                      </Animated.View>
                    </CarouselCard>
                  </Animated.View>
                );
              }

              return (
                <Animated.View
                  style={{
                    width: ITEM_SIZE,
                    transform: [{ translateY }],
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    alignItems: 'center',
                  }}
                >
                  <CarouselCard key={item.key}>
                    <CarouselAddWearableCardImage source={addIconImg} />
                    <CarouselAddWearableCardTitle>
                      {item.title}
                    </CarouselAddWearableCardTitle>
                    <CarouselAddWearableCardDescription>
                      {item.description}
                    </CarouselAddWearableCardDescription>
                  </CarouselCard>
                </Animated.View>
              );
            }}
          />
        </CarouselContainer>
      </Animated.View>
      <Animated.View
        style={{ transform: [{ translateY: translateYItemsValue }] }}
      >
        <Indicator />
        <FooterContainer>
          <FooterItem>
            <FooterItemIcon source={wearablesImg} />
            <FooterItemTextActive>Wearables</FooterItemTextActive>
          </FooterItem>
          <FooterItem>
            <FooterItemIcon source={faceImg} />
            <FooterItemText>Profile</FooterItemText>
          </FooterItem>
          <FooterItem>
            <FooterItemIcon source={helpImg} />
            <FooterItemText>Help</FooterItemText>
          </FooterItem>
        </FooterContainer>
      </Animated.View>
    </Container>
  );
};

export default MainPage;
