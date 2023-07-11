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

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>          
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="This is the public facing website for the Marcus & Millichap Commercial Real Estate firm."></meta>
            <title>Marcus and Millichap</title>
            <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
            </head>
            
            <body>
                <ContentfulLivePreviewProvider locale="en-US">
                    <MmAuthenticationZone>
                        {children}
                    </MmAuthenticationZone>
                </ContentfulLivePreviewProvider>
            </body>
        </html>
    );
  }