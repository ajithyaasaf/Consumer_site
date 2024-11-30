import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers" // Import cookies from next/headers

export default getRequestConfig(async () => {
  // Read the 'locale' cookie
  const cookieStore = cookies()
  const locale = cookieStore.get("locale")?.value || "en" // Default to 'en' if no locale is set

  // Load messages dynamically based on the locale
  const messages = (await import(`../../messages/${locale}.json`)).default

  return {
    locale,
    messages,
  }
})
