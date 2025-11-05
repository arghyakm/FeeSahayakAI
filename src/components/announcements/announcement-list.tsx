import { getAnnouncements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Megaphone } from 'lucide-react';

export function AnnouncementList() {
  const announcements = getAnnouncements();

  return (
    <div className="space-y-6">
      {announcements.map((announcement) => (
        <Card key={announcement.id} className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
                <Megaphone className="w-6 h-6 text-primary" />
            </div>
            <div>
                <CardTitle className="font-headline text-xl">{announcement.title}</CardTitle>
                <CardDescription>
                Posted on {new Date(announcement.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{announcement.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
