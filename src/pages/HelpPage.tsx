import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, FileText, Mail } from "lucide-react";

const HelpPage = () => {
  const helpTopics = [
    {
      icon: MessageCircle,
      title: "Getting Started",
      description: "Learn the basics of using ViewTube",
    },
    {
      icon: FileText,
      title: "Upload Guidelines",
      description: "Best practices for uploading videos",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Frequently asked questions",
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Get help from our team",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Help Center</h1>
            <p className="text-sm text-muted-foreground">
              Find answers and get support
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {helpTopics.map((topic) => (
            <button
              key={topic.title}
              className="bg-card border border-border rounded-xl p-6 text-left hover:bg-accent transition-colors"
            >
              <topic.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-card border border-border rounded-xl p-6 text-center">
          <h3 className="font-semibold text-foreground mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our support team is here to help you.
          </p>
          <Button>Contact Support</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HelpPage;
