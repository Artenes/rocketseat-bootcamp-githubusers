import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
