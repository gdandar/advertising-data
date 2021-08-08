import styled from 'styled-components'

const Panel = styled.div<{ blue?: boolean }>`
  background-color: ${(props) => (props.blue ? '#DBEAFE' : 'white')};
  padding: 0 12px;
  border: 1px solid#E5E7EB;
`

export default Panel
