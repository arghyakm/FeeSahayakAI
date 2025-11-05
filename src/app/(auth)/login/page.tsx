
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo');

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="text-center">
         {logo && (
          <Image
            src={logo.imageUrl}
            alt={logo.description}
            width={80}
            height={80}
            data-ai-hint={logo.imageHint}
            className="mx-auto rounded-full"
          />
        )}
        <CardTitle className="font-headline text-3xl mt-4">FeeSahayak AI</CardTitle>
        <CardDescription className="text-base">
          Namaste! This is a demo. Log in to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
