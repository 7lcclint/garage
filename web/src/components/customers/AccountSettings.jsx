import './AccountSettings.css'

function AccountSettings() {
  return (
    <div className="accountsettings">
      <h1 className='mainhead1'>Personal Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" disabled/>
        </div>

        <div className='form-group'>
          <label htmlFor="phone">Your Phone</label>
          <input type="text" name="phone" id="phone" disabled/>
        </div>

        <div className='form-group'>
          <label htmlFor="email">Your Email</label>
          <input type="text" name="email" id="email" disabled/>
        </div>
      </div>
      <button className='mainbutton1'>
          Save Changes
        </button>
    </div>
  )
}

export default AccountSettings
