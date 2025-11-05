
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { RegisterForm } from '@/components/auth/register-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function RegisterPage() {
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
        <CardTitle className="font-headline text-3xl mt-4">Create an Account</CardTitle>
        <CardDescription className="text-base">
          This is a demo. Register to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
