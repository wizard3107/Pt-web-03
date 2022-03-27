import styled from 'styled-components'
export const AppWrapper = styled.div`
  border:1px solid black;
  padding:2em;
  display:grid;
  grid-template-columns:120px 120px 120px;
  margin:1em;

  `
export const Link = styled.a`
  text-decoration:none;
  color:${({ color }) => color};
  font-size:${({ fs }) => fs}
  `
