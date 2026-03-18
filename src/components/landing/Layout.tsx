import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ backgroundColor: 'var(--mo-dark)' }}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={48}
          borderColor="#3a4a1e"
          hoverFillColor="#4a5c2a"
        />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(74,92,42,0.3) 47px, rgba(74,92,42,0.3) 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(74,92,42,0.3) 47px, rgba(74,92,42,0.3) 48px)',
        }}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}