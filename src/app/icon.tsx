import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#4E3629',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F5F5',
          fontFamily: 'serif',
          fontWeight: 'bold',
          borderRadius: '6px',
          border: '1px solid #2D1B14',
        }}
      >
        J
      </div>
    ),
    {
      ...size,
    }
  )
}
