import styled from "styled-components";
export const Container = styled.div<{
  open: Boolean,
}>`
  flex-grow: 1;
  width: ${({ open }) => (open ? "calc(100% - 240px)" : "calc(100% - 95px)")};
  margin: auto 0px auto auto;
  transition: ease-in-out width 0.3s;
  background: ${({ theme }) => theme.palette.background.default};
  padding-top: 20px;
  min-height: 100vh;
 
`;
export const Content = styled.div`
  padding: 40px 15px;
  min-height: 55vh;
`;
