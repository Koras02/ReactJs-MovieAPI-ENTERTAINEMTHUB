import styled, {css} from 'styled-components'


export const SearchTabBlock = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   padding: 0.3rem 0.5rem;
   transition: all 0.5 ease-in-out;

   ${(props) => 
    props.isOpen
    ? css`
      &{
          border: 1px solid white;
          background: rgba(12,12,12,0.4);
      }
    `
    : css`
       padding = 0;
    `}
`;


export const SearchInput = styled.input`
   background:transparnt;
   border:none;
   outline:none;
   color:rgba(255,255,255,0.8);
   font-size:1rem;
   witdh: ${(props) => (props.isOpen ? '9rem' : '0')};;
   transition: all 0.5s ease-in-out;

   &::placeholder {
       color: gray;
   }

   ${(props) =>
    props.isOpen
    ?  css `
       margin-left: 0.8rem;
       @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
           width: 7rem;
           font-size: 0.8rem;
       }
    ` 
    : css `
       margin-left: 0;
    `}
`;


export const ClearText = styled.div`
    position: relative;
    border-radius: 6px;
    cursor:pointer;
    ${(props) => 
      props.isOpen
      ? css`
         width: 28px;
         height: 28px;
         &:before,
         &:after {
             width: 24px;
             hegiht: 3px;
         }
         @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
             width:25px;
             hegiht: 25px;
             &:before,
             &:after {
                 width: 21px;
                 hegiht: 3px;;
             }
         }
      `
      : css`
          width: 0;
          hegiht: 0;
          &:before,
          &:after {
              width: 0px;
              height: 0px;
          }
      `}
      &:before,
      &:after {
          conten: '',
          position: absolute;
          transition: width 1s ease-in-out;
          background-color: white;
          border-radius: 2px;
          top:13px;
          @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
              top:11px;
          }
      }
      &:before {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          transform: rotate(45deg);
          left: 2px;
      }
      &:after {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          transform: rotate(-45deg);
          right:2px;
      }
`;