import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

export default function Dashboard() {
  const [checking, setChecking] = useState(true)
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setAuthed(true)
      } else {
        window.location.href = '/login'
      }
      setChecking(false)
    })
  }, [])

  if (checking) return (
    <>
      <Head><title>Esmy — Dashboard</title></Head>
      <style dangerouslySetInnerHTML={{ __html: `
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#111827;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
        .loader{width:44px;height:44px;border:3px solid rgba(255,255,255,.1);border-top-color:#F97316;border-radius:50%;animation:spin 1s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}} />
      <div className="loader" />
    </>
  )

  if (!authed) return null

  return (
    <iframe
      src="/dashboard-app.html?auth=1"
      style={{ width: '100vw', height: '100vh', border: 'none', display: 'block' }}
      title="Esmy Dashboard"
    />
  )
}
