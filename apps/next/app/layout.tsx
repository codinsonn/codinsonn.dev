// Layouts
import Document, { metadata } from 'app/routes/document'
import NextClientRootLayout from './ClientRootLayout'

/* --- <NextRootLayout/> ----------------------------------------------------------------------- */

// FIXME: Why is children null when passing it to NextClientRootLayout?

const NextRootLayout = ({ children }: { children: React.ReactNode }) => (
  <Document>
    <NextClientRootLayout>{children}</NextClientRootLayout>
  </Document>
)

/* --- Exports --------------------------------------------------------------------------------- */

export { metadata }
export default NextRootLayout
