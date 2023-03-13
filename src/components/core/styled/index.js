import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
`;

export const Flex = styled.div`
  display: ${({ display }) => display};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  color: #000;
`;
