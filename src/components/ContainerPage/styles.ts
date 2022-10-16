import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding: ${RFValue(50)}px ${RFValue(25)}px ${RFValue(0)}px;
`;
