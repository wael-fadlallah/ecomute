import { View } from 'react-native';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const getIcon = (props) => {
  const { type } = props;
  return (
    <View style={{ justifyContent: 'center' }}>
      <OcticonsIcon name={type} size={30} color="blue" />
    </View>
  );
};

export const getIconAsImage = ({
  type,
  size,
  color,
  iconFamily,
}: {
  type: string;
  size: number;
  color: string;
  iconFamily?: string | undefined;
}) => getIconFamily(iconFamily).getImageSourceSync(type, size, color);


const getIconFamily = (iconFamily: string) => {
  switch(iconFamily){
    case 'FontAwesome':
      return FontAwesomeIcon;
    case 'FontAwesome5':
      return FontAwesome5Icon;
    case 'Octicons':
      return OcticonsIcon;
    default:
      return FontAwesomeIcon;
  }
};
