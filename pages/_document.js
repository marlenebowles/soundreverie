import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => {
						return sheet.collectStyles(<App {...props} />);
					},
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						<style
							dangerouslySetInnerHTML={{
								__html: styledNormalize,
							}}
						/>
						<link
							href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700&display=swap"
							rel="stylesheet"
						/>

						<link
							href="https://rsms.me/inter/inter.css"
							rel="stylesheet"
						/>

						<style
							dangerouslySetInnerHTML={{
								__html: `
                                body {
                                    -webkit-font-smoothing: antialiased;
                                }
                                a {
                                    text-decoration: none;
                                }
                                ul > li {
                                    list-style-type: circle;
                                }
                                `,
							}}
						/>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
