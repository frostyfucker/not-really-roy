import React, { forwardRef } from 'react';
import Flowchart from './Flowchart';
import DeepfakeChat from './DeepfakeChat';
import { GithubIcon, EmailIcon, CodeIcon, PhoneIcon, VideoCallIcon } from '../constants';

const keySkills = {
  "Cybersecurity": ["Penetration Testing", "Vulnerability Assessment", "Advanced Threat Intelligence", "Incident Response", "Digital Forensics", "Red Team Operations", "Blockchain Security", "Cryptography", "RF & Hardware Reverse Engineering"],
  "Development & Architecture": ["Secure Network Architecture", "Cloud Security", "Smart Contract Auditing", "Zero Trust Automation", "DApp Development", "Python", "Go", "Solidity", "Bash"],
  "Professional": ["Technical Writing", "Communication", "Team Leadership", "Cross-Functional Collaboration"]
};

const ResumeSection = forwardRef<HTMLDivElement>((props, ref) => {
    
    return (
        <div ref={ref} className="w-full max-w-4xl mx-auto p-4 md:p-8 rounded-xl bg-gray-800/50 border border-gray-700 shadow-2xl backdrop-blur-sm print-bg-white print-shadow-none print-border-none print-p-0">
            
            <h1 className="text-5xl font-bold text-center mb-8 no-print text-gradient">So, you have a problem?...</h1>

            <div className="text-center">
                <img 
                    src="https://github.com/frostyfucker/Resume/blob/main/not-really-roy-optimized.gif?raw=true" 
                    alt="Roy Hodge Jr.'s Profile" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg object-cover print-hidden"
                />
                <h2 className="text-4xl font-bold print-text-black">Roy Hodge Jr.</h2>
                
                {/* Interactive Contact Icons */}
                <div className="flex justify-center items-center gap-x-6 mt-3 no-print">
                    <div className="relative group cursor-pointer">
                        <PhoneIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        <div className="absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-blue-500">
                            (930) 280-78-0
                            <p className="text-xs text-gray-400 italic mt-1 max-w-[200px]">...the second dash is a zero, but bots don't quit so we get clever.</p>
                            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-blue-500"></div>
                        </div>
                    </div>
                    <a href="https://calendly.com/royhodgejr/30min" target="_blank" rel="noopener noreferrer" aria-label="Schedule a video call">
                        <VideoCallIcon className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
                    </a>
                </div>

                {/* Print-only phone number */}
                <div className="hidden print-block text-center mt-1">
                    <p className="print-text-black">(930) 280-78-0</p>
                </div>
                
                <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-4 text-gray-400 print-text-black">
                    <a href="mailto:roy.hodge.jr@protonmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                        <EmailIcon className="w-5 h-5 mr-2" />
                        roy.hodge.jr@protonmail.com
                    </a>
                    <a href="https://github.com/frostyfucker" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
                        <GithubIcon className="w-5 h-5 mr-2" />
                        github.com/frostyfucker
                    </a>
                </div>
            </div>

            <div className="my-12 py-8 border-y border-gray-700 no-print">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                    <span className="text-gradient">Well,</span> then here's your current decision path...
                </h3>
                <Flowchart />
            </div>

            <DeepfakeChat />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 print-block">
                <div className="md:col-span-2 print-w-full">
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Summary</h3>
                    <p className="text-gray-300 leading-relaxed print-text-black">
                        Accomplished cybersecurity specialist and software developer with a proven track record in information security, penetration testing, and decentralized systems. Adept at leading high-impact projects, designing secure architectures, and driving innovation in digital defense. Recognized for technical excellence, professionalism, and reliability in mission-critical environments.
                    </p>
                    
                    <h3 className="text-2xl font-semibold mt-10 mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Professional Experience</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-bold text-white print-text-black">Principal Security Engineer, ShadowSec Global</h4>
                            <p className="text-gray-400 print-text-black">2022 – Present</p>
                            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 print-text-black">
                                <li>Lead global team in designing and implementing advanced security solutions for Fortune 500 clients.</li>
                                <li>Directed successful penetration tests and red team exercises uncovering high-severity vulnerabilities.</li>
                                <li>Developed automated tools for continuous threat monitoring and incident response.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white print-text-black">Cybersecurity Consultant, [Confidential - Defense Sector]</h4>
                            <p className="text-gray-400 print-text-black">2020 – 2022</p>
                             <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 print-text-black">
                                <li>Advised on security architecture and policy for large-scale cloud and on-premise environments.</li>
                                <li>Conducted in-depth security audits, risk assessments, and digital forensics investigations.</li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="text-xl font-bold text-white print-text-black">Lead Developer, Project Nightingale, [Prestigious University]</h4>
                            <p className="text-gray-400 print-text-black">2018 – 2020</p>
                             <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 print-text-black">
                                <li>Architected innovative data transfer protocols for privacy-preserving research.</li>
                                <li>Published peer-reviewed papers in digital security and privacy.</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mt-10 mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Education & Certifications</h3>
                    <div className="space-y-4">
                        <ul className="list-disc list-inside text-gray-300 print-text-black">
                            <li>OSCP (Offensive Security Certified Professional), 2023</li>
                            <li>CompTIA Security+, 2022</li>
                            <li>Certified Blockchain Security Professional (CBSP), 2024</li>
                        </ul>
                    </div>
                     <h3 className="text-2xl font-semibold mt-10 mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Selected Projects & Achievements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 print-text-black">
                        <li>Published research on blockchain vulnerabilities cited by industry leaders.</li>
                        <li>Developed open source tools for secure communications, adopted by privacy-focused communities worldwide.</li>
                        <li>Speaker at DEF CON 2024: "Decentralized Security in a Post-Quantum Era".</li>
                        <li>Contributed to high-impact bug bounty programs, including critical findings for major tech firms.</li>
                        <li>Maintainer of several popular security libraries on GitHub.</li>
                    </ul>
                </div>

                <div className="print-w-full">
                    <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Key Skills</h3>
                    <div className="space-y-6">
                        {Object.entries(keySkills).map(([category, skillList]) => (
                            <div key={category}>
                                <h4 className="text-lg font-bold text-white mb-2 print-text-black">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map(skill => (
                                        <span key={skill} className="bg-gray-700 text-blue-300 text-sm font-medium px-3 py-1.5 rounded-full flex items-center print-bg-white print-text-black print-border-gray border">
                                            <CodeIcon className="w-4 h-4 mr-1.5 print-hidden" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mt-10 mb-4 border-b-2 border-blue-500 pb-2 text-blue-300 print-header">Professional Memberships</h3>
                     <ul className="list-disc list-inside text-gray-300 print-text-black">
                        <li>OWASP (Open Web Application Security Project)</li>
                        <li>ISACA</li>
                        <li>IEEE Computer Society</li>
                    </ul>
                </div>
            </div>
        </div>
    );
});

ResumeSection.displayName = "ResumeSection";

export default ResumeSection;