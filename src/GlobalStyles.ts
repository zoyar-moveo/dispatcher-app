import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        /*padding: 0;
        outline:0; */
        box-sizing:border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    user-select: none;
 }
#root{
    margin:0 auto;
}
body{
    overflow: hidden;
    font-size : 16px;
}
@media only screen and (max-width: 768px){
body{
            overflow: scroll;
        }
}
 `;
