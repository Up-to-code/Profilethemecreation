import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";
import { CertificateCard } from "./components/CertificateCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { Github, Linkedin, Mail, Twitter, Code2, Database, Layout, Smartphone, Server, Palette } from "lucide-react";

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
    { name: "React & Next.js", icon: Code2, level: "متقدم" },
    { name: "TypeScript", icon: Code2, level: "متقدم" },
    { name: "Node.js", icon: Server, level: "متوسط" },
    { name: "قواعد البيانات", icon: Database, level: "متقدم" },
    { name: "تصميم الواجهات", icon: Layout, level: "متقدم" },
    { name: "تطوير الموبايل", icon: Smartphone, level: "متوسط" },
    { name: "Tailwind CSS", icon: Palette, level: "متقدم" },
    { name: "Git & GitHub", icon: Code2, level: "متقدم" }
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
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/10">
            <AvatarImage src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMzA5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
            <AvatarFallback>محمد</AvatarFallback>
          </Avatar>
          
          <h1 className="mb-3">محمد أحمد</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            مطور ويب متخصص في بناء تطبيقات حديثة ومواقع إلكترونية متجاوبة باستخدام أحدث التقنيات
          </p>

          {/* Social Links */}
          <div className="flex gap-3 justify-center flex-wrap">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-center mb-8">المهارات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-center mb-8">المشاريع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h2 className="text-center mb-8">الشهادات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <CertificateCard key={cert.title} {...cert} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-center mb-8">آراء العملاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground mt-16 pt-8 border-t">
          <p>© ٢٠٢٥ جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </div>
  );
}
