import {
  FaHeart,
  FaShieldAlt,
  FaPaw,
  FaStethoscope,
  FaLeaf,
  FaEye,
  FaHandHoldingHeart,
} from "react-icons/fa";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="bg-[#b98a32] min-h-screen w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden pb-10">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#c59c45] rounded-full animate-float-1 opacity-30"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-[#7a181c] rounded-full animate-float-2 opacity-25"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#c59c45] rounded-full animate-float-3 opacity-35"></div>
        <div className="absolute top-2/3 right-12 w-5 h-5 bg-[#7a181c] rounded-full animate-float-4 opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#c59c45] rounded-full animate-float-5 opacity-30"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-tr from-[#7a181c] via-[#a32b30] to-[#c59c45] text-white overflow-hidden animate-fade-in mb-15 px-5">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-28 left-10 w-28 h-28 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white opacity-5 rounded-full animate-float-gentle"></div>
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full animate-spin-ultra-slow"></div>
        </div>
        <div className="relative px-6 py-24 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm animate-scale-in-bounce">
            <FaLeaf className="text-3xl text-white animate-pulse-gentle" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up-hero">
            Our{" "}
            <span className="text-[#f1d07a] animate-glow-soft">Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95 animate-fade-in-delayed">
            Healing pets, empowering owners — we're here to care, comfort, and
            connect.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 py-20">
        {/* Core Belief */}
        <div className="rounded-3xl shadow-xl p-10 md:p-14 bg-white border-l-[10px] border-[#b98a32] mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={image}
                alt="Animal healthcare"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute bottom-0 right-0 bg-[#b98a32] text-white p-5 rounded-tl-2xl shadow-xl">
                <FaPaw className="text-2xl" />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#7a181c] rounded-full flex items-center justify-center mr-4">
                  <FaHandHoldingHeart className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-[#7a181c]">
                  Pet Wellness, Heart First
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At DCC Pets, we aren’t just about check-ups and treatments —
                we’re about lifelong companionship. Our mission is to offer
                heartfelt care and modern veterinary solutions that elevate the
                lives of pets and the people who love them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From simple consults to complex surgeries, our skilled team
                blends expertise with empathy at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#7a181c] hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7a181c] to-[#a52c2e] rounded-xl flex items-center justify-center mr-4">
                <FaEye className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#7a181c]">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              We aim to be recognized as the most trusted name in pet healthcare
              — pioneering wellness, innovation-driven treatments, and heartfelt
              community service.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#c59c45] hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c59c45] to-[#e9cd6c] rounded-xl flex items-center justify-center mr-4">
                <FaHeart className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#7a181c]">Our Values</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>• Ethical care with compassion</li>
              <li>• Constant pursuit of medical excellence</li>
              <li>• Clear, kind communication</li>
              <li>• Learning that never stops</li>
            </ul>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="bg-gradient-to-r from-[#7a181c] via-[#a52b2f] to-[#c59c45] text-white p-12 rounded-3xl shadow-xl relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-14">
              What Guides Our Every Step
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaStethoscope className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Top-Tier Treatment
                </h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  Every animal is cared for with medical precision and love,
                  using the latest tools in veterinary science.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaHeart className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Wholehearted Healing
                </h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  We see the soul behind the fur — and we honor that bond with
                  genuine compassion.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Unshakable Trust</h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  Your trust means everything — we earn it through honesty,
                  transparency, and unwavering care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-12 text-center border-t-8 border-[#c59c45] shadow-lg">
          <h3 className="text-3xl font-bold text-[#7a181c] mb-6">
            Care That’s Worth Barking About
          </h3>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Thousands of pet parents trust us for one reason: we treat your pet
            like family — because they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/appointment">
              <button className="bg-[#7a181c] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#a32b30] transition">
                Schedule Visit
              </button>
            </Link>
            <Link to="/about/team">
              <button className="border-2 border-[#c59c45] text-[#c59c45] px-8 py-4 rounded-xl font-medium hover:bg-[#c59c45] hover:text-white transition">
                Know Us Better
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
          }
          75% {
            transform: translateY(-15px) translateX(2px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-8px) translateX(-4px);
          }
          66% {
            transform: translateY(-12px) translateX(6px);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(-8px);
          }
        }
        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-6px) translateX(3px);
          }
          75% {
            transform: translateY(-18px) translateX(-5px);
          }
        }
        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          40% {
            transform: translateY(-14px) translateX(7px);
          }
          80% {
            transform: translateY(-8px) translateX(-4px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        @keyframes spin-ultra-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes scale-in-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes slide-up-hero {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes glow-soft {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(241, 208, 122, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(241, 208, 122, 0.6);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-left-delayed {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up-delayed {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes heartbeat {
          0%,
          git pull origin develop 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }
        @keyframes slide-in-item {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-down {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes swing {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }
        @keyframes shield-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
          }
        }
        @keyframes slide-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-up-delayed {
          0% {
            transform: translateY(15px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pulse-ultra-slow {
          0%,
          100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.08;
          }
        }

        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 3s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 6s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: float-5 4.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .animate-spin-ultra-slow {
          animation: spin-ultra-slow 30s linear infinite;
        }
        .animate-scale-in-bounce {
          animation: scale-in-bounce 0.8s ease-out;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        .animate-slide-up-hero {
          animation: slide-up-hero 1s ease-out;
        }
        .animate-glow-soft {
          animation: glow-soft 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.5s both;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-left-delayed {
          animation: slide-in-left-delayed 0.8s ease-out 0.3s both;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 0.8s ease-out 0.4s both;
        }
        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .animate-slide-in-item {
          animation: slide-in-item 0.6s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
        .animate-shield-glow {
          animation: shield-glow 2s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-in-out 0.3s both;
        }
        .animate-pulse-ultra-slow {
          animation: pulse-ultra-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Mission;
