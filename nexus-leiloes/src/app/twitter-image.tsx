import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Nexus Leilões - O único hub completo para leilão imobiliário no Brasil'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #EFF0F0 0%, #E8E9F0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background Glow Effect */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(92,92,255,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(92,92,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo Text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 900,
                color: '#2B3259',
                letterSpacing: '-0.02em',
              }}
            >
              NEXUS
            </div>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 900,
                color: '#5C5CFF',
                marginLeft: '12px',
                letterSpacing: '-0.02em',
              }}
            >
              LEILÕES
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#2B3259',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            O{' '}
            <span style={{ color: '#5C5CFF' }}>único</span>
            {' '}hub completo para leilão imobiliário
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: '28px',
              color: '#2B3259',
              opacity: 0.7,
              marginBottom: '40px',
            }}
          >
            Busque. Analise. Gerencie. Tudo em um só lugar.
          </div>

          {/* CTA Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#5C5CFF',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: '24px',
              fontWeight: 700,
              boxShadow: '0 20px 50px -12px rgba(92,92,255,0.4)',
            }}
          >
            Entrar na lista de espera
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            color: '#2B3259',
            opacity: 0.5,
          }}
        >
          www.nexusleiloes.com.br
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
