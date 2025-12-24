import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportPage = () => {
  const { toast } = useToast();
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportType || !description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Report submitted",
      description: "Thank you for your report. We'll review it shortly.",
    });
  };

  if (submitted) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Report Submitted
          </h1>
          <p className="text-muted-foreground text-center max-w-md mb-4">
            Thank you for helping keep ViewTube safe. We'll review your report.
          </p>
          <Button onClick={() => setSubmitted(false)}>Submit another report</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <Flag className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Report an issue</h1>
            <p className="text-sm text-muted-foreground">
              Help us maintain a safe community
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="report-type" className="text-foreground">
                  What are you reporting?
                </Label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger className="mt-2 bg-background">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spam">Spam or misleading</SelectItem>
                    <SelectItem value="harassment">Harassment or bullying</SelectItem>
                    <SelectItem value="violence">Violent content</SelectItem>
                    <SelectItem value="copyright">Copyright violation</SelectItem>
                    <SelectItem value="privacy">Privacy concern</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-foreground">
                  Describe the issue
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please provide details about the issue..."
                  className="mt-2 bg-background min-h-[150px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit">Submit Report</Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default ReportPage;
