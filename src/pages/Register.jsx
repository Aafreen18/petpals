import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, User, Mail, Lock, Heart, PawPrint } from 'lucide-react';

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };
      
      // Replace with your actual API call
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Handle success
        console.log('Success:', data);
        alert(isLogin ? 'Login successful!' : 'Registration successful!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        throw new Error(data.message || 'An error occurred');
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const pawVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f7f3ea' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 text-6xl opacity-10"
          style={{ color: '#b98a32' }}
          variants={pawVariants}
          animate="animate"
        >
          🐾
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-4xl opacity-10"
          style={{ color: '#821b1f' }}
          variants={pawVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          ❤️
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-5xl opacity-10"
          style={{ color: '#b98a32' }}
          variants={pawVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          🐕
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-md relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <motion.div
            className="p-8 text-center relative"
            style={{ backgroundColor: '#821b1f' }}
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <PawPrint className="w-8 h-8" style={{ color: '#821b1f' }} />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome to PetCare
            </h1>
            <p className="text-white opacity-90">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div className="p-8" variants={itemVariants}>
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#b98a32' }} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-200 focus:border-opacity-50 focus:ring-opacity-20'
                        }`}
                        style={{ 
                          focusBorderColor: errors.name ? undefined : '#b98a32',
                          focusRingColor: errors.name ? undefined : '#b98a32'
                        }}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#b98a32' }} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-opacity-50 focus:ring-opacity-20'
                    }`}
                    style={{ 
                      focusBorderColor: errors.email ? undefined : '#b98a32',
                      focusRingColor: errors.email ? undefined : '#b98a32'
                    }}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#b98a32' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-opacity-50 focus:ring-opacity-20'
                    }`}
                    style={{ 
                      focusBorderColor: errors.password ? undefined : '#b98a32',
                      focusRingColor: errors.password ? undefined : '#b98a32'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" style={{ color: '#b98a32' }} />
                    ) : (
                      <Eye className="w-5 h-5" style={{ color: '#b98a32' }} />
                    )}
                  </button>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#b98a32' }} />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.confirmPassword 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-200 focus:border-opacity-50 focus:ring-opacity-20'
                        }`}
                        style={{ 
                          focusBorderColor: errors.confirmPassword ? undefined : '#b98a32',
                          focusRingColor: errors.confirmPassword ? undefined : '#b98a32'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" style={{ color: '#b98a32' }} />
                        ) : (
                          <Eye className="w-5 h-5" style={{ color: '#b98a32' }} />
                        )}
                      </button>
                      {errors.confirmPassword && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.confirmPassword}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-300 relative overflow-hidden"
                style={{ backgroundColor: '#821b1f' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  animate={{ 
                    x: loading ? ['-100%', '100%'] : '-100%',
                    opacity: loading ? [0, 0.3, 0] : 0
                  }}
                  transition={{ 
                    repeat: loading ? Infinity : 0,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
                {loading ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Processing...
                  </span>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </motion.button>
            </div>

            <motion.div className="mt-6 text-center" variants={itemVariants}>
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <motion.button
                  type="button"
                  onClick={toggleMode}
                  className="ml-2 font-semibold hover:underline transition-all duration-300"
                  style={{ color: '#b98a32' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </motion.button>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-8 text-gray-600"
          variants={itemVariants}
        >
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1" style={{ color: '#821b1f' }} /> for pet lovers
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;