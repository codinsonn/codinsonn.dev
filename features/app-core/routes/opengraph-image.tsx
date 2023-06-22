/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ImageResponse } from 'next/server'

/* --- Segments -------------------------------------------------------------------------------- */

export const runtime = 'edge'

/* --- Metadata -------------------------------------------------------------------------------- */

export const alt = 'Thorr Stevens, a.k.a. codinsonn.dev'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

/* --- Fonts ----------------------------------------------------------------------------------- */

const robotoBlack = fetch(
  'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfChc9AMP6lQ.ttf'
  //'https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap'
).then((res) => res.arrayBuffer())

/* --- Image Generation ------------------------------------------------------------------------ */

export async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgb(15 23 42)',
        }}
      >
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <img
            src="https://codinsonn.dev/_next/image?url=%2Fimg%2FCodelyFansLogoPic160x160.jpeg&w=256&q=75"
            alt="Thorr Stevens, a.k.a. codinsonn.dev"
            style={{ marginRight: 60, marginTop: 20, borderRadius: 100 }}
            width="160"
            height="160"
          />
          <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'flex-start' }}>
            <h1
              style={{
                fontSize: 70,
                color: 'white',
              }}
            >
              Thorr ⚡️ codinsonn.dev
            </h1>
            <p style={{ fontSize: 40, color: 'rgb(148 163 184)', marginBottom: 0 }}>
              Full-product engineer helping you build apps
            </p>
            <p style={{ fontSize: 40, color: 'rgb(148 163 184)' }}>
              cross-platform, in a write-once way.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await robotoBlack,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}

export default Image
