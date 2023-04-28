export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }
`;

export default Global;
