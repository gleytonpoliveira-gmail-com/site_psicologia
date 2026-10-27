import { ClinicHeader } from './components/ClinicHeader';
import { ClinicHero } from './components/ClinicHero';
import { ClinicAbout } from './components/ClinicAbout';
import { ClinicalSpecialties } from './components/ClinicalSpecialties';
import { TherapyProcess } from './components/TherapyProcess';
import { OnlineTherapy } from './components/OnlineTherapy';
import { AppointmentSimulator } from './components/AppointmentSimulator';
import { ClinicFAQ } from './components/ClinicFAQ';
import { ClinicContact } from './components/ClinicContact';
import { ClinicFooter } from './components/ClinicFooter';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const handleScheduleClick = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreAbout = () => {
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d3748] flex flex-col font-sans selection:bg-[#4a6b6c]/20 selection:text-[#354f50]">
      {/* 1. Header with 3-zone contract */}
      <ClinicHeader onScheduleClick={handleScheduleClick} />

      <main className="flex-1">
        {/* 2. Hero Section with Real Professional Photo & Credentials */}
        <ClinicHero
          onScheduleClick={handleScheduleClick}
          onExploreAbout={handleExploreAbout}
        />

        {/* 3. About Section / Professional Trajectory */}
        <ClinicAbout />

        {/* 4. Clinical Specialties: Adolescents & Adults with Interactive Search */}
        <ClinicalSpecialties />

        {/* 5. How Therapy Works: 3-Stage Process */}
        <TherapyProcess />

        {/* 6. Online Therapy: Security, Confidentiality & Remote Access */}
        <OnlineTherapy />

        {/* 7. Interactive Appointment Assistant / Message Builder */}
        <AppointmentSimulator />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <ClinicFAQ />

        {/* 9. Official Contact Channels & Quick Message Form */}
        <ClinicContact />
      </main>

      {/* 10. Footer with Visitor Counter & CFP Ethics Compliance */}
      <ClinicFooter />

      {/* 11. Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
