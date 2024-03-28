// Example for a file inside pages/app (assuming you are using Next.js App Router)
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function GET() {
  const session = await getIronSession(cookies(), {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "myapp_session"
  });

  if (!session.user) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ message: 'This is protected content.' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
