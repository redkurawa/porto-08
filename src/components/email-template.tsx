import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({
  firstName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      {email && <p>Email: {email}</p>}
      {message && <p>Message: {message}</p>}
    </div>
  );
}
