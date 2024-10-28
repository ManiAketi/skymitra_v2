// app/register/page.tsx

import { Suspense } from 'react';
import RegisterForm from './RegisterForm';
import { Card } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm />
        </Suspense>
      </Card>
    </div>
  );
}
