import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Пример функции определения предпочтительного языка из заголовков запроса
function getLocale(request: any): string {
    const headers = request.headers || {};
    const acceptLanguageHeader = headers['accept-language'] || 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7';
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguageHeader } });
    const languages = negotiator.languages();
    const locales = ['ru', 'en'];
    const defaultLocale = 'ru';

    return match(languages, locales, defaultLocale);
}

export function middleware(request: any) {
    const { pathname } = request.nextUrl;
    const locales = ['ru', 'en'];

    // Проверяем, есть ли поддерживаемая локаль в пути
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Редирект, если нет локали
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // например, входящий запрос /products
    // Новый URL теперь /en-US/products
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Пропустить все внутренние пути (_next)
        '/((?!_next).*)',
        // Необязательно: запуск только на корневом (/) URL
        // '/'
    ],
};
