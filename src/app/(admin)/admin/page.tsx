import { AnnouncementForm } from "@/components/admin/announcement-form";
import { AnnouncementList } from "@/components/announcements/announcement-list";

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Post New Announcement</h2>
          <AnnouncementForm />
        </div>
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Current Announcements</h2>
          <AnnouncementList />
        </div>
      </div>
    </div>
  );
}
