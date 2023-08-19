import { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitEmail = () => {
    if (email.endsWith('@meetkristine.com')) {
      setShowModal(true);
    } else {
      alert('Invalid Emails!');
    }
  };

  const updatePassword = () => {
    if (password === confirmPassword) {
      setShowModal(false);
      alert('Password Successfully Changed');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submitEmail}>Submit</button>
        
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Re-Enter New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updatePassword}>Update Password</button>
              <Link to="/login">Go to Login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordResetForm;