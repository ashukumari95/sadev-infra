import { MapPin, Mail, ShieldCheck, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer({ setActiveTab }) {
  const footerNav = [
    { name: 'Solutions', items: ['Engineering', 'Design', 'Digital'] },
    { name: 'Company', items: ['Our Story', 'Careers'] },
    { name: 'Contact', items: ['Hyderabad', 'cdsinfrat@gmail.com'] },
  ];

  // 👉 Social links array add kiya hai jisme aapke diye hue URLs hain
  const socialLinks = [
    { Icon: Facebook, url: 'https://www.facebook.com/share/18QEvJ8GyX/' },
    { Icon: Twitter, url: 'https://x.com/CDSInfraTech' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/company/cds-infra-tech/' }
  ];

  return (
    <footer className="relative z-10 w-full bg-white border-t border-gray-50 py-4 px-6 md:px-3 mt-2 shadow-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center md:text-left">
          
          {/* Column 1: Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-1 group">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-950">
              Infra Tech
            </span>
            <div className="w-6 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-full mt-0.5"></div>
            
            <p className="text-gray-400 text-[10px] leading-tight max-w-xs font-medium mt-2">
              Digital transformation for global construction.
            </p>

            {/* 👉 Social Icons Updated: Ab ye <a> tags hain jo links par le jayenge */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map(({ Icon, url }, idx) => (
                <a 
                  key={idx} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 rounded-full border border-gray-50 flex items-center justify-center text-gray-400 hover:text-[#ec4899] transition-all cursor-pointer bg-gray-50/50 hover:-translate-y-0.5"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-row gap-8 justify-center md:justify-start">
            {footerNav.slice(0, 2).map(section => (
                <div key={section.name}>
                    <h4 className="text-gray-900 font-extrabold mb-2 text-[8px] uppercase tracking-[0.2em]">{section.name}</h4>
                    <ul className="space-y-1.5 text-[10px] font-semibold text-gray-500">
                        {section.items.map(item => (
                            <li key={item} className="hover:text-gray-950 transition-colors cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
          </div>

          {/* Column 3: Presence */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-gray-900 font-extrabold mb-2 text-[8px] uppercase tracking-[0.2em]">Presence</h4>
            <div className="space-y-1.5 text-[10px] font-semibold text-gray-500">
              <div className="flex gap-2 justify-center md:justify-end">
                <MapPin className="w-3 h-3 text-[#ec4899] shrink-0" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-3 h-3 text-[#ec4899] shrink-0" />
                <span>cdsinfrat@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-3 text-[8px] font-bold uppercase tracking-wider text-gray-400">
          <p>© 2026 Infra Tech Engineering & Technologies</p>
          <div className="flex items-center gap-1.5 group cursor-default">
            <ShieldCheck className="w-3 h-3 text-gray-300 group-hover:text-[#ec4899] transition-colors" />
            <span className="group-hover:text-gray-600 transition-colors">ISO 27001</span>
          </div>
        </div>

      </div>
    </footer>
  );
}