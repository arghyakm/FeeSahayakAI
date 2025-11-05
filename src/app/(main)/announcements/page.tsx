import { AnnouncementList } from '@/components/announcements/announcement-list';

export default function AnnouncementsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Announcements</h1>
        <AnnouncementList />
    </div>
  );
}
