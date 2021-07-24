import styled from 'styled-components/native';

export const Container = styled.View`
  height: auto;
  width: 84%;

  border-radius: ${(props) => props.theme.borderRadius};
  padding: 16px;

  background-color: ${(props) => props.theme.colors.background};
`;
