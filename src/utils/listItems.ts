import moonstoneImg from '../assets/rock_1.png';
import sapphireImg from '../assets/rock_2.png';

export interface listItemsInterface {
  key: string;
  image?: string;
  title?: string;
  description?: string;
}

export const listItems = [
  {
    key: 'left-spacer',
  },
  {
    key: '1',
    image: moonstoneImg,
    title: 'Moonstone Keychain',
    description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
  },
  {
    key: '2',
    image: sapphireImg,
    title: 'Sapphire Keychain',
    description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
  },
  {
    key: '3',
    title: 'Add a Wearable',
    description:
      'Don’t See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry',
  },
  {
    key: 'right-spacer',
  },
];

export default listItems;
