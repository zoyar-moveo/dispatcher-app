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
    /* overflow: hidden; */
}
@media only screen and (max-width: 800px){
body{
    overflow: scroll;
    max-width: 100%;
    overflow-x: hidden;
    }
}
 `;
