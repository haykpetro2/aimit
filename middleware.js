import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const stripDefaultLocale = (str) => {
  return str.replace('/en', '');
};
export async function middleware(request) {
  const { pathname, origin, locale, search } = request.nextUrl.clone();
  const languages = ['en', 'de'];
  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api') &&
    !pathname.startsWith('/_next') &&
    locale === 'en';
  const response = NextResponse.next();
  if (locale !== 'en' && languages.includes(locale)) {
    response.cookies.set('language', locale);
  }
  const cookie = request.cookies.get('language');
  const unlocalePath = `${stripDefaultLocale(pathname)}${search}`;
  const redirectURL = () => {
    return `${origin}/${cookie}${unlocalePath}`;
  };
  if (shouldHandleLocale && cookie) {
    return NextResponse.redirect(redirectURL());
  }
  if (!languages.includes(locale)) {
    return NextResponse.redirect(`${origin}${unlocalePath}`);
  }
  return response;
}
