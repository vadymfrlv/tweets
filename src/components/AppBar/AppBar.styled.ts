import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  z-index: ${p => p.theme.zIndices[4]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 30px;

  height: 28px;
  width: 100%;

  text-transform: uppercase;

  color: ${p => p.theme.colors.greyViolet};
  background-image: ${p => p.theme.colors.addGradient};
  box-shadow: ${p => p.theme.shadows.addLight};
`;
