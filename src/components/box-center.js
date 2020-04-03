import Box from './box';
import styled from 'styled-components';

const BoxCenter = styled(Box)({});
BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export default BoxCenter;
