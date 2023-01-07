import React from 'react'

const Logo = ({...props} ):JSX.Element => {
  return (
    <svg width="68" height="39" viewBox="0 0 68 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.0588 9.94118C29.0588 4.45082 33.5097 0 39 0H67.2941V9.94118H29.0588Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M23.7058 0L23.7058 34.0294C23.7058 36.7746 21.4804 39 18.7352 39C15.99 39 13.7646 36.7746 13.7646 34.0294L13.7646 6.5C13.7646 2.91015 16.6748 -3.07336e-07 20.2646 -1.50419e-07L23.7058 0Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M39 0L39 39C33.5096 39 29.0588 34.5492 29.0588 29.0588L29.0588 9.94117C29.0588 4.45081 33.5096 -2.39991e-07 39 0Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M0 29.0588H18.7353C21.4805 29.0588 23.7059 31.2842 23.7059 34.0294C23.7059 36.7746 21.4805 39 18.7353 39H6.5C2.91015 39 0 36.0898 0 32.5V29.0588Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M29.0588 29.0588H67.2941C67.2941 34.5492 62.8433 39 57.353 39H39C33.5096 39 29.0588 34.5492 29.0588 29.0588Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M0 19.5C0 16.7548 2.22541 14.5294 4.97059 14.5294H10.7059V24.4706H4.97059C2.22541 24.4706 0 22.2452 0 19.5Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    <path d="M51.2354 24.4706C51.2354 18.9802 55.6862 14.5294 61.1765 14.5294H67.2942V24.4706H51.2354Z" fill={props.Fill ? props.Fill : 'yellow'}/>
    </svg>

  )
}

export default Logo