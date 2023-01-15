import "./styles.scss"

const GuestLayout = ({ children }) => {
  return (
    <div className="guest-layout">
      <div className="form-content">{children}</div>
    </div>
  )
}

export default GuestLayout
