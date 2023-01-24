import React from 'react';


const Close = ({Fill}:SVGProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14.5551L3.05703 23.4981C2.72243 23.8327 2.29658 24 1.77947 24C1.26236 24 0.836501 23.8327 0.5019 23.4981C0.1673 23.1635 0 22.7376 0 22.2205C0 21.7034 0.1673 21.2776 0.5019 20.943L9.44487 12L0.5019 3.05703C0.1673 2.72243 0 2.29658 0 1.77947C0 1.26236 0.1673 0.836501 0.5019 0.5019C0.836501 0.1673 1.26236 0 1.77947 0C2.29658 0 2.72243 0.1673 3.05703 0.5019L12 9.44487L20.943 0.5019C21.2776 0.1673 21.7034 0 22.2205 0C22.7376 0 23.1635 0.1673 23.4981 0.5019C23.8327 0.836501 24 1.26236 24 1.77947C24 2.29658 23.8327 2.72243 23.4981 3.05703L14.5551 12L23.4981 20.943C23.8327 21.2776 24 21.7034 24 22.2205C24 22.7376 23.8327 23.1635 23.4981 23.4981C23.1635 23.8327 22.7376 24 22.2205 24C21.7034 24 21.2776 23.8327 20.943 23.4981L12 14.5551Z" fill={Fill ? Fill : "#AEAEAE"}/>
    </svg>
    
  )
}

export default Close