import { motion } from "framer-motion";
import { Headphones, Mic, MessageCircle, FileEdit, CheckCircle, Gift, Bell, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{
      background: 'linear-gradient(180deg, #DCEBFF 0%, #F0F7FF 50%, #DCEBFF 100%)'
    }}>
      {/* Hero Section */}
      <motion.section 
        className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {/* Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="text-center text-sm md:text-base text-muted-foreground mb-6 tracking-wide"
            data-testid="text-tagline"
          >
            TuneEng: Tune in Fluency, Tune out Hesitancy.
          </motion.p>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight text-foreground">
              <span className="block mb-2" data-testid="text-hero-title-line1">Master English Communication with</span>
              <span className="block bg-gradient-to-r from-primary via-[hsl(215,85%,65%)] to-[hsl(215,85%,75%)] bg-clip-text text-transparent" data-testid="text-hero-title-line2">
                AI Precision
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-center text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            data-testid="text-hero-subtitle"
          >
            Learn Listening, Reading, and Writing — guided by AI, all personalized by precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 font-semibold"
              style={{
                background: 'linear-gradient(135deg, #A7C7F9 0%, #DCEBFF 100%)',
                color: '#1e293b',
                boxShadow: '0 4px 14px 0 rgba(167, 199, 249, 0.4), 0 0 20px rgba(167, 199, 249, 0.3)'
              }}
              data-testid="button-preregister-hero"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Pre-Register Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-2xl backdrop-blur-sm bg-background/60 border-2 hover:bg-background/80"
              data-testid="button-watch-demo"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Headphones,
                title: "Listen & Learn",
                description: "AI-guided pronunciation and comprehension.",
                testId: "card-feature-listen"
              },
              {
                icon: Mic,
                title: "Speak Confidently",
                description: "Real-time fluency and accent training.",
                testId: "card-feature-speak1"
              },
              {
                icon: MessageCircle,
                title: "Speak Confidently",
                description: "Conversational AI for daily practice.",
                testId: "card-feature-speak2"
              },
              {
                icon: FileEdit,
                title: "Write Better",
                description: "Grammar correction and expression improvement.",
                testId: "card-feature-write"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  className="h-full rounded-2xl border-card-border bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-testid={feature.testId}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground" data-testid={`text-${feature.testId}-title`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-${feature.testId}-desc`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative gradient orb */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* Built for the Bold Section */}
      <motion.section 
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-8 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="text-bold-title"
          >
            Built for the Bold
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="text-bold-description"
          >
            TuneEng is built by educators and engineers who understand how difficult fluency can be. With voice analysis and precision AI feedback, TuneEng helps you communicate with confidence, anywhere.
          </motion.p>

          {/* Laptop Illustration with Audio Waves */}
          <motion.div 
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-testid="img-laptop-illustration"
          >
            {/* Laptop mockup */}
            <div className="relative bg-gradient-to-br from-[hsl(215,30%,30%)] to-[hsl(215,30%,20%)] rounded-2xl p-3 shadow-2xl">
              <div className="bg-background rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                {/* Audio wave visualization */}
                <div className="flex items-center justify-center gap-1 h-24">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-primary to-primary/40 rounded-full"
                      animate={{
                        height: [
                          Math.random() * 60 + 20,
                          Math.random() * 80 + 10,
                          Math.random() * 60 + 20
                        ]
                      }}
                      transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Laptop base */}
              <div className="h-3 bg-gradient-to-br from-[hsl(215,30%,30%)] to-[hsl(215,30%,25%)] rounded-b-2xl -mx-3 mt-1" />
            </div>

            {/* Floating audio waves decoration */}
            <motion.div 
              className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/30"
              animate={{ x: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,50 Q20,30 30,50 T50,50" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,60 Q20,40 30,60 T50,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10,70 Q20,50 30,70 T50,70" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            <motion.div 
              className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary/30"
              animate={{ x: [10, -10, 10], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,50 Q60,30 70,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M50,60 Q60,40 70,60 T90,60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M50,70 Q60,50 70,70 T90,70" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative gradient orb */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* What You Get in Early Access Section */}
      <motion.section 
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="text-early-access-title"
          >
            What You Get in Early Access
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: CheckCircle,
                title: "AI-powered English skill map",
                description: "See your strengths and weaknesses in real time.",
                testId: "card-early-skillmap"
              },
              {
                icon: Gift,
                title: "Daily lesson plans",
                description: "Interactive lessons that fit your schedule.",
                testId: "card-early-lessons"
              },
              {
                icon: Bell,
                title: "Community access",
                description: "Join learners and AI coaches from around the world.",
                testId: "card-early-community"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  className="h-full rounded-2xl border-card-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-testid={item.testId}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3 text-foreground" data-testid={`text-${item.testId}-title`}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground" data-testid={`text-${item.testId}-desc`}>
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="relative px-6 py-24 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-2xl md:text-4xl font-medium mb-12 text-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="text-final-cta-subtitle"
          >
            Be the first to experience /<br className="sm:hidden" /> the future of English fluency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="px-10 py-7 text-lg rounded-2xl transition-all duration-300 hover:scale-105 mb-6 font-semibold"
              style={{
                background: 'linear-gradient(135deg, #A7C7F9 0%, #DCEBFF 100%)',
                color: '#1e293b',
                boxShadow: '0 4px 14px 0 rgba(167, 199, 249, 0.4), 0 0 20px rgba(167, 199, 249, 0.3)'
              }}
              data-testid="button-preregister-final"
            >
              Pre-Register Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-muted-foreground" data-testid="text-final-note">
              Limited early access • No cost • Instant updates
            </p>
          </motion.div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      </motion.section>
    </div>
  );
}
