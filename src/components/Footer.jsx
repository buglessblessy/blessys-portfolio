import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-white/5 text-center">
      <div className="flex justify-center gap-8 mb-8 text-slate-600">
        <a href="#" className="hover:text-white transition"><Linkedin /></a>
        <a href="#" className="hover:text-white transition"><Github /></a>
        <a href="mailto:blessya98@gmail.com" className="hover:text-white transition"><Mail /></a>
      </div>
      <p className="text-[10px] font-black tracking-[0.6em] text-slate-800 uppercase">
        © 2026 Blessy A. • React Frontend Specialist
      </p>
    </footer>
  );
};

export default Footer;