import DashboardForm from "@/components/dashboard-form";
import { Shell } from "@/components/shell";
import { Card, CardContent } from "@sayvoca/ui/card";
export default function Page() {
  return (
    <Shell layout="dashboard">
      <Card className="pt-8">
        <CardContent className="grid gap-4">
          <DashboardForm />
        </CardContent>
      </Card>
    </Shell>
  );
}