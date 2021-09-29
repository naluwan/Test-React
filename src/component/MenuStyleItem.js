import styled from 'styled-components'

const MenuStyleItem = styled.li`
  margin-bottom: 7px;
  padding-left: 26px;
  list-style: none;
  color: ${(props) => (props.color ? props.color : props.theme.color)};
`

MenuStyleItem.defaultProps = {
  theme: {
    color: 'mediumseagreen',
  },
}

export { MenuStyleItem }
