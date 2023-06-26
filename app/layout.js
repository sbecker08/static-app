import '../globalStyles.css';
import { Frank_Ruhl_Libre } from 'next/font/google';
import React from 'react';
import { MmAuthenticationZone } from '../modules/MmAuthentication/MmAuthenticationZone';

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
            </head>
            
            <body>
                <MmAuthenticationZone>
                    {children}
                </MmAuthenticationZone>
            </body>
        </html>
    );
  }