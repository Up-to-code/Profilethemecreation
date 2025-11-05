import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";
import { CertificateCard } from "./components/CertificateCard";
import { TestimonialsSlider } from "./components/TestimonialsSlider";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "موقع تجارة إلكترونية",
      description: "متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المنتجات",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjMxNDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "تطبيق موبايل",
      description: "تطبيق جوال بتصميم عصري وواجهة مستخدم سهلة الاستخدام",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["React Native", "Firebase", "UI/UX"]
    },
    {
      title: "موقع شركة",
      description: "موقع عرض احترافي لشركة مع تصميم حديث ومتجاوب",
      image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MjI0NjQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      title: "لوحة تحكم إدارية",
      description: "لوحة تحكم شاملة لإدارة المحتوى والمستخدمين والإحصائيات",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMzA5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "#",
      tags: ["Vue.js", "Laravel", "MySQL"]
    }
  ];

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "قواعد البيانات",
    "تصميم الواجهات",
    "تطوير الموبايل",
    "Tailwind CSS",
    "Git & GitHub",
    "JavaScript",
    "MongoDB",
    "REST APIs",
    "Responsive Design"
  ];

  const certificates = [
    {
      title: "شهادة React المتقدمة",
      issuer: "Meta",
      date: "يناير ٢٠٢٥",
      description: "تطوير تطبيقات React متقدمة وأفضل الممارسات"
    },
    {
      title: "مطور Full Stack",
      issuer: "Udacity",
      date: "أكتوبر ٢٠٢٤",
      description: "تطوير تطبيقات ويب متكاملة من الواجهة الأمامية والخلفية"
    },
    {
      title: "شهادة AWS السحابية",
      issuer: "Amazon Web Services",
      date: "يوليو ٢٠٢٤",
      description: "بناء ونشر تطبيقات على AWS"
    }
  ];

  const testimonials = [
    {
      name: "أحمد السيد",
      role: "مدير المشاريع",
      company: "شركة التقنية الحديثة",
      testimonial: "محترف في عمله ودقيق في المواعيد. عمل رائع على مشروع موقعنا الإلكتروني وتجاوز توقعاتنا بكثير.",
      avatar: undefined
    },
    {
      name: "سارة محمود",
      role: "مؤسسة",
      company: "متجر أزياء أونلاين",
      testimonial: "ساعدنا في بناء منصة التجارة الإلكترونية من الصفر. النتائج كانت ممتازة وزادت مبيعاتنا بشكل كبير.",
      avatar: undefined
    },
    {
      name: "خالد عبدالله",
      role: "مدير تقني",
      company: "شركة البرمجيات الذكية",
      testimonial: "خبرة تقنية عالية ومهارات ممتازة في حل المشاكل. أنصح بالتعامل معه بشدة.",
      avatar: undefined
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: Mail, href: "mailto:your@email.com", label: "البريد" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative w-full h-52 bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-pink-500/90">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="relative -mt-20 pb-6 border-b">
          <div className="flex items-end justify-between mb-6 flex-row-reverse">
            <Avatar className="w-36 h-36 ring-4 ring-background">
              <AvatarImage src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMzA5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
              <AvatarFallback>محمد</AvatarFallback>
            </Avatar>
            
            {/* Social Links - Desktop */}
            <div className="hidden sm:flex gap-2 mb-2 flex-row-reverse">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-secondary"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="text-right mb-4">
            <h1 className="mb-1">محمد أحمد</h1>
            <p className="text-muted-foreground">
              مطور ويب متخصص في بناء تطبيقات حديثة ومواقع إلكترونية متجاوبة
            </p>
          </div>

          {/* Social Links - Mobile */}
          <div className="flex sm:hidden gap-2 mb-4 flex-row-reverse">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full hover:bg-secondary"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-8 border-b">
          <h2 className="text-right mb-6">المهارات</h2>
          <div className="flex flex-wrap gap-2 justify-end">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-8 border-b">
          <h2 className="text-right mb-6">المشاريع</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="py-8 border-b">
          <h2 className="text-right mb-6">الشهادات</h2>
          <div className="space-y-4">
            {certificates.map((cert) => (
              <CertificateCard key={cert.title} {...cert} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-8">
          <h2 className="text-right mb-6">آراء العملاء</h2>
          <TestimonialsSlider testimonials={testimonials} />
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground py-8 border-t">
          <p>© ٢٠٢٥ جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </div>
  );
}
