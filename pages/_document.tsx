import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
// import Script from 'next/script';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            defer
            data-webpack="wmProvider"
            src="https://provider-alpha.vercel.app/_next/static/chunks/remoteEntry.js"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
