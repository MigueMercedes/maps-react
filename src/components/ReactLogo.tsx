import logo from '../logo.svg'

export const ReactLogo = () => {
  return (
    <img 
      src={ logo } 
      alt="React Logo" 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '0',
        width: '100px',
        opacity: '.7'
      }}
    />
  )
}
