import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiClient, type ContactFormData } from "@/lib/api";
import { renderAlMarsaIcon } from "@/components/icons/al-marsa";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/home.css";
import { usePageSEO } from "@/hooks/usePageSEO";
import { buildCanonicalUrl } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  urgency: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_METRICS = [
  { value: "24h", label: "Response time", icon: "defence" as const },
  { value: "92%", label: "Client retention", icon: "advantage-network" as const },
  { value: "150+", label: "Jurisdictions covered", icon: "advantage-insight" as const },
];

import { COMPANY_INFO } from "@/lib/constants";

const CONTACT_INFORMATION = [
  {
    icon: MapPin,
    title: "Office location",
    details: [
      COMPANY_INFO.address.building,
      `${COMPANY_INFO.address.street}`,
      `${COMPANY_INFO.address.floor}, ${COMPANY_INFO.address.area} ${COMPANY_INFO.address.country}`
    ]
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: [`${COMPANY_INFO.phone} (Main)`, `${COMPANY_INFO.phone} (WhatsApp)`]
  },
  {
    icon: Mail,
    title: "Email address",
    details: [COMPANY_INFO.email]
  },
  {
    icon: Clock,
    title: "Business hours",
    details: [
      COMPANY_INFO.businessHours.weekdays,
      COMPANY_INFO.businessHours.weekend
    ]
  }
];

const SERVICES = [
  "Trademark Registration",
  "Patent Applications",
  "IP Litigation",
  "IP Strategy Consulting",
  "Licensing & Transactions",
  "Brand Protection",
  "Other"
];


const PARTNERSHIP_PILLARS = [
  {
    title: "Dedicated engagement lead",
    description: "A single point of contact coordinates every mandate and escalation.",
    icon: "strategy" as const,
  },
  {
    title: "Confidential handling",
    description: "Secure channels, NDAs on request, and controlled data governance.",
    icon: "advantage-governance" as const,
  },
  {
    title: "Multilingual regional support",
    description: "Teams across Arabic and English ensure swift coordination with local counsel.",
    icon: "advantage-network" as const,
  },
];

const Contact = () => {
  const { t } = useLanguage();

  usePageSEO({
    title: "Contact Al Marsa Intellectual Property Agents",
    description:
      "Schedule a consultation with Al Marsa IP to discuss trademark filings, patent support, and anti-counterfeiting programmes across the GCC.",
    keywords: [
      "contact Al Marsa IP",
      "IP consultation Kuwait",
      "speak to trademark expert"
    ],
    url: buildCanonicalUrl("/contact"),
  });

  const { toast } = useToast();
  useScrollReveal();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      urgency: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const payload: ContactFormData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
        phone: values.phone || undefined,
        company: values.company || undefined,
        service: values.service || undefined,
        urgency: values.urgency || undefined,
      };

      return apiClient.submitContactForm(payload);
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const response = await contactMutation.mutateAsync(values);

    if (response.success) {
      toast({
        title: "Message sent",
        description: response.message ?? "Our team will reach out within 24 hours.",
      });
      reset();
      return;
    }

    toast({
      title: "Unable to send message",
      description: response.message ?? "Please verify your details and try again.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2332] to-navy-light text-white" data-animate>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(231,93,43,0.08),_transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur-sm">
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/90">{t('contact.hero.eyebrow')}</span>
                </div>
                <h1 className="hero-title text-white">
                  {t('contact.hero.title')}
                </h1>
                <p className="hero-subtitle mx-auto text-white/80">
                  {t('contact.hero.subtitle')}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="group rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-white/10">
                      {renderAlMarsaIcon("defence", { className: "h-4 w-4" })}
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-white lg:text-2xl">{t('contact.hero.metrics.response.value')}</div>
                      <p className="text-[9px] font-medium uppercase tracking-wide text-white/60 leading-tight">{t('contact.hero.metrics.response.label')}</p>
                    </div>
                  </div>
                </div>
                <div className="group rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-white/10">
                      {renderAlMarsaIcon("advantage-network", { className: "h-4 w-4" })}
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-white lg:text-2xl">{t('contact.hero.metrics.retention.value')}</div>
                      <p className="text-[9px] font-medium uppercase tracking-wide text-white/60 leading-tight">{t('contact.hero.metrics.retention.label')}</p>
                    </div>
                  </div>
                </div>
                <div className="group rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-white/10">
                      {renderAlMarsaIcon("advantage-insight", { className: "h-4 w-4" })}
                    </div>
                    <div className="text-left">
                      <div className="text-xl font-bold text-white lg:text-2xl">{t('contact.hero.metrics.jurisdictions.value')}</div>
                      <p className="text-[9px] font-medium uppercase tracking-wide text-white/60 leading-tight">{t('contact.hero.metrics.jurisdictions.label')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-2.5 flex items-center justify-center gap-2">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{t('contact.hero.whatToExpect.heading')}</span>
                  <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary" />
                </div>
                <p className="mb-3 text-xs leading-relaxed text-white/75">
                  {t('contact.hero.whatToExpect.description')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-white/70">
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                    </div>
                    <span>{t('contact.hero.whatToExpect.pillars.lead')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                    </div>
                    <span>{t('contact.hero.whatToExpect.pillars.confidential')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                    </div>
                    <span>{t('contact.hero.whatToExpect.pillars.multilingual')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-10 md:py-12" data-animate>
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="mb-8 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                <Send className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-primary">Send a Message</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-navy-deep md:text-3xl">
                Tell Us About Your IP Objectives
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
                Share your requirements and we'll assemble the right team across prosecution, enforcement, and strategic advisory.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="shadow-sm h-fit border-gray-200">
                <CardContent className="p-4">
                  <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid gap-3.5 md:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="text-xs font-medium">First name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          {...register("firstName")} 
                          className="h-9"
                          aria-invalid={errors.firstName ? "true" : "false"}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="text-xs text-destructive" role="alert" aria-live="polite">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="text-xs font-medium">Last name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          {...register("lastName")} 
                          className="h-9"
                          aria-invalid={errors.lastName ? "true" : "false"}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="text-xs text-destructive" role="alert" aria-live="polite">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-medium">Email address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        {...register("email")} 
                        className="h-9"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-destructive" role="alert" aria-live="polite">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-3.5 md:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-xs font-medium">Phone number</Label>
                        <Input id="phone" type="tel" placeholder="+965 9009 5960" {...register("phone")} className="h-9" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="company" className="text-xs font-medium">Company / Organisation</Label>
                        <Input id="company" placeholder="Your company" {...register("company")} className="h-9" />
                      </div>
                    </div>
                    <div className="grid gap-3.5 md:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor="service" className="text-xs font-medium">Service of interest</Label>
                        <Controller
                          name="service"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="h-9">
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                              <SelectContent>
                                {SERVICES.map((service) => (
                                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>{service}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="urgency" className="text-xs font-medium">Urgency level</Label>
                        <Controller
                          name="urgency"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className="h-9">
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="low">Low – General inquiry</SelectItem>
                                <SelectItem value="medium">Medium – Within a week</SelectItem>
                                <SelectItem value="high">High – Within 2-3 days</SelectItem>
                                <SelectItem value="urgent">Urgent – Same day</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-xs font-medium">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your IP requirements, timelines, or questions..." 
                        rows={4} 
                        {...register("message")} 
                        className="resize-none"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-xs text-destructive" role="alert" aria-live="polite">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    <Button type="submit" size="default" className="w-full h-9" disabled={contactMutation.isPending}>
                      <Send className="mr-2 h-3.5 w-3.5" />
                      {contactMutation.isPending ? "Sending..." : "Send message"}
                    </Button>
                    <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                      By submitting, you agree to our privacy policy. All enquiries are handled securely and confidentially.
                    </p>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-2.5">
                {CONTACT_INFORMATION.map((info) => (
                  <Card key={info.title} className="border-gray-200">
                    <CardContent className="p-3.5">
                      <div className="flex items-start gap-2.5">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <info.icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-semibold text-navy-deep mb-0.5">{info.title}</h3>
                          <div className="space-y-0.5 text-[11px] text-muted-foreground">
                            {info.details.map((detail) => (
                              <p key={detail} className="leading-relaxed">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="relative overflow-hidden bg-gray-50 py-10 md:py-12" data-animate>
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="mx-auto max-w-2xl space-y-2.5 text-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                <MapPin className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-primary">Visit Our Office</span>
              </div>
              <h2 className="text-2xl font-bold text-navy-deep md:text-3xl">
                Centrally Located in Kuwait City
              </h2>
              <p className="text-sm text-muted-foreground">
                Our office serves clients across the GCC, MENA region, and international jurisdictions through our extensive partner network.
              </p>
            </div>
            <Card className="overflow-hidden border-gray-200 shadow-sm">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.2!2d47.9920!3d29.3741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzI2LjgiTiA0N8KwNTknMzEuMiJF!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw&q=Al+Sharqia+Towers,+Jaber+Al+Mubarak+St+Block+2,+Bldg.+No:29,+Floor+3,+Sharq+Kuwait"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Marsa IP Office Location"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-[#1a2332] to-navy-light py-16 md:py-24" data-animate>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,93,43,0.08),transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
            <div className="space-y-3 mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1">
                <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">Next Steps</span>
              </div>
              <h2 className="hero-title text-white">
                Partner with a team focused on safeguarding your IP
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/70">
                From first filings to cross-border enforcement, we structure programmes that align to your governance and growth ambitions.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Button asChild size="default" className="bg-white text-navy-deep hover:bg-white/90 h-9">
                <Link to="/services">Explore our services</Link>
              </Button>
              <Button asChild size="default" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 h-9">
                <Link to="/our-story">Learn about our approach</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
