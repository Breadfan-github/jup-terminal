import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <script src="https://terminal.jup.ag/main-v1.js" data-preload />
        </Head>
        <body>
        <div id="integrated-terminal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
