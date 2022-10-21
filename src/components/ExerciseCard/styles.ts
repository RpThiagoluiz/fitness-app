import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: ${({ theme }) => `1px ${theme.colors.success_light} solid`};
  border-radius: 10px;
  height: 100px;
`;

export const TitleWrapper = styled.View`
  flex-wrap: wrap;
  padding: ${RFValue(10)}px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(20)}px;
`;

export const ImageWrapper = styled.View``;

export const Image = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
`;
