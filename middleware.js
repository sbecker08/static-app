import { NextResponse } from 'next/server';
 
// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'US';
 
// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: ['/', '/southwest', '/pacific-northwest'],
};
 
export function middleware(request) {
  // Extract country. Default to US if not found.
  const country = (request.geo && request.geo.country) || 'US';

  const originalPath = request.nextUrl.pathname;
  console.log(`Visitor from ${console.log(request.geo)}`);

  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    request.nextUrl.pathname = '/pacific-northwest';
  } else {
    request.nextUrl.pathname = `/southwest`;
  }
 
  // Rewrite to URL
  if(originalPath != request.nextUrl.pathname)
    return NextResponse.redirect(request.nextUrl);
  else
    return;
}