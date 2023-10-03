"use client";

import '../globalStyles.css';
import '@contentful/live-preview/style.css';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

import { Frank_Ruhl_Libre } from 'next/font/google';
import React from 'react';
import { MmAuthenticationZone } from '../modules/MmAuthentication/MmAuthenticationZone';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const frankRuhl300 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '300' })
const frankRuhl400 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '400' })
const frankRuhl700 = Frank_Ruhl_Libre({ subsets: ['latin'], weight: '700' })

import * as snippet from '@segment/snippet'

export default function RootLayout({ children }) {

    function renderSnippet() {
        const opts = {
            apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
            // note: the page option only covers SSR tracking.
            page: true,
        }

        if (process.env.NODE_ENV === 'development') {
            return snippet.max(opts)
        }

        return snippet.min(opts)
    }

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="This is the public facing website for the Marcus & Millichap Commercial Real Estate firm."></meta>
                <title>Marcus and Millichap</title>
                <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
                <Script
                    id="segment-script"
                    dangerouslySetInnerHTML={{ __html: renderSnippet() }}
                />
            </head>

            <body>
                <ContentfulLivePreviewProvider locale="en-US" enableInspectorMode={true} enableLiveUpdates={true}>
                    <MmAuthenticationZone>
                        {children}
                    </MmAuthenticationZone>
                </ContentfulLivePreviewProvider>
            </body>
        </html>
    );
}