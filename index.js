const Notification = props => {
  const {className, text, img} = props
  return (
    <div className={className}>
      <img src={img} className='imgSize' />
      <p className='message'>{text}</p>
    </div>
  )
}

const element = (
  <div className='main-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='msg-container'>
      <Notification
        className='inform-msg'
        text='information Message'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='success-msg'
        text='Success Message'
        img='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warning-msg'
        text='Warning Message'
        img='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='danger-msg'
        text='Error Message'
        img='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
