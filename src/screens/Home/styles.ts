import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  text-shadow: ${({ theme }) => `1px 1px 2px ${theme.colors.secondary}`};
  font-size: 75px;
  line-height: 80px;
`;

export const ImageLogo = styled.Image`
  width: 220px;
  height: 220px;
  object-fit: contain;
`;
