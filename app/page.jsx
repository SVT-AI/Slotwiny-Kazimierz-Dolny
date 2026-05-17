'use client'

import { useState } from 'react'

export default function Home() {
  const [status, setStatus] = useState('')

  async function sendReservation(type) {
    setStatus('Wysyłanie rezerwacji...')

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          createdAt: new Date().toISOString(),
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('Rezerwacja została wysłana.')
      } else {
        setStatus('Błąd wysyłania.')
      }
    } catch (err) {
      setStatus('Błąd połączenia.')
    }
  }

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#2e2a26]">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-6xl font-bold text-[#7d3f2d] mb-6">
              Czerwone Łąki
            </h1>

            <p className="text-xl mb-10">
              Premium booking system • AI Ready • Android Ready
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">
                  Domek
                </h2>

                <p className="text-5xl font-bold text-[#556b2f]">
                  350 zł
                </p>

                <p className="mb-6">/ doba</p>

                <button
                  onClick={() => sendReservation('domek')}
                  className="w-full bg-[#556b2f] text-white py-4 rounded-2xl"
                >
                  Rezerwuj domek
                </button>
              </div>

              <div className="bg-[#556b2f] text-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">
                  Rowery
                </h2>

                <p className="text-5xl font-bold">
                  50 zł
                </p>

                <p className="mb-6">/ rower / doba</p>

                <button
                  onClick={() => sendReservation('rowery')}
                  className="w-full bg-white text-[#556b2f] py-4 rounded-2xl font-bold"
                >
                  Rezerwuj rowery
                </button>
              </div>

              {status && (
                <div className="bg-black text-white p-4 rounded-2xl">
                  {status}
                </div>
              )}
            </div>
          </div>

          <div className="bg-black/80 text-white rounded-[40px] p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">
              AI Concierge
            </h2>

            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-2xl">
                🤖 Witaj. Pomogę z rezerwacją i pobytem.
              </div>

              <div className="bg-[#556b2f] p-4 rounded-2xl ml-10">
                Czy domek jest wolny?
              </div>

              <div className="bg-white/10 p-4 rounded-2xl">
                Najbliższy wolny termin: 12–15 sierpnia.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
