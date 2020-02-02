import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@computapars/core';
export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={themes.gallery}>
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
