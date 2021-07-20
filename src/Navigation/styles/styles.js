import styled from 'styled-components';


export const Menu = styled.ul`
  display:flex;
  align-items: cneter;
  .left {
      @media screen and (max-width: 850px) {
          display:none;
      }
  }
  #left-logo {
      display:flex;
      align-items: cneter;
      @media screen and (max-width: ${(props) => props.theme.responsive.medium}) {
          display: none;
      }
  }
`;

export const MenuItem = styled.li`
   font-size: 0.9rem;
   transition: all 0.3s ease;
   text-shadow: 1px 1px 2px rgba(20,20,20,0.2);
`

export const RighthMenu = styled.ul`
  display:flex;
  align-items: center;
`