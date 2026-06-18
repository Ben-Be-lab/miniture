import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, User, ShoppingBag, X, Star, ArrowRight, Eye, EyeOff, LogOut } from 'lucide-react';

export default function Navbar() {
  const [activeModal, setActiveModal] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);
  
  // Auth Integration States
  const [authView, setAuthView] = useState('login'); 
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  
  // Form input states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 🌟 Check localStorage on load to see if a user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const closeModal = () => {
    setActiveModal(null);
    setAuthView('login');
    setAuthError('');
    setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🌟 Handle Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
    window.location.href = '/'; // Refresh to clean route states
  };

const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    const isLogin = authView === 'login';
    const targetUrl = isLogin 
      ? 'http://localhost:8080/api/v1/auth/login' 
      : 'http://localhost:8080/api/v1/auth/register';

    try {
      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email: formData.email, password: formData.password } : formData)
      });

      const data = await response.json();

      if (data.success) {
        if (isLogin) {
          const targetUser = data.user || data.User || data.data || data;
          const activeRole = targetUser?.userRole || targetUser?.role;

          // 🌟 Save auth tokens for ALL users by default now
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(targetUser));
          setCurrentUser(targetUser); // Instantly updates navbar to show "Sign Out"

          // 🌟 Redirect if admin, otherwise simply close the login modal for standard users
          if (activeRole && String(activeRole).toLowerCase() === 'admin') {
            window.location.href = '/admin/dashboard';
          } else {
            closeModal(); 
          }
        } else {
          alert('Registration successful! Please sign in.'); 
          setAuthView('login');
          setAuthError('');
          setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
        }
      } else {
        setAuthError(data.message || 'Authentication operation encountered an issue.');
      }
    } catch (err) {
      console.error(err);
      setAuthError('Connection failure. Verify your backend service status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white px-9 py-8 z-40">
        <div className="w-full grid grid-cols-3 items-center mx-auto relative">
          <div className="flex justify-start">
            <a href="/" className="text-[31px] font-bold tracking-[-0.05em] text-black leading-none select-none no-underline">
              miniture
            </a>
          </div>
          
          <nav className="hidden md:flex items-center justify-center space-x-[29px]">
            <div className="group relative py-2">
              <a href="/" className="flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
                <span>Home</span>
                <ChevronDown size={14} className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" strokeWidth={2.5} />
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white min-w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-b-[24px] overflow-hidden pt-4 pb-6 px-6 z-50 border-t border-gray-50">
                <div className="flex flex-col space-y-4">
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v1 — Modern Elegance</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v2 — Rustic Comfort</span>
                  <span className="text-[15px] text-gray-800 font-medium hover:text-[#FFAE34] transition-colors no-underline cursor-pointer">Home v3 — Minimalist Chic</span>
                </div>
              </div>
            </div>
            
            <div className="group py-2">
              <a href="/catalog" className="flex items-center gap-1 text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">
                <span>Catalog</span>
                <ChevronDown size={14} className="text-black mt-[3px] transition-colors group-hover:text-[#FFAE34]" strokeWidth={2.5} />
              </a>
              <div className="absolute left-0 right-0 top-full hidden group-hover:grid grid-cols-[220px_1fr] bg-white w-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-[24px] p-8 mt-1 gap-8 z-50 border border-gray-100">
                <div className="flex flex-col justify-between border-r border-gray-100 pr-6 text-left">
                  <div className="flex flex-col space-y-4">
                    <a href="#" className="text-[16px] font-bold text-black no-underline">Accent Chairs</a>
                    <a href="#" className="text-[16px] font-medium text-gray-400 hover:text-black transition-colors no-underline">Dining Chair</a>
                  </div>
                  <a href="#" className="flex items-center justify-between text-[14px] font-bold text-black border-t border-black pt-4 no-underline hover:text-[#FFAE34] group/btn transition-colors">
                    <span>View All Products</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-5 text-left">
                  <div className="flex flex-col">
                    <div className="relative aspect-square bg-[#F5F5F5] rounded-[16px] flex items-center justify-center overflow-hidden mb-3 p-4">
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-bold text-black flex items-center gap-1 shadow-xs">
                        <Star size={10} className="fill-[#FFAE34] text-[#FFAE34]" /> 5.0
                      </span>
                      <img src="https://miniture-demo.myshopify.com/cdn/shop/files/p03-1.jpg?v=1737440951&width=600" alt="Ana Grey Dining Chair" className="max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <h4 className="text-[14px] font-medium text-black mb-1 leading-tight">Ana Grey Dining Chair</h4>
                    <span className="text-[14px] font-bold text-black">$299.99</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="/Blog" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">Blog</a>
            <a href="/Contact" className="text-[15px] font-medium text-black no-underline transition-colors hover:text-[#FFAE34]">Contact</a>
          </nav>
          
          <div className="flex items-center justify-end space-x-[22px] text-black">
            <button onClick={() => setActiveModal('search')} className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" aria-label="Search">
              <Search size={21} strokeWidth={1.5} />
            </button>
            
            {/* 🌟 DYNAMIC ACCOUNT TRIGGER BUTTON / SIGN OUT ACTION */}
            {currentUser ? (
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-1.5 transition-colors text-red-500 hover:text-red-600 p-1 cursor-pointer font-medium text-[14px]" 
                aria-label="Sign Out"
              >
                <LogOut size={19} strokeWidth={1.8} />
                <span className="hidden lg:inline">Sign Out</span>
              </button>
            ) : (
              <button 
                onClick={() => setActiveModal('account')} 
                className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" 
                aria-label="Account"
              >
                <User size={21} strokeWidth={1.5} />
              </button>
            )}
            
            <button onClick={() => setActiveModal('cart')} className="transition-colors hover:text-[#FFAE34] p-1 cursor-pointer" aria-label="Cart">
              <ShoppingBag size={21} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center transition-opacity duration-200"
          onClick={closeModal}
        >
          {activeModal === 'search' && (
            <div className="relative bg-white w-full max-w-[680px] rounded-[24px] p-8 mx-4 shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute -top-4 -right-4 w-11 h-11 bg-white text-black border border-gray-100 shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"><X size={18} /></button>
              <input type="text" placeholder="Search for ..." className="w-full bg-gray-50 text-black placeholder-gray-400 border-none outline-none rounded-[14px] px-6 py-4 text-[15px] mb-6 font-normal" autoFocus />
            </div>
          )}

          {activeModal === 'account' && (
            <div 
              className="relative bg-white w-full max-w-[440px] rounded-[32px] p-8 mx-4 shadow-2xl flex flex-col transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute -top-4 -right-4 w-11 h-11 bg-white text-black border border-gray-100 shadow-md rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"><X size={18} /></button>
               
              <form onSubmit={handleAuthSubmit} className="text-left flex flex-col">
                <h3 className="text-[24px] font-bold text-black mb-1 capitalize tracking-tight">
                  {authView === 'login' ? 'Sign In' : 'Create Account'}
                </h3>
                <p className="text-sm text-gray-400 mb-6 font-medium">
                  {authView === 'login' ? 'Access your mini elegance collective portal' : 'Join our minimalist furniture showcase workspace'}
                </p>

                {authError && (
                  <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-600 text-[13px] font-semibold rounded-xl text-center">
                    {authError}
                  </div>
                )}

                <div className="space-y-4 mb-5">
                  {authView === 'register' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 rounded-[14px] px-4 py-3 bg-gray-50/50">
                        <input type="text" name="firstName" required placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400" />
                      </div>
                      <div className="border border-gray-200 rounded-[14px] px-4 py-3 bg-gray-50/50">
                        <input type="text" name="lastName" required placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400" />
                      </div>
                    </div>
                  )}

                  <div className="border border-gray-200 rounded-[14px] px-4 py-3 bg-gray-50/50">
                    <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400" />
                  </div>

                  <div className="border border-gray-200 rounded-[14px] px-4 py-3 bg-gray-50/50 flex items-center justify-between">
                    <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-black transition-colors ml-2">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {authView === 'register' && (
                    <div className="border border-gray-200 rounded-[14px] px-4 py-3 bg-gray-50/50 flex items-center justify-between">
                      <input type={showPassword ? "text" : "password"} name="confirmPassword" required placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-black placeholder-gray-400" />
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-black text-white font-bold py-4 px-6 rounded-full text-[15px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <span>{loading ? 'Processing Securely...' : authView === 'login' ? 'Login Securely' : 'Complete Registration'}</span>
                  {!loading && <ArrowRight size={16} />}
                </button>

                <div className="mt-5 text-center text-[14px] font-medium text-gray-500">
                  {authView === 'login' ? (
                    <>Don't have an account? <button type="button" onClick={() => { setAuthView('register'); setAuthError(''); }} className="text-black font-bold hover:underline ml-1">Register here</button></>
                  ) : (
                    <>Already have an account? <button type="button" onClick={() => { setAuthView('login'); setAuthError(''); }} className="text-black font-bold hover:underline ml-1">Login here</button></>
                  )}
                </div>
              </form>
            </div>
          )}

          {activeModal === 'cart' && (
            <div className="absolute right-0 top-0 bottom-0 bg-white w-full max-w-[460px] h-full shadow-2xl flex flex-col p-8 transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-gray-50 pb-6 mb-20">
                <h3 className="text-[22px] font-bold text-black">Shopping Cart</h3>
                <button onClick={closeModal} className="w-10 h-10 bg-[#FFAE34] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"><X size={18} strokeWidth={2.5} /></button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-[32px] font-bold text-black leading-tight tracking-tight mb-4 max-w-[280px]">Your cart is currently empty.</h2>
                <button onClick={closeModal} className="bg-gray-50 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full flex items-center gap-3 text-[15px] font-bold text-black shadow-xs group cursor-pointer">
                  <span>Continue shopping</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}