import { Dimensions, Platform } from 'react-native';

export const { width } = Dimensions.get('window');
export const height = width * 1.5;

export const SPACING = 5;
export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.68;
export const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const duration = 1000;
