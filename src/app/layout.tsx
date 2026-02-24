export const metadata = {
  title: 'Next Task Tester',
  description: 'App de tarefas com testes unitários',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}